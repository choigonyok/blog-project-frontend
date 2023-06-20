import Header from "../Header/Header";
import MDEditor, { code } from "@uiw/react-md-editor";
import "./Writepage.css";
import Footer from "../UI/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Writepage = () => {
  axios.defaults.withCredentials = true;

  const [md, setMD] = useState("");
  const [titleText, setTitleText] = useState("");
  const [tagText, setTagText] = useState("");
  const [dateText, setDateText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [img, setIMG] = useState([]);
  const [imgName, setImgName] = useState([]);
  const [unlock, setUnLock] = useState(false);
  const navigate = useNavigate();
  const mounted = useRef(false);

  const postHandler = (e) => {
    const postdata = {
      title: titleText,
      tag: tagText,
      datetime: dateText,
      body: bodyText,
    };
    axios
      .post("https://choigonyok.com/api/post/post", postdata, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        setUnLock(!unlock);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert(`특수문자 ' 가 입력된 곳이 존재합니다. 수정해주세요.`)
          console.error(error);
        } else if (error.response.status === 401) {
            console.error(error);
            alert("로그인이 안된 사용자는 게시글 작성 권한이 없습니다!");
          }
        });
  };

  const deleteWronglyWrittenPost = () => {
    axios
      .delete("https://choigonyok.com/api/post/delete0", {
        withCredentials: true,
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
    setIMG((img) => [...img, ...e.target.files]);
    // setIMG(e.target.files);

    let f = document.getElementById("imgfile").files;
    if (f.length !== 0) {
      for (let i = 0; i < f.length; i++) {
        setImgName((element) => [...element, f[i].name]);
      }
    }
  };

  const deleteIMGHandler = (value) => {
    setImgName(
      imgName.filter((element) => String(element) !== imgName.at(value))
    );
    setIMG(
      img.filter((element) => String(element.name) !== img.at(value).name)
    );
  };

  useEffect(() => {
    setBodyText(md);
  }, [md]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      const formData = new FormData();
      for (let i = 0; i < img.length; i++) {
        formData.append("file", img[i]);
      }
      axios
        .post("https://choigonyok.com/api/post/img", formData, {
          "Content-type": "multipart/form-data",
          withCredentials: true,
        })
        .then((response) => {
          // 응답 데이터 수신
          navigate("/");
        })
        .catch((error) => {
          if (error.response.status === 500) {
            deleteWronglyWrittenPost();
              alert("이미지가 등록되지 않을 채로 글이 작성되었습니다!");
          } else {
            console.error(error);
          }
        });
    }
  }, [unlock]);

  return (
    <div>
      <Header />
      <div className="admin-container">
        <div className="admin-main">WRITE</div>
        <div className="admin-titletagdate">
          <input
            type="text"
            placeholder="TAGS : PROJECT / BLOG"
            value={tagText}
            onChange={tagHandler}
          />
          {/* <input type="button" value="적용" onClick={TagClickHandler} /> */}
        </div>
        <div className="admin-titletagdate">
          <input
            type="text"
            placeholder="TITLE : [BLOG #1] 블로그 개발하기"
            value={titleText}
            onChange={titleHandler}
          />
          {/* <input type="button" value="적용" onClick={TitleClickHandler} /> */}
        </div>

        <div className="admin-titletagdate">
          <input
            type="text"
            placeholder="DATE : 2023-01-01"
            value={dateText}
            onChange={dateHandler}
          />
          {/* <input type="button" value="적용" onClick={DateClickHandler} /> */}
        </div>
        <div className="admin-titletagdate">
          <label for="imgfile">
            <div class="file-button">IMG UPLOAD</div>
          </label>
          <input
            type="file"
            required
            multiple
            id="imgfile"
            name="imgfile"
            className="file-input"
            onChange={imgHandler}
          />
        </div>
        {imgName.map((item, index) => (
          <div className="imgname-container">
            {item}
            <input
              type="button"
              value="X"
              className="imgname-button"
              onClick={() => deleteIMGHandler(index)}
            />
          </div>
        ))}
        <div>
          <div className="admin-editor">
            <MDEditor height={865} value={md} onChange={setMD} />
          </div>
        </div>
        <div className="admin-container__sample">
          <div className="sample-title">
            <div className="post-tagsbox">
              {tagText && <div className="post-tags__button">{tagText}</div>}
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

export default Writepage;
