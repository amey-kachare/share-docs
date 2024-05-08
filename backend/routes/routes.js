import express from 'express';
import upload from '../utils/upload.js';
import { uploadImage, getImage,getDocs } from '../controller/image-controller.js';
import{ getChatsController } from '../controller/authController.js';
import { login, register } from "../controller/authController.js";
const router = express.Router();


router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', getImage);
router.get('/getDocs',getDocs)
router.post("/getChats",getChatsController)

router.post("/auth/register", register);
router.post("/auth/login", login);

export default router;