"use client";

import Player from "src/components/Play/Player/Player.js";
import Comments from "src/components/Play/Comments/Comments.js";
import "./PlayContainer.css";
import { useState, useEffect } from "react";
import contentsData from "src/mock/contents.json";

export default function PlayContainer(props) {
  var id = props.contentId;
  // const contentToPlay = contentsData[id];

  const [contentData, setContentData] = useState(null);

  useEffect(() => {
    const apiUrl = "/api/contents/:contents_id"; // 서버 API 엔드포인트 URL

    fetch(apiUrl)
      .then((response) => response.json())
      .then((Content) => {
        setContentData(Content);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(contentData);
  var contentToPlay = contentData;

  if (contentToPlay.type !== "youtube") {
    return <div>잘못된 접근입니다</div>;
  }

  return (
    <div className="play-container">
      <Player content={contentToPlay} className="player-component" />
      <Comments content={contentToPlay} className="comments-component" />
    </div>
  );
}
