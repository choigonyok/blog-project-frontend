import Header from "../Header/Header";
import MDEditor from "@uiw/react-md-editor";
import "./Adminpage.css";
import Footer from "../UI/Footer";
import { useEffect, useState } from "react";

const Adminpage = () => {
  const [md, setMD] = useState("");
  const [titleText, setTitleText] = useState("");
  const [tagText, setTagText] = useState("");
  const [dateText, setDateText] = useState("");

  useEffect(() => {
    console.log(md);
  }, [md]);

  const titleHandler = (e) => {
    setTitleText(e.target.value);
    console.log(titleText, tagText, dateText);
  };

  const tagHandler = (e) => {
    setTagText(e.target.value);
    console.log(titleText, tagText, dateText);
  };

  const dateHandler = (e) => {
    setDateText(e.target.value);
    console.log(titleText, tagText, dateText);
  };

  //   const TitleClickHandler = () => {

  //   };
  //   const TagClickHandler = () => {
  //     setTagText(e.target.value);
  //     console.log(tagText);
  //   };
  //   const DateClickHandler = () => {
  //     setTagText(e.target.value);
  //     console.log(tagText);
  //   };

  return (
    <div>
      <Header />
      <div className="admin-container">
        <div className="admin-main">ADMIN PAGE</div>
        <div className="admin-titletagdate">
          <textarea
            placeholder="ex) PROJECT / BLOG"
            value={tagText}
            onChange={tagHandler}
          />
          {/* <input type="button" value="적용" onClick={TagClickHandler} /> */}
        </div>
        <div className="admin-titletagdate">
          <textarea
            placeholder="ex) [BLOG #1] 블로그 개발하기"
            value={titleText}
            onChange={titleHandler}
          />
          {/* <input type="button" value="적용" onClick={TitleClickHandler} /> */}
        </div>

        <div className="admin-titletagdate">
          <textarea
            placeholder="ex) 2023-01-01"
            value={dateText}
            onChange={dateHandler}
          />
          {/* <input type="button" value="적용" onClick={DateClickHandler} /> */}
        </div>
        <div className="post-title">
          <div className="post-tagsbox">
            <div className="post-tags__button">{tagText}</div>
          </div>
          <div className="post-title__item">{titleText}</div>
          <div className="written-date">{dateText}</div>
          {/* <div>
            <MDEditor.Markdown className="post-body" source={} />
          </div> */}
        </div>
        <div>
          <div className="admin-editor">
            <MDEditor height={865} value={md} onChange={setMD} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Adminpage;
