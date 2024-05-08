import React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import { uploadFile } from "../../service/api";
import { useAuth } from "../context/AuthContext";

const ShareDoc = (props) => {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  const { auth } = useAuth();
  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        data.append("receivedBy", props.data.username);
        data.append("sentBy", auth.user.username);

        const response = await uploadFile(data);
        console.log(response);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="content-center">
      <div className="text-center">
        <button
          onClick={() => onUploadClick()}
          className="border-orange-700 bg-orange-400 mx-3 my-4 px-3 py-2 rounded-lg"
        >
          Send
        </button>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(e) => setFile(e.target.files[0])}
      />
      <div className="text-center">Sent to {auth.user.username}</div>
    </div>
  );
};

export default ShareDoc;
