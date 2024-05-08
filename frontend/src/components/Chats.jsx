import React, { useEffect } from "react";
import { getChats } from "../service/api";
import { useState } from "react";
import ChatBox from "./ChatBox";
import { FaUserAlt } from "react-icons/fa";
import { List } from "antd";

const Chats = () => {
  const [chatData, setChatData] = useState();
  const [comData, setComData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const fetchData = async () => {
    const data = await getChats();
    if (data) setChatData(data);
  };
  useEffect(() => {
    setIsLoggedIn(JSON.parse(localStorage.getItem("auth")));
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-2">
      <div className="p-10">
        {isLoggedIn ? (
          <div className="border p-4 rounded-lg">
            <h1 className=" text-center bold text-xl text-amber-700">CHATS</h1>
            <List
              itemLayout="horizontal"
              dataSource={chatData}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<FaUserAlt color="brown" size={20} />}
                    title={
                      <span onClick={() => setComData(item)}>
                        {item.username}
                      </span>
                    }
                  />
                </List.Item>
              )}
            />
          </div>
        ) : (
          <h1 className=" text-3xl items-center">
            Please logIn to see Chats...
          </h1>
        )}
      </div>
      <div className="p-10">{comData && <ChatBox data={comData} />}</div>
    </div>
  );
};

export default Chats;
