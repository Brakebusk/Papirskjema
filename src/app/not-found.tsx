'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  }, [router]);

  return <h2>Denne siden finnes ikke</h2>;
};
export default NotFound;
