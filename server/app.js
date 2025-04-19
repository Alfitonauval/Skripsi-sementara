import dotenv from "dotenv";
dotenv.config();
import express from "express";
import RegisterAdminRoutes from "./src/routes/admin/RegisterAdminRoutes.js"
import LoginAdminRoutes from "./src/routes/admin/LoginAdminRoutes.js"
const app = express();
const port = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
  res.send("working");
});

app.post("/api/v2/admin/register",RegisterAdminRoutes)
app.post("/api/v2/admin/login",LoginAdminRoutes)


app.listen(port, () => {
  console.log(`http://localhost:5000`);
});

