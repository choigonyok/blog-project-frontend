import { useState } from "react";
import "./Comment.css";
import axios from "axios";

const Comment = (props) => {
        
  const [comments, setComments] = useState({"comments" : "", "postid" : props.id});
  const [nowComment, setNowComment] = useState("");
  const commentHandler = (e) => {
    setComments({"comments": e.target.value, "postid" : props.id});
    setNowComment(e.target.value);
  };
  const commentSendHandler = () => {
        axios
        .post("http://localhost:8080/comments",comments)
        .then((response)=>{
                props.onChangeComment(nowComment)
        })
        .catch((error)=>{
                if (error.response.status === 500) {
                        console.log(error);
                        alert("서버에 문제가 생겨 현재 댓글을 작성할 수 없습니다.");
                } else {
                        console.log(error);
                }
        })
  };

  return (
    <div className="comment-container__container">
      <div>
        <h1>- COMMENTS -</h1>
      </div>
      <div className="comment-container">
        <textarea
          className="comment"
          placeholder="댓글을 작성해주세요 !"
          onChange={commentHandler}
        />
        <input
          type="button"
          className="comment-button"
          value="댓글 남기기"
          onClick={commentSendHandler}
        />
      </div>
    </div>
  );
};

export default Comment;
