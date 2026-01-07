import dotenv from "dotenv";
import connectDB from "./config/db.js";


dotenv.config();

import app from "./app.js";
connectDB();
const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("hii");
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
