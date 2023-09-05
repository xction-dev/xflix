"use client";

import contentsData from "src/mock/contents.json";
import { useState } from "react";
import "./Comments.css";

export default function Comments(props) {
  var comments = props.content.comments;
  // var content = contentsData[props.commentsId];
  // var comments = content.comments;

  var [newComment, setNewComment] = useState("");

  if (comments == 0) {
    return (
      <div className="comments-container">
        <p className="comment-number">댓글 0개</p>
        <input
          className="comment-input"
          placeholder="댓글을 작성하세요"
          value={newComment}
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
        ></input>
      </div>
    );
  }

  return (
    <div className="comments-container">
      <p className="comment-number">댓글 {comments.length}개</p>
      <input
        className="comment-input"
        placeholder="댓글을 작성하세요"
        value={newComment}
        onChange={(e) => {
          setNewComment(e.target.value);
        }}
      ></input>
      {comments.map((a, index) => {
        return (
          <div className="comment-box" key={index}>
            <p className="comment-text">{a.text}</p>
          </div>
        );
      })}
    </div>
  );
}
