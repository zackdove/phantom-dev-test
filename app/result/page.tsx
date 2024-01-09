"use client";

import { useBookmarks } from "@/lib/features/bookmarks/bookmarks";
import Link from "next/link";
import * as Styled from "./Result.styles";

export default function ResultPage() {
  const { bookmarks } = useBookmarks();
  const addedBookmark = bookmarks[bookmarks.length - 1];
  const Result = () => {
    if (bookmarks.length >= 1) {
      return (
        <div>
          <h1>Thanks!</h1>
          <h5>New Bookmark</h5>
          <div>{addedBookmark.name}</div>
          <h5>URL</h5>
          <div>
            <a href={addedBookmark.url}>{addedBookmark.url}</a>
          </div>
        </div>
      );
    } else {
      return <div>No bookmarks</div>;
    }
  };

  return (
    <Styled.Wrapper>
      <div>
        <Result />
        <Link href="/">
          <Styled.Button>Home</Styled.Button>
        </Link>
      </div>
    </Styled.Wrapper>
  );
}
