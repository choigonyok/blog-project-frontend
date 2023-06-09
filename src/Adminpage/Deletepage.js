import Header from "../Header/Header";
import "./Deletepage.css";
import Footer from "../UI/Footer";
import axios, { all } from "axios";
import { useEffect, useState } from "react";

const Deletepage = () => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [allPost, setAllPost] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8080/post/all")
      .then((response) => {
        console.log(response.data);
        setAllPost(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [isDeleted]);

  const deleteHandler = (value) => {
    console.log(value);
    axios
      .delete("http://localhost:8080/post/delete" + value)
      .then((response) => {
        console.log(response.data);
        setIsDeleted(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  

  return (
    <div>
      <Header />
      <div className="delete-container">
        <div className="delete-main">DELETE/MODIFY PAGE</div>
        <div className="delete-list">
          {allPost && (
            <div>
              {allPost.map((item, index) => (
                <div className="delete-inlist">
                  <div className="delete-post">
                    <h2 className="delete-date">{item.Datetime}</h2>
                    <h2 className="delete-title">{item.Title}</h2>
                    <h2 className="delete-tag">{item.Tag}</h2>
                  </div>
                  <div className="delete-button__container">
                    <input
                      className="delete-button"
                      type="button"
                      value="삭제"
                      onClick={() => {
                        deleteHandler(item.Id);
                      }}
                    />
                    <input
                      className="delete-button"
                      type="button"
                      value="수정"
                      
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Deletepage;
