import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../UI/Footer";
import "./Loginpage.css";
import { useCookies } from "react-cookie";
import axios from "axios";

const Loginpage = () => {
  axios.defaults.withCredentials = true;
  
  const [id, setID] = useState();
  const [pw, setPW] = useState();
  const [cookies, setCookie] = useCookies(["admin"]);

  const idHandler = (e) => {
    console.log(id);
    setID(e.target.value);
  };
  const pwHandler = (e) => {
    console.log(pw);
    setPW(e.target.value);
  };
  const loginHandler = () => {
    const logindata = { id: id, pw: pw };
    console.log(logindata);
    axios
      .post("http://localhost:8080/login/pw", logindata)
      .then((response) => {
        alert("로그인 성공!");
        console.log(response.data);
      })
      .catch((error) => {
        alert("ID 혹은 PASSWORD가 틀렸습니당~!");
      });
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
          <input
            type="button"
            className="admin-button"
            value="LOGIN"
            onClick={loginHandler}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Loginpage;
