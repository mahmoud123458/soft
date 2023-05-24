const express =require("express");
const app=express();

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",(req,res) => {
    res.render("index");
});

app.get("/download-file",(req,res) => {
    res.download("./public/docs/")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log('server started on PORT '+ PORT)
});