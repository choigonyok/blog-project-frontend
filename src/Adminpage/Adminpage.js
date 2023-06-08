import Header from "../Header/Header";
import MDEditor from "@uiw/react-md-editor";
import "./Adminpage.css";
import Footer from "../UI/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { useRef } from "react";

const Adminpage = () => {
  const [md, setMD] = useState("");
  const [titleText, setTitleText] = useState("");
  const [tagText, setTagText] = useState("");
  const [dateText, setDateText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [img, setIMG] = useState([]);
  const [unlock, setUnLock] = useState(false);
  const navigate = useNavigate();
  const mounted = useRef(false);

  console.log(img);

  useEffect(() => {
    setBodyText(md);
  }, [md]);

  const titleHandler = (e) => {
    setTitleText(e.target.value);
  };

  const tagHandler = (e) => {
    setTagText(e.target.value);
  };

  const dateHandler = (e) => {
    setDateText(e.target.value);
  };

  const imgHandler = (e) => {
    setIMG(e.target.files);
  };

  

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      const formData = new FormData();
      for (let i = 0; i < img.length; i++) {
        formData.append("file", img[i]);
      }
      axios
        .post("http://localhost:8080/postdata/img", formData, {
          "Content-type": "multipart/form-data",
        })
        .then((response) => {
          // 응답 데이터 수신
          console.log("POST2 Success");
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [unlock]);

  const postHandler = (e) => {
    const postdata = {
      title: titleText,
      tag: tagText,
      datetime: dateText,
      body: bodyText,
    };
    console.log(postdata);
    axios
      .post("http://localhost:8080/postdata/post", postdata)
      .then((response) => {
        setUnLock(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Header />
      <div className="admin-container">
        <div className="admin-main">ADMIN PAGE</div>
        <div className="admin-titletagdate">
          <textarea
            placeholder="TAGS : PROJECT / BLOG"
            value={tagText}
            onChange={tagHandler}
          />
          {/* <input type="button" value="적용" onClick={TagClickHandler} /> */}
        </div>
        <div className="admin-titletagdate">
          <textarea
            placeholder="TITLE : [BLOG #1] 블로그 개발하기"
            value={titleText}
            onChange={titleHandler}
          />
          {/* <input type="button" value="적용" onClick={TitleClickHandler} /> */}
        </div>

        <div className="admin-titletagdate">
          <textarea
            placeholder="DATE : 2023-01-01"
            value={dateText}
            onChange={dateHandler}
          />
          {/* <input type="button" value="적용" onClick={DateClickHandler} /> */}
        </div>
        <div className="admin-titletagdate">
          <input type="file" required multiple id="fileinput" onChange={imgHandler} />
        </div>
        <div>
          <div className="admin-editor">
            <MDEditor height={865} value={md} onChange={setMD} />
          </div>
        </div>
        <div className="admin-container__sample">
          <div className="sample-title">
            <div className="post-tagsbox">
              <div className="post-tags__button">{tagText}</div>
            </div>
            <div className="post-title__item">{titleText}</div>
            <div className="written-date">{dateText}</div>
            <div className="sample-container">
              <MDEditor.Markdown className="post-body" source={bodyText} />
            </div>
          </div>
        </div>

        <div className="button-container">
          <input
            type="button"
            className="admin-button"
            value="POST 추가하기"
            onClick={postHandler}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Adminpage;
