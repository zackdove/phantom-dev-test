"use client";

import { useEffect, useRef, useState } from "react";

export interface bookmark {
  name: string;
  url: string;
}

const storageKey = "bookmarks";

const debugBookmarks: Array<bookmark> = [];
for (let i = 0; i < 100; i++) {
  debugBookmarks.push({
    name: ["BBC", "Google", "Unreal Engine", "TouchDesigner"][i % 3],
    url: [
      "https://bbc.co.uk",
      "https://google.com",
      "https://www.unrealengine.com/",
      "https://derivative.ca/",
    ][i % 3],
  });
}

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useState<bookmark[]>(debugBookmarks);

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
