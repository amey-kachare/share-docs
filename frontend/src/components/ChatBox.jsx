import React, { useEffect } from "react";
import ShareDoc from "./Pages/ShareDoc";
import { useAuth } from "./context/AuthContext";
import { getDocs } from "../service/api";
import { useState } from "react";

const ChatBox = ({ data }) => {
  const [docs, setDocs] = useState([]);
  const { auth } = useAuth();
  useEffect(() => {
    const fetchData = async () => {
      if (data && auth != null) {
        const datas = await getDocs(auth?.user?._id, data?._id);
        setDocs(datas);
      }
    };
    fetchData();
  }, [auth, docs]);

  console.log(docs);
  return (
    <div className="flex flex-col h-screen mt-">
      <div className="text-center text-amber-700 font-bold p-5 border ring-2 ring-amber-700 rounded-lg">
        {data?.username}
      </div>
      <div className="h-auto">
        {docs.files?.length > 0 && (
          <ul className="divide-y">
            {docs.files.map((item) => (
              <li key={item._id} className="py-4">
                <p className="font-semibold">
                  File:
                  <a
                    href={`${item.path}`}
                    className="block text-green-500 hover:text-green-700"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.name}
                  </a>
                </p>
                <div>From: {item.sentBy}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className=" p-3 flex justify-center border ring-2 ring-amber-700 rounded-lg">
        <ShareDoc data={data} />
      </div>
    </div>
  );
};

export default ChatBox;
