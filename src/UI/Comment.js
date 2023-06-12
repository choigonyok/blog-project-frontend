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
    if (e.target.value.length <= 500) {
      setNowComment(e.target.value);
    } else {
      alert(
        "댓글 최대 길이 제한은 500자입니다! 추가적으로 하실 말씀이 있으시면 achoistic98@naver.com 로 메일 주세요 :)"
      );
    }
  };
  const commentIDHandler = (e) => {
    if (e.target.value.length <= 13) {
      setNowID(e.target.value);
    } else {
      alert("NICKNAME 최대 길이 제한은 13자입니다!");
    }
  };
  const commentPWHandler = (e) => {
    if (e.target.value.length <= 8) {
      setNowPW(e.target.value);
    } else {
      alert("PASSWORD 최대 길이 제한은 8자입니다!");
    }
  };
  const commentSendHandler = () => {
    axios
      .put("http://localhost:8080/comments", comData)
      .then((response) => {
        console.log(comData);
        console.log(comData);
        console.log(comData);
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
