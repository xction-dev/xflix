'use client'

import contentsData from 'src/mock/contents.json'
import { useState } from "react"
import "./Comments.css"

export default function Comments(props){
    var commentsId = props.commentsId;
    var content = contentsData[commentsId];
    

    var [comment, setComment] = useState('')

    return(
        <div>
            <p className="comment-number">댓글 {content.comments.length}개</p>
            <input className="comment-input" placeholder="댓글을 입력하세요" value={comment} onChange={(e)=>{ setComment(e.target.value) }}></input>
            <div className="comment-container">
                <p className="comment-text">{content.comments[0].text}</p> 
            </div>
        </div>
    )
}