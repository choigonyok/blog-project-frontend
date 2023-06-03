import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useRef } from "react";

function EditorBox() {
  const editorRef = useRef();

  const onChangeHandler = () => {
    const data = editorRef.current.getInstance().getHTML();
    console.log(data);
  };

  return (
    <Editor
      initialValue="hello react editor world!"
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={false}
      language="ko-KR"
      ref={editorRef}
      onChange={onChangeHandler}
    />
  );
}

export default EditorBox;
