import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const homePageHandler = () => {
    // 버튼 클릭 시 특정 URL로 이동
    navigate("/");
  };

  const githubPageHandler = () => {
    // 버튼 클릭 시 특정 URL로 이동
    navigate("https://github.com/choigonyok");
  };

  return (
    <div className="header">
      <button className="header-title" onClick={homePageHandler}>_techlog</button>
      <div className="header-empty" />
      <a href="https://github.com/choigonyok" className="header-category">about</a>
    </div>
  );
};
export default Header;
