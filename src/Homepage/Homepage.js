import "./Homepage.css";
import Header from "../Header/Header";
import Button from "../UI/Button";
import Footer from "../UI/Footer";
import Card from "../UI/Card";
import axios from "axios";
import profileimage from "../Assets/IMG_0071 2.jpg";
import github from "../Assets/Icons/github-icon.png";
import instagram from "../Assets/Icons/instagram-icon.png";
import { useState, useEffect } from "react";

const Homepage = () => {
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get("http://localhost:8080/cookie")
      .then((response) => {
        console.log(response.data.VisitNumber);
        console.log(response.data.TotalNumber);
        setTotalNum(response.data.TotalNumber);
        setVisitNum(response.data.VisitNumber);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  const [totalNum, setTotalNum] = useState("");
  const [visitNum, setVisitNum] = useState("");
  const [changeEvent, setChangeEvent] = useState(false);
  const [postData, setPostData] = useState([]);

  const seeTaggedPostHandler = (taggedPostData) => {
    setPostData(taggedPostData);
    
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [changeEvent]);

  return (
    <div className="page">
      <Header /> {/* 6/2 Header 컴포넌트 재사용 위해서 분리 */}
      <div className="introduce">
        <div className="visitnum">
          <h5>TODAY : {visitNum} / TOTAL : {totalNum}</h5>
        </div>
        <div className="home-image__container">
          <img className="home-image" alt="my" src={profileimage} />
        </div>
        <div className="icon-container">
          <a href="https://github.com/choigonyok">
            <img className="icon-image" alt="my" src={github} />
          </a>
          <a href="https://www.instagram.com/choigonyok">
            <img className="icon-image" alt="my" src={instagram} />
          </a>
        </div>
        <div className="introduce-text__year">
          <h4>꾸준함이란 도구로 성장하기를 즐기는 웹 개발자 최윤석입니다</h4>
        </div>
        <div className="introduce-text__year">
          <h5>
            2017.03~ &nbsp;&nbsp;&nbsp; KYUNGHEE UNIV. COMPUTER ENGINEERING
          </h5>
        </div>
      </div>
      <Button onSeeTaggedPost={seeTaggedPostHandler} />
      {/* <p>Today : 1 &nbsp; / &nbsp; Total : 10</p> */}
      {postData && <Card postdata={postData}/>}
      <Footer/>
    </div>
  );
};

export default Homepage;
