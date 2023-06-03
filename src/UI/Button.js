import "./Button.css";
import { useState } from "react";

const Button = () => {
  const [title, setTitle] = useState("all");
  const [animate, setAnimate] = useState(true);

  const ClickHandler = (value) => {
    setTitle(value);
    setAnimate(!animate);
    console.log(value);
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
          value="all"
          onClick={() => ClickHandler("all")}
        />
        <input
          type="button"
          className="tags-button"
          value="project"
          onClick={() => ClickHandler("project")}
        />
        <input
          type="button"
          className="tags-button"
          value="review"
          onClick={() => ClickHandler("review")}
        />
        <input
          type="button"
          className="tags-button"
          value="study"
          onClick={() => ClickHandler("study")}
        />
        <input
          type="button"
          className="tags-button"
          value="go"
          onClick={() => ClickHandler("go")}
        />
        <input
          type="button"
          className="tags-button"
          value="dev.blog"
          onClick={() => ClickHandler("dev.blog")}
        />
        <input
          type="button"
          className="tags-button"
          value="react.js"
          onClick={() => ClickHandler("react.js")}
        />
        <input
          type="button"
          className="tags-button"
          value="all about that bass"
          onClick={() => ClickHandler("all about that bass")}
        />
        <input
          type="button"
          className="tags-button"
          value="spring"
          onClick={() => ClickHandler("spring")}
        />
        <input
          type="button"
          className="tags-button"
          value="docker"
          onClick={() => ClickHandler("docker")}
        />
      </div>
    </div>
  );
};

export default Button;
