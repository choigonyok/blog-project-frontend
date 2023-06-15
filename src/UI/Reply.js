import axios from "axios";
import { useEffect, useState } from "react";
import "./Comment.css";
import "./Reply.css";

const Reply = (props) => {
  const [replyList, setReplyList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/reply/" + props.id)
      .then((response) => {
        //   console.log(response.data);
        setReplyList([...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.rerender]);

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
                  {/* <h2 onClick={() => showPasswordInput(item.replyuniqueid)}>X</h2> */}
                  <h2>X</h2>
                </div>
              </div>
              {/* {passwordComment === item.replyuniqueid ? (
                <div className="password-container">
                  <input
                    type="password"
                    placeholder="PASSWORD"
                    className="password-text"
                    //onChange={DeletePasswordHandler}
                  />
                  <input
                    type="button"
                    value="DELETE"
                    className="comment-button__submit"
                    //onClick={() => CheckPasswordHandler(item)}
                  />
                </div>
              ) : (
                ""
              )} */}

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
