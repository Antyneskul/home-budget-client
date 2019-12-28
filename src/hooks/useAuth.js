import { useMemo } from 'react';

const useAuth = () => useMemo(() => (
    !!window.localStorage.getItem('token')
), []);

export default useAuth;
