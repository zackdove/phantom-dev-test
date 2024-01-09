"use client";

import { useBookmarks } from "@/lib/features/bookmarks/bookmarks";
import * as Styled from "./Submit.styles";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

interface SubmitProps {}

const Submit = ({}: SubmitProps) => {
  const router = useRouter();
  const { addBookmark } = useBookmarks();

  const [isURLValid, setIsURLValid] = useState<boolean>(false);
  const [isNameValid, setIsNameValid] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      url: { value: string };
      name: { value: string };
    };
    const url = target.url.value;
    const name = target.name.value;

    addBookmark({ url, name });

    router.push("/result");
  };

  const checkValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch (err) {
      return false;
    }
  };

  const checkURL = async (url: string) => {
    if (checkValidUrl(url)) {
      try {
        const response = await fetch(
          `/api/checkURL?url=${encodeURIComponent(url)}`,
          { method: "GET" }
        );
        const data = await response.json();
        setIsURLValid(data.live);
      } catch (error) {
        console.error("Error checking URL:", error);
        setIsURLValid(false);
      }
    } else {
      setIsURLValid(false);
    }
  };

  const handleURLChange = async (e: ChangeEvent<HTMLInputElement>) => {
    checkURL(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value.length);
    setIsNameValid(e.target.value.length > 0);
  };

  return (
    <Styled.Wrapper>
      <form onSubmit={handleSubmit}>
        <label>
          <h5>URL</h5>
          <input
            type="text"
            id="url"
            name="url"
            onChange={handleURLChange}
          ></input>
        </label>
        <label>
          <h5>Name</h5>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleNameChange}
          ></input>
        </label>
        <input
          type="submit"
          value="Submit"
          disabled={!(isURLValid && isNameValid)}
        />
      </form>
    </Styled.Wrapper>
  );
};

export { Submit };
