"use client";

import { bookmark, useBookmarks } from "@/lib/features/bookmarks/bookmarks";
import * as Styled from "./List.styles";

interface ListProps {}

interface BookmarkProps {
  b: bookmark;
}
const List = ({}: ListProps) => {
  const rows = [];
  const { bookmarks } = useBookmarks();

  for (let i = 0; i < bookmarks.length; i++) {
    const b = bookmarks[i];
    rows.push(<Bookmark key={i} b={b} />);
  }

  return (
    <Styled.Wrapper>
      <h5>Bookmarks</h5>
      <ul>{rows}</ul>
    </Styled.Wrapper>
  );
};

const Bookmark = ({ b }: BookmarkProps) => {
  return (
    <div>
      <Styled.Bookmark>
        <span>{b.name}</span>
      </Styled.Bookmark>
    </div>
  );
};

export { List };
