import { useEffect, useState } from "react";
import "./Comment.css";
import axios from "axios";

const Comment = (props) => {
  const [nowComment, setNowComment] = useState("");
  const [nowID, setNowID] = useState("");
  const [nowPW, setNowPW] = useState("");
  const [comData, setComData] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setComData({
      postid: props.id,
      comments: nowComment,
      comid: nowID,
      compw: nowPW,
    });
  }, [nowComment, nowID, nowPW]);

  const commentHandler = (e) => {
    setNowComment(e.target.value);
  };
  const commentIDHandler = (e) => {
    setNowID(e.target.value);
  };
  const commentPWHandler = (e) => {
    setNowPW(e.target.value);
  };
  const commentSendHandler = () => {
    axios
      .put("http://localhost:8080/comments", comData)
      .then((response) => {
        props.onChangeComment(comData);
        setNowComment("");
        setNowID("");
        setNowPW("");
      })
      .catch((error) => {
        // if (error.response.status === 500) {
        //   console.log(error);
        //   alert("서버에 문제가 생겨 현재 댓글을 작성할 수 없습니다.");
        // } else {
        //   console.log(error);
        // }
        console.log(error);
      });
  };

  return (
    <div className="comment-container__container">
      <div className="comment-container__write">
        <textarea
          className="comment"
          placeholder="댓글을 작성해주세요 !"
          onChange={commentHandler}
          value={nowComment}
        />
        <div className="comment-buttons">
          <input
            type="text"
            placeholder="NICKNAME"
            onChange={commentIDHandler}
            value={nowID}
          />
          <input
            type="password"
            placeholder="PASSWORD"
            onChange={commentPWHandler}
            value={nowPW}
          />
          <input
            type="button"
            className="comment-button__submit"
            value="댓글 남기기"
            onClick={commentSendHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Comment;
