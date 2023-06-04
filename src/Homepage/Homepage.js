import "./Homepage.css";
import Header from "../Header/Header";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

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
        <h2>choi yunsuk</h2>
        <h3>꾸준함이란 도구로 성장하기를 즐기는 웹 개발자 최윤석입니다</h3>
        <h4>2017.03~ &nbsp;&nbsp;&nbsp; KYUNGHEE UNIV. COMPUTER ENGINEERING</h4>
      </div>
      <Button />
      {/* <p>Today : 1 &nbsp; / &nbsp; Total : 10</p> */}
      <div className="cardcontainer">
        <h3 className="postcard">
          PROJECT #1-3
          <br />: HTML RENDERING
        </h3>
        <h2 className="postcard" onClick={handleClick}>
          PROJECT #1-2
          <br />: ENVIRONMENT CONFIG
        </h2>
        <h2 className="postcard">
          WHAT IS
          <br />
          GIT / GITHUB ?
        </h2>
        <h2 className="postcard">
          PROJECT #1-1
          <br />: DEV MY OWN BLOG
        </h2>
        <h1 className="postcard">aaa</h1>
        <h1 className="postcard">aaa</h1>
        <h1 className="postcard">aaa</h1>
        <h1 className="postcard">aaa</h1>
        <h1 className="postcard">aaa</h1>
      </div>
      Choigonyok
    </div>
  );
};

export default Homepage;
