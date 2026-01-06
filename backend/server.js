import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("hii");
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
