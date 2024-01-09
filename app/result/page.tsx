"use client";

import { useBookmarks } from "@/lib/features/bookmarks/bookmarks";
import Link from "next/link";
import * as Styled from "./Result.styles";
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";

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

  const { width: rawWidth, height: rawHeight } = useWindowSize();
  const width = rawWidth !== null ? rawWidth : 0;
  const height = rawHeight !== null ? rawHeight : 0;

  return (
    <Styled.Wrapper>
      <div>
        <Result />
        <Link href="/">
          <Styled.Button>Home</Styled.Button>
        </Link>
        <Confetti
          width={width}
          height={height}
          // gravity={0.05}
          confettiSource={{ x: width * 0.4, y: 0, w: width * 0.2, h: 0 }}
          colors={["#f542dd", "#ffe3fb", "#ffb5f5", "#ff78d4"]}
          drawShape={(ctx) => {
            // ctx.drawImage(img, 0, 0);
            ctx.translate(-18, -30);
            var path = new Path2D(
              "M33.73,32.02c-.05,2-.52,3.25-1.52,3.81-.25.15-.54.22-.83.22-.35-.01-.7-.11-1-.29.06.9.12,1.8.12,2.68.21,3.98-.09,7.96-.9,11.86-1.29,5.44-1.88,7.31-2,7.68-.06.26-.14.51-.24.75-.27.73-.96,1.22-1.74,1.24-.68-.01-1.32-.35-1.71-.91-.3-.42-.55-.87-.76-1.34l-.06-.11c-.25-.5-1.54-3.3-2.91-6.81-1.02-2.57-1.9-5.19-2.64-7.85-1.02,3.32-2.54,8.58-2.78,10-.11.75-.31,1.48-.6,2.17-.57,1.26-1.36,1.52-1.91,1.52-1.22,0-1.9-1.26-2.12-1.67-1.34-2.62-2.54-5.32-3.59-8.07-.9-2.24-1.61-4.55-2.14-6.91-.38.37-.88.58-1.4.6-.56-.02-1.06-.33-1.33-.82-.19-.31-.35-.65-.46-1-.28-.96-.49-1.95-.63-2.94C.19,33.1,0,30.35,0,27.6c-.01-1.83.26-3.65.82-5.39.56-1.81,1.37-3.54,2.4-5.14,1.3-2.01,2.92-3.81,4.78-5.32-.13-.36-.45-1.29-.74-2.29-.49-1.41-.64-2.91-.45-4.39.26-1.19.87-2.28,1.76-3.12.95-.88,2.12-1.49,3.39-1.76C12.48.07,13.02,0,13.56,0c1.33-.02,2.61.49,3.57,1.4,1.15,1.16,1.99,2.59,2.44,4.16,1.19.62,2.33,1.34,3.39,2.16,1.24.94,2.38,1.99,3.42,3.15,1.27,1.41,2.36,2.97,3.24,4.65,1.65,3.52,2.84,7.24,3.54,11.07.38,1.79.57,3.61.57,5.43Z"
            );
            ctx.fill(path);
          }}
        />
      </div>
    </Styled.Wrapper>
  );
}
