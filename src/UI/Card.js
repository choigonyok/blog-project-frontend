import "./Card.css";
import abc from "../Assets/74FAFC0D-E8A8-4E51-8000-AB7523F30200_1_105_c.jpeg";
import img2 from "../Assets/E71D4A5B-7078-430F-B2BE-65F7D728CAA4_1_105_c.jpeg";
import img3 from "../Assets/img3.jpeg";
import img4 from "../Assets/img4.jpeg";
import img5 from "../Assets/img5.jpeg";
import img6 from "../Assets/img6.jpeg";
import img7 from "../Assets/img7.jpeg";
import img8 from "../Assets/img8.jpeg";
import img9 from "../Assets/img9.jpeg";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();

  const handleClick = (pid) => {
    // 버튼 클릭 시 특정 URL로 이동
    navigate("/post");
  };
  return (
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
            <p className="postcard-date__box">2023/06/07</p>
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
            <p className="postcard-date__box">2023/06/07</p>
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
            <p className="postcard-date__box">2023/06/07</p>
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
            <p className="postcard-date__box">2023/06/07</p>
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
            <p className="postcard-date__box">2023/06/04</p>
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
            <p className="postcard-date__box">2023/06/07</p>
          </div>
        </h2>
      </div>
      <div>
        <h2 className="postcard" onClick={handleClick}>
          <div>
            <img className="postcard-image" alt="my" src={img7} />
          </div>
          <div className="postcard-text">
            <p>L2 스위치에도 IP를 할당할 수 있다 !!</p>
          </div>

          <div className="postcard-tag">
            <p>STUDY / NETWORK</p>
          </div>
          <div className="postcard-date">
            <p className="postcard-date__box">2023/06/07</p>
          </div>
        </h2>
      </div>
      <div>
        <h2 className="postcard" onClick={handleClick}>
          <div>
            <img className="postcard-image" alt="my" src={img8} />
          </div>
          <div className="postcard-text">
            <p>MULTICASTING이란 무엇인가</p>
          </div>

          <div className="postcard-tag">
            <p>STUDY / NETWORK</p>
          </div>
          <div className="postcard-date">
            <p className="postcard-date__box">2023/06/04</p>
          </div>
        </h2>
      </div>
      <div>
        <h2 className="postcard" onClick={handleClick}>
          <div>
            <img className="postcard-image" alt="my" src={img9} />
          </div>
          <div className="postcard-text">
            <p>블로그에 TODAY 방문자 수 집계기능을 구현해보자</p>
          </div>

          <div className="postcard-tag">
            <p>PROJECT / DEV-LOG VER.2</p>
          </div>
          <div className="postcard-date">
            <p className="postcard-date__box">2023/06/07</p>
          </div>
        </h2>
      </div>
    </div>
  );
};

export default Card;
