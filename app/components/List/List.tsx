"use client";

import { bookmark, useBookmarks } from "@/lib/features/bookmarks/bookmarks";
import * as Styled from "./List.styles";
import { useState } from "react";

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
  const [popupActive, setPopupActive] = useState(false);
  return (
    <div>
      <Styled.Bookmark onClick={() => setPopupActive(true)}>
        <span>{b.name}</span>
      </Styled.Bookmark>
      <Styled.PopupWrapper $active={popupActive}>
        <Styled.PopupBackground
          onClick={() => setPopupActive(false)}
        ></Styled.PopupBackground>
        <Styled.Popup>
          <Styled.Close onClick={() => setPopupActive(false)}>×</Styled.Close>
          <h5>Name</h5>
          <div>{b.name}</div>
          <h5>URL</h5>
          <div>
            <a href={b.url}>{b.url}</a>
          </div>
        </Styled.Popup>
      </Styled.PopupWrapper>
    </div>
  );
};

export { List };
