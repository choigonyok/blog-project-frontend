import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../UI/Footer";
import "./Loginpage.css";
import { useCookies } from "react-cookie";

const Loginpage = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [id, setID] = useState();
  const [pw, setPW] = useState();

  const idHandler = (e) => {
    console.log(id);
    setID(e.target.value);
  };
  const pwHandler = (e) => {
    console.log(pw);
    setPW(e.target.value);
  };


  return (
    <div>
      <Header />
      <div className="admin-container">
        <div className="admin-main">ADMIN PAGE</div>
        <div className="login-idpw">
          <input type="text" placeholder="ID" value={id} onChange={idHandler} />
          <input
            type="password"
            placeholder="PASSWORD"
            value={pw}
            onChange={pwHandler}
          />
        </div>
        <div className="login-button">
          <input type="button" className="admin-button" value="LOGIN" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Loginpage;
