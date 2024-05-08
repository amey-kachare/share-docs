import axios from "axios";

const API_URI = "http://localhost:5000";

export const uploadFile = async (data) => {
  try {
    const response = await axios.post(`${API_URI}/upload`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling the API ", error.message);
  }
};

export const getChats = async () => {
  try {
    const res = await axios.post(`${API_URI}/getChats`);
    return res.data;
  } catch (error) {
    console.log("Error while calling the chats API ", error.message);
  }
};

export const getDocs = async (senderId, recieverId) => {
  try {
    const res = await axios.get(`${API_URI}/getDocs`, {
      params: { recieverId, senderId },
    });
    return res.data;
  } catch (error) {
    console.log("Error while calling the docs API ", error.message);
  }
};

export const deleteFile = async (fileId) => {
  try {
    const res = await axios.get(`${API_URI}/delete`, {
      params: { fileId },
    });
    return res.data;
  } catch (error) {
    console.log("Error while calling the delete API ", error.message);
  }
};
