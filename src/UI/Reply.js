import axios from "axios";
import { useEffect, useState } from "react";
import "./Comment.css";
import "./Reply.css";

const Reply = (props) => {
  const [replyList, setReplyList] = useState([]);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [replyID, setReplyID] = useState(0);
  const [deletePW, setDeletePW] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  const showPasswordInput = (value) => {
    if (isDeleteClicked === false) {
      setReplyID(value);
      setIsDeleteClicked(true);
    } else if (isDeleteClicked === true && value !== replyID) {
      setReplyID(value);
    } else {
      setReplyID(0);
      setIsDeleteClicked(false);
    }
  };

  useEffect(() => { 
    axios
      .get(process.env.REACT_APP_HOST+ "/api/reply/" + props.id)
      .then((response) => {
        //   console.log(response.data);
        setReplyList([...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.rerender, isFinished]);

  const CheckPasswordHandler = (value) => {
    axios
      .post(
        process.env.REACT_APP_HOST+ "/api/reply?replyid=" +
          value.replyuniqueid +
          "&inputpw=" +
          deletePW
      )
      .then((response) => {
        alert("댓글이 삭제되었습니다.");
        setIsFinished(!isFinished);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          console.log(error);
          alert("PASSWORD가 틀렸습니다.");
        } else {
          console.log(error);
          alert(error);
        }
      });
  };

  const DeletePasswordHandler = (e) => {
    if (e.target.value.length <= 8) {
      setDeletePW(e.target.value);
    } else {
      alert("PASSWORD 최대 길이 제한은 8자입니다!");
    }
  };

  return (
    <div className="reply-box">
      {replyList &&
        replyList.map((item, index) => {
          return (
            <div>
              <div
                className={
                  item.replyisadmin === 1
                    ? "reply-box__adminwriter"
                    : "reply-box__writer"
                }
                // onClick={() => ReplyHandler(item)}
              >
                {item.comid}
              </div>
              <div className="reply-box__text">
                <div className="reply-delete">
                  <div>{item.comments}</div>
                </div>
                <div className="comment-delete__button">
                  <h2 onClick={() => showPasswordInput(item.replyuniqueid)}>
                    X
                  </h2>
                </div>
              </div>
              {replyID === item.replyuniqueid ? (
                <div className="password-container__reply">
                  <input
                    type="password"
                    placeholder="PASSWORD"
                    className="password-text"
                    onChange={DeletePasswordHandler}
                  />
                  <input
                    type="button"
                    value="DELETE"
                    className="comment-button__submit"
                    onClick={() => CheckPasswordHandler(item)}
                  />
                </div>
              ) : (
                ""
              )}

              {/* {reply === item.uniqueid && passwordComment === 0 && (
                <div className="reply-container__write">
                  <textarea
                    className="comment"
                    placeholder={"REPLY TO " + item.comid}
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
                      onClick={() => replySendHandler(item.uniqueid)}
                    />
                  </div>
                </div>
              )} */}
            </div>
          );
        })}
    </div>
  );
};

export default Reply;
