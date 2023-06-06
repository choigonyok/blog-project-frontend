import { Editor } from "@toast-ui/react-editor";
import Header from "../Header/Header";
import ContentsViewer from "../UI/ContentsViewer";
import abc from "../Assets/img9.jpeg";
import "./Postpage.css";
import EditorBox from "../UI/EditorBox";
import Footer from "../UI/Footer";
import Card from "../UI/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Postpage = () => {
  let {postid} = useParams();
  
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    // POST 요청 보내기
    axios
      .get("http://localhost:8080/post/"+JSON.stringify(postid))
      .then((response) => {
        // 응답 데이터 수신
        console.log(response.data[0]);
        setPostData(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  },[]);
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div>
        <div className="image-container">
          <input type="button" className="postbutton" value="<" />
          <img className="image" alt="my" src={postData.ImagePath} />
          <input type="button" className="postbutton" value=">" />
        </div>
        <div className="post-title">
          <div className="post-tagsbox">
            <button className="post-tags__button">{postData.Tag}</button>
          </div>
          <p className="post-title__item">
            {postData.Title}
          </p>
          <p className="written-date">{postData.Datetime}</p>
        </div>
        <div className="post-body">
          <ContentsViewer          
            contents={postData.Body}
          />
        </div>
        
      </div>
      <div className="related-post__container">
        <p className="related-post__content">- RELATED POSTS -</p>
      </div>
      {/* <Card/> related post의 tag 문제*/}
      <Footer />
    </div>
  );
};
export default Postpage;
