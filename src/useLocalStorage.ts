import { useState } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  // NOTE: 本当はここでStorageの値を設定するようにしたいけど、ChromeのStorageAPIが非同期なためやむなく断念。
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      chrome.storage.sync.set(
        { [key]: JSON.stringify(valueToStore) },
        () => {}
      );
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
};
