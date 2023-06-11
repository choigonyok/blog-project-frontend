import Header from "../Header/Header";
import "./Deletepage.css";
import Footer from "../UI/Footer";
import axios, { HttpStatusCode, all } from "axios";
import { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const Deletepage = () => {
  axios.defaults.withCredentials = true;

  const [changeEvent, setChangeEvent] = useState(false);
  const [md, setMD] = useState("");
  const [titleText, setTitleText] = useState("");
  const [tagText, setTagText] = useState("");
  const [dateText, setDateText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [id, setID] = useState();
  const [isDeleted, setIsDeleted] = useState(false);
  const [toModify, setToModify] = useState(false);
  const [allPost, setAllPost] = useState(false);
  const [postData, setPostData] = useState([]);

  const postHandler = () => {
    const postdata = {
      title: titleText,
      tag: tagText,
      datetime: dateText,
      body: bodyText,
    };
    axios
      .post("http://localhost:8080/mod/" + id, postdata, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("SUCCESSSSS");
        setToModify(false);
        setIsDeleted(!isDeleted);
        setChangeEvent(!changeEvent);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert(`쌍따옴표가 입력된 곳이 존재합니다. 수정해주세요.`)
        } else if (error.response.status === 401){
          alert("로그인이 안된 사용자는 게시글 수정 권한이 없습니다!");
        } else {
          console.log(error);
        }
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/post/all")
      .then((response) => {
        setAllPost(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [isDeleted]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [changeEvent]);

  useEffect(() => {
    setBodyText(md);
  }, [md]);

  const deleteHandler = (value) => {
    axios
      .delete("http://localhost:8080/post/delete" + value, {
        withCredentials: true,
      })
      .then((response) => {
        setPostData(response.data);
        setIsDeleted(!isDeleted);
      })
      .catch((error) => {
        console.error(error);
        alert("로그인이 안된 사용자는 게시글 삭제 권한이 없습니다!");
      });
  };

  const modifyHandler = (value) => {
    axios
      .get("http://localhost:8080/post/" + value)
      .then((response) => {
        setToModify(true);
        setID(value);
        setTitleText(response.data[0].Title);
        setTagText(response.data[0].Tag);
        setDateText(response.data[0].Datetime);
        setMD(response.data[0].Body);
        setChangeEvent(!changeEvent);
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

  return (
    <div>
      <Header />
      <div className="delete-container">
        <div className="delete-main">DELETE / MODIFY</div>
        {toModify && (
          <div className="modify-container">
            <div className="admin-titletagdate">
              <input type="text" value={tagText} onChange={tagHandler} />
            </div>
            <div className="admin-titletagdate">
              <input type="text" value={titleText} onChange={titleHandler} />
            </div>
            <div className="admin-titletagdate">
              <input type="text" value={dateText} onChange={dateHandler} />
            </div>
            <div>
              <div className="admin-editor">
                <MDEditor height={400} value={md} onChange={setMD} />
              </div>
            </div>
            <div className="button-container">
              <input
                type="button"
                className="admin-button"
                value="이 내용으로 수정하기"
                onClick={postHandler}
              />
            </div>
          </div>
        )}
        <div className="delete-list">
          {allPost && (
            <div>
              {allPost.map((item, index) => (
                <div className="delete-inlist">
                  <div className="delete-post">
                    <h2 className="delete-date">{item.Datetime}</h2>
                    <h2 className="delete-title">{item.Title}</h2>
                    <h2 className="delete-tag">{item.Tag}</h2>
                  </div>
                  <div className="delete-button__container">
                    <input
                      className="delete-button"
                      type="button"
                      value="삭제"
                      onClick={() => {
                        deleteHandler(item.Id);
                      }}
                    />
                    <input
                      className="delete-button"
                      type="button"
                      value="수정"
                      onClick={() => {
                        modifyHandler(item.Id);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Deletepage;
