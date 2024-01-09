"use client";

import { useEffect, useRef, useState } from "react";

export interface bookmark {
  name: string;
  url: string;
}

const storageKey = "bookmarks";

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<bookmark[]>([]);

  const isMounted = useRef(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        setBookmarks(JSON.parse(stored));
      }
    } catch (e) {
      console.log(e);
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      window.localStorage.setItem(storageKey, JSON.stringify(bookmarks));
    } else {
      isMounted.current = true;
    }
  }, [bookmarks]);

  const addBookmark = (b: bookmark) => {
    setBookmarks([...bookmarks, b]);
  };

  return { bookmarks, addBookmark };
};
