import React, { useRef } from "react";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

export default function ProfileCard() {
  const ref = useRef<HTMLDivElement | null>(null);

  const downloadImage = () => {
    if (!ref.current) return;

    htmlToImage
      .toPng(ref.current)
      .then((dataUrl) => {
        download(dataUrl, "profile-card.png");
      })
      .catch((error) => {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <div ref={ref}>
      <div>
        <h1>John Doe</h1>
        <p>Software Developer</p>
      </div>
      <button onClick={downloadImage}>Download as image</button>
    </div>
  );
}
