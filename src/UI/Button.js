import "./Button.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { json } from "react-router-dom";

const Button = (props) => {
  const [responseData, setResponseData] = useState(null);
  const [title, setTitle] = useState(`" CHOIGONYOK "`);
  const [animate, setAnimate] = useState(true);
  const [PostData, setPostData] = useState("");

  useEffect(() => {
    // POST 요청 보내기
    console.log(PostData);

    axios
      .post("http://localhost:8080/tag", PostData)
      .then((response) => {
        // 응답 데이터 수신
        const jsonArray = Object.values(response.data);
        props.onSeeTaggedPost(jsonArray);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [PostData]);

  const ClickHandler = (value) => {
    setPostData({ tagname: value });
    setTitle(`" ` + value + ` "`);
    setAnimate(!animate);
  };

  const AnimationHandler = () => {
    setAnimate(!animate);
  };
  return (
    <div>
      <h1
        className={animate ? "fadein tags" : "tags"}
        onAnimationEnd={AnimationHandler}
      >
        {title}
      </h1>
      <div className="container">
        <input
          type="button"
          className="tags-button"
          value="ALL"
          onClick={() => ClickHandler("ALL")}
        />
        <input
          type="button"
          className="tags-button"
          value="PROJECT"
          onClick={() => ClickHandler("PROJECT")}
        />
        <input
          type="button"
          className="tags-button"
          value="STUDY"
          onClick={() => ClickHandler("STUDY")}
        />
        <input
          type="button"
          className="tags-button"
          value="RETRO"
          onClick={() => ClickHandler("RETRO")}
        />
        <input
          type="button"
          className="tags-button"
          value="CLOUD-CHAT-SERVICE"
          onClick={() => ClickHandler("CLOUD-CHAT-SERVICE")}
        />
        <input
          type="button"
          className="tags-button"
          value="DEV-BLOG"
          onClick={() => ClickHandler("DEV-BLOG")}
        />
        <input
          type="button"
          className="tags-button"
          value="REACT.JS"
          onClick={() => ClickHandler("REACT.JS")}
        />
        <input
          type="button"
          className="tags-button"
          value="COLLABO W/ DEPT. OF ART"
          onClick={() => ClickHandler("COLLABO W/ DEPT. OF ART")}
        />
        <input
          type="button"
          className="tags-button"
          value="DEV-BLOG VER.2"
          onClick={() => ClickHandler("DEV-BLOG VER.2")}
        />
        <input
          type="button"
          className="tags-button"
          value="DOCKER / K8S"
          onClick={() => ClickHandler("DOCKER / K8S")}
        />
      </div>
    </div>
  );
};

export default Button;
