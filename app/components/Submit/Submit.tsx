"use client";

import { useBookmarks } from "@/lib/features/bookmarks/bookmarks";
import * as Styled from "./Submit.styles";

interface SubmitProps {}

const Submit = ({}: SubmitProps) => {
  const { addBookmark } = useBookmarks();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      url: { value: string };
      name: { value: string };
    };
    const url = target.url.value;
    const name = target.name.value;

    addBookmark({ url, name });
  };

  return (
    <Styled.Wrapper>
      <form onSubmit={handleSubmit}>
        <label>
          <h5>URL</h5>
          <input type="text" id="url" name="url"></input>
        </label>
        <label>
          <h5>Name</h5>
          <input type="text" id="name" name="name"></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </Styled.Wrapper>
  );
};

export { Submit };
