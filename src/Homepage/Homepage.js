import "./Homepage.css";
import Header from "../Header/Header";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../UI/Footer";
import Pagebutton from "../UI/Pagebutton";

import profileimage from "../Assets/IMG_0071 2.jpg";
import abc from "../Assets/74FAFC0D-E8A8-4E51-8000-AB7523F30200_1_105_c.jpeg";
import img2 from "../Assets/E71D4A5B-7078-430F-B2BE-65F7D728CAA4_1_105_c.jpeg";
import img3 from "../Assets/img3.jpeg";
import img4 from "../Assets/img4.jpeg";
import img5 from "../Assets/img5.jpeg";
import img6 from "../Assets/img6.jpeg";

const Homepage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // 버튼 클릭 시 특정 URL로 이동
    navigate("/post");
  };

  return (
    <div>
      <Header /> {/* 6/2 Header 컴포넌트 재사용 위해서 분리 */}
      <div className="introduce">
        <div className="home-image__container">
          <img className="home-image" alt="my" src={profileimage} />
        </div>
        <h4>꾸준함이란 도구로 성장하기를 즐기는 웹 개발자 최윤석입니다</h4>
        <div className="introduce-text">
        
        <h5>2017.03~ &nbsp;&nbsp;&nbsp; KYUNGHEE UNIV. COMPUTER ENGINEERING</h5>
        </div>
      </div>
      <Button />
      {/* <p>Today : 1 &nbsp; / &nbsp; Total : 10</p> */}
      <div className="cardcontainer">
        <div>
          <h2 className="postcard" onClick={handleClick}>
            <div>
              <img className="postcard-image" alt="my" src={img4} />
            </div>
            <div className="postcard-text">
              <p>리액트로 바위치기</p>
            </div>
            
            <div className="postcard-tag">
              <p>STUDY / REACT.JS</p>
            </div>
            <div className="postcard-date">
              <p>2023/06/07</p>
            </div>
          </h2>
        </div>
        <div>
          <h2 className="postcard" onClick={handleClick}>
            <div>
              <img className="postcard-image" alt="my" src={img5} />
            </div>
            <div className="postcard-text">
              <p>예대생 디자이너와의 협업 프로젝트 !</p>
            </div>
            
            <div className="postcard-tag">
              <p>PROJECT / REACT.JS / GO / DOCKER</p>
            </div>
            <div className="postcard-date">
              <p>2023/06/07</p>
            </div>
          </h2>
        </div>
        <div>
          <h2 className="postcard" onClick={handleClick}>
            <div>
              <img className="postcard-image" alt="my" src={img6} />
            </div>
            <div className="postcard-text">
              <p>프로젝트 2-1 : 블로그 개발하기 VER.2</p>
            </div>
            
            <div className="postcard-tag">
              <p>PROJECT / REACT.JS / GO / GIN / DOCKER</p>
            </div>
            <div className="postcard-date">
              <p>2023/06/07</p>
            </div>
          </h2>
        </div>
        <div>
          <h2 className="postcard" onClick={handleClick}>
            <div>
              <img className="postcard-image" alt="my" src={img2} />
            </div>
            <div className="postcard-text">
              <p>깃과 깃허브가 대체 뭘까?</p>
            </div>
            
            <div className="postcard-tag">
              <p>STUDY</p>
            </div>
            <div className="postcard-date">
              <p>2023/06/07</p>
            </div>
          </h2>
        </div>
        <div>
          <h2 className="postcard" onClick={handleClick}>
            <div>
              <img className="postcard-image" alt="my" src={abc} />
            </div>
            <div className="postcard-text">
              <p>프로젝트 1-2 : 개발환경 구성하기</p>
            </div>

            
            <div className="postcard-tag">
              <p>PROJECT / GO / GIN</p>
            </div>
            <div className="postcard-date">
              <p>2023/06/04</p>
            </div>
          </h2>
        </div>
        <div>
          <h2 className="postcard" onClick={handleClick}>
            <div>
              <img className="postcard-image" alt="my" src={img3} />
            </div>
            <div className="postcard-text">
              <p>프로젝트 1-1 블로그를 개발해보자!</p>
            </div>
            
            <div className="postcard-tag">
              <p>PROJECT / GO / GIN</p>
            </div>
            <div className="postcard-date">
              <p>2023/06/07</p>
            </div>
          </h2>
        </div>
      </div>
      <Pagebutton />
      <Footer />
    </div>
  );
};

export default Homepage;
