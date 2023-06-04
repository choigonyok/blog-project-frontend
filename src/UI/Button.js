import "./Button.css";
import { useState } from "react";

const Button = () => {
  const [title, setTitle] = useState("ALL");
  const [animate, setAnimate] = useState(true);

  const ClickHandler = (value) => {
    setTitle(`" `+value+` "`);
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
          value="ALL ABOUT THAT BASS"
          onClick={() => ClickHandler("ALL ABOUT THAT BASS")}
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
