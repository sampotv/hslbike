const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("testing")

});
app.listen(5000);
/*PORT=5000;
app.listen(process.env.PORT | PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});
*/