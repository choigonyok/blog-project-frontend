import { useEffect, useState } from "react";
import "./Comment.css";
import axios from "axios";

const Comment = (props) => {
  const [nowComment, setNowComment] = useState("");
  const [nowID, setNowID] = useState("");
  const [nowPW, setNowPW] = useState("");
  const [comData, setComData] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [comInfo, setComInfo] = useState([]);
  const [passwordComment, setPasswordComment] = useState(0);
  const [deletePW, setDeletePW] = useState("");
  

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
    if (
      comData.comid === "" ||
      comData.comments === "" ||
      comData.compw === ""
    ) {
      alert("작성되지 않은 항목이 존재합니다.");
    } else {
      axios
        .put("http://localhost:8080/comments", comData)
        .then((response) => {
          console.log(comData);
          console.log(comData);
          console.log(comData);
          setNowComment("");
          setNowID("");
          setNowPW("");
          setIsFinished(!isFinished);
        })
        .catch((error) => {
          if (error.response.status === 500) {
            console.log(error);
            alert("서버에 문제가 생겨 현재 댓글을 작성할 수 없습니다.");
          } else if (error.response.status === 400) {
            alert("특수문자 ' 은 입력하실 수 없습니다.");
          } else {
            console.log(error);
          }
        });
    }
  };

  // post id로 해당 post의 comments get
  useEffect(() => {
    axios
      .get("http://localhost:8080/post/comments/" + props.id)
      .then((response) => {
        setComInfo([...response.data]);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [isFinished]);

  const showPasswordInput = (value) => {
    setPasswordComment(value);
  };

  const CheckPasswordHandler = (value) => {
    if (value.compw === deletePW) {
      alert("RIGHT");
    } else {
      alert("WRONG");
    }
    //보안상 헤더에 토큰 넣어서 보내야함
    axios
      .delete("http://localhost:8080/post/comments/"+value.uniqueid)
      .then((response)=>{
        setIsFinished(!isFinished);
      })
      .catch((error)=>{
      })
  };

  const DeletePasswordHandler = (e) => {
    if (e.target.value.length <= 8) {
      setDeletePW(e.target.value);
    } else {
      alert("PASSWORD 최대 길이 제한은 8자입니다!");
    }
  }
  

  return (
    <div>
      <div className="comment-container">
        {comInfo &&
          comInfo.map((item, index) => (
            <div>
              <div
                className={
                  item.isadmin === 1
                    ? "comment-box__adminwriter"
                    : "comment-box__writer"
                }
              >
                {item.comid}
              </div>
              <div className="comment-box">
                <div className="comment-delete">{item.comments}</div>
                <div className="comment-delete__button">
                  <h4 onClick={() => showPasswordInput(item.uniqueid)}>X</h4>
                </div>
              </div>
              {passwordComment === item.uniqueid ? 
              <div className="password-container">
                <input type="password" placeholder="PASSWORD" className="password-text" onChange={DeletePasswordHandler}/>
                <input type="button" value="DELETE" className="comment-button__submit" onClick={()=>CheckPasswordHandler(item)}/>
              </div>
               : ""}
            </div>
          ))}
      </div>
      <div className="comment-container__container">
        <div className="comment-container__write">
          <textarea
            className="comment"
            placeholder="PLEASE LEAVE A COMMENT ! (MAX 500 LETTERS)"
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
              value="POST"
              onClick={commentSendHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
