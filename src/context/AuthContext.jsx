import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
	const [session, setSession] = useState(undefined); // undefined = loading
	const [isAdmin, setIsAdmin] = useState(false);

	const fetchProfile = useCallback(async userId => {
		if (!userId) {
			setIsAdmin(false);
			return;
		}
		const { data } = await supabase.from('profiles').select('is_admin').eq('id', userId).single();
		setIsAdmin(data?.is_admin ?? false);
	}, []);

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
			fetchProfile(session?.user?.id ?? null);
		});

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session);
			fetchProfile(session?.user?.id ?? null);
		});

		return () => subscription.unsubscribe();
	}, [fetchProfile]);

	async function login(email, password) {
		const { error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) throw error;
	}

	async function logout() {
		await supabase.auth.signOut();
	}

	return (
		<AuthContext.Provider value={{ session, user: session?.user ?? null, isAdmin, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}
