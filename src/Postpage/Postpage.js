import Header from "../Header/Header";
import "./Postpage.css";
import Footer from "../UI/Footer";
import Card from "../UI/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";

const Postpage = () => {
  let { postid } = useParams();

  const [md, setMD] = useState("");
  const [postData, setPostData] = useState([]);
  const [relatedPostData, setRelatedPostData] = useState([]);

  useEffect(() => {
    // GET 요청 보내기
    axios
      .get("http://localhost:8080/post/" + JSON.stringify(postid))
      .then((response) => {
        // 응답 데이터 수신
        setPostData(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [postid]);

  useEffect(() => {
    // POST 요청 보내기

    axios
      .post("http://localhost:8080/tag", postData)
      .then((response) => {
        // 응답 데이터 수신
        const jsonArray = Object.values(response.data);

        console.log(jsonArray.filter((post) => String(post.Id) !== postid));
        setRelatedPostData(
          jsonArray.filter((post) => String(post.Id) !== postid)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, [postData]);

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div>
        <div className="image-container">
          <img className="image" alt="my" src={postData.ImagePath} />
        </div>
        <div className="post-title">
          <div className="post-tagsbox">
            <button className="post-tags__button">{postData.Tag}</button>
          </div>
          <p className="post-title__item">{postData.Title}</p>
          <p className="written-date">{postData.Datetime}</p>
        </div>
        <div>
          <MDEditor.Markdown className="post-body" source={postData.Body} />
        </div>
      </div>
      <div className="related-post__container">
        <p className="related-post__content">- RELATED POSTS -</p>
      </div>
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <div>
          <MDEditor height={865} value={md} onChange={setMD} />
        </div>
      </div> */}
      {relatedPostData && <Card postdata={relatedPostData} />}
      <Footer />
    </div>
  );
};
export default Postpage;
