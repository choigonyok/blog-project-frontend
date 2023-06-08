import Header from "../Header/Header";
import "./Deletepage.css";
import Footer from "../UI/Footer";

const Deletepage = () => {
  return (
    <div>
      <Header />
      <div className="delete-container">
        <div className="delete-main">DELETE/MODIFY PAGE</div>
        <div className="delete-list">
          <div className="delete-inlist">
            <div className="delete-post">
              <h2 className="delete-date">2023/04/20</h2>
              <h2 className="delete-title">[BLOG #4] 리액트에서 이미지를 동적으로 렌더링하고 할당하는 법</h2>
              <h2 className="delete-tag">PROJECT / DOCKER / CLOUD-CHAT-SERVICE</h2>
            </div>
            <div className="delete-button__container">
              <input className="delete-button" type="button" value="삭제" />
              <input className="delete-button" type="button" value="수정" />
            </div>
          </div>
          <div className="delete-inlist">
            <div className="delete-post">
              <h2 className="delete-date">2023/04/20</h2>
              <h2 className="delete-title">[BLOG #4] 리액트에서 이미지를 동적으로 렌더링하고 할당하는 법</h2>
              <h2 className="delete-tag">PROJECT / DOCKER / CLOUD-CHAT-SERVICE</h2>
            </div>
            <div className="delete-button__container">
              <input className="delete-button" type="button" value="삭제" />
              <input className="delete-button" type="button" value="수정" />
            </div>
          </div>
          <div className="delete-inlist">
            <div className="delete-post">
              <h2 className="delete-date">2023/04/20</h2>
              <h2 className="delete-title">[BLOG #4] 리액트에서 이미지를 동적으로 렌더링하고 할당하는 법</h2>
              <h2 className="delete-tag">PROJECT / DOCKER / CLOUD-CHAT-SERVICE</h2>
            </div>
            <div className="delete-button__container">
              <input className="delete-button" type="button" value="삭제" />
              <input className="delete-button" type="button" value="수정" />
            </div>
          </div>
          
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Deletepage;
