"use client";

import Player from "src/components/Play/Player/Player.js";
import Comments from "src/components/Play/Comments/Comments.js";
import "./PlayContainer.css";
import { useState, useEffect } from "react";

export default function PlayContainer(props) {
  const [contentData, setContentData] = useState(null);

  useEffect(() => {
    const id = props.contentId;
    const apiUrl = `/api/contents/${id}`; // 서버 API 엔드포인트 URL

    fetch(apiUrl)
      .then((response) => response.json())
      .then((parsedResponse) => {
        setContentData(parsedResponse);
        console.log(contentData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (contentData === undefined) {
    return <p>Loading..</p>;
  } else if (contentData && contentData.type !== "youtube") {
    return <div>잘못된 접근입니다</div>;
  }

  return (
    <div className="play-container">
      <Player content={contentData} className="player-component" />
      <Comments content={contentData} className="comments-component" />
    </div>
  );
}
