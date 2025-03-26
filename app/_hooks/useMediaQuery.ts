"use client"

import { useEffect, useState } from 'react'

export const useMediaQuery = (query : string) : boolean => {
  const [matches, setMatches] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaWatcher = window.matchMedia(`(max-width: ${query})`);
    setMatches(mediaWatcher.matches);

    const updateIsNarrowScreen = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    mediaWatcher.addEventListener("change", updateIsNarrowScreen);

    return () => {
      mediaWatcher.removeEventListener("change", updateIsNarrowScreen);
    };
  }, [query]);
  return matches
}

