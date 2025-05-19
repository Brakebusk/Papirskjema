'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, [router]);

  return <h2>Denne siden finnes ikke</h2>;
};
export default NotFound;
