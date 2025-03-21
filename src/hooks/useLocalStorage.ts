import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export function useUnbufferedLocalStorage<T>(
  key: string,
  defaultValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const storedValue = readLocalStoreValue(key);
    return storedValue ?? defaultValue;
  });

  useEffect(() => {
    if (key) localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default function useLocalStorage<T>(
  key: string,
  defaultValue: T,
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useUnbufferedLocalStorage<T>(key, defaultValue);

  // Buffer value to prevent hydration issues
  const [bufferedValue, setBufferedValue] = useState<T>(defaultValue);
  useEffect(() => setBufferedValue(value), [value]);

  return [bufferedValue, setValue];
}

export const readLocalStoreValue = (key: string) => {
  if (typeof window !== 'undefined' && 'localStorage' in window) {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
  }
  return null;
};
