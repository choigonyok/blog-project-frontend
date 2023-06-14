import { useState } from "react";
import "./Pwbox.css";
import axios from "axios";

const Pwbox = (props) => {
        const [text, setText] = useState();

        const CommentDeletePWHandler = (e) => {
                setText(e.target.value);
        }

        const PWSubmitHandler = () => {
                if (text === "" ) {
                        alert("비밀번호를 입력해주세요.")
                } else {
                axios
                .delete("http://localhost:8080/post/delete" + props.comid, {
                        withCredentials: true, "writerpw" : text
                })
                .then((response) => {
                })
                .catch((error) => {
                        console.error(error);
                        alert("로그인이 안된 사용자는 게시글 삭제 권한이 없습니다!");
                });
                setText("");
                }
        }

        return <div className="comment-buttons">
                <input type="password" onChange={CommentDeletePWHandler} value={text}/>
                <input type="button" className="comment-button__submit" onClick={PWSubmitHandler} value="SUBMIT"/>
        </div>
}

export default Pwbox;