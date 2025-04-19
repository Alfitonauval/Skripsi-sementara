import dotenv from "dotenv";
dotenv.config();
import express from "express";
import multer from "multer";
import upload from "./src/middleware/Storage.js";

import RegisterAdminRoutes from "./src/routes/admin/RegisterAdminRoutes.js";
import LoginAdminRoutes from "./src/routes/admin/LoginAdminRoutes.js";
import PostTips from "./src/controllers/Tips/PostTips.js"
const app = express();
const port = process.env.PORT;

const tipsUpload = upload.fields([
    { name: "Thumbnail", maxCount: 1 },
    { name: "Image", maxCount: 1 },
  ]);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("working");
});

// Admin
app.post("/api/v2/admin/register", RegisterAdminRoutes);
app.post("/api/v2/admin/login", LoginAdminRoutes);
app.post("/api/v2/post/tips",tipsUpload,PostTips)

app.listen(port, () => {
  console.log(`http://localhost:5000`);
});
