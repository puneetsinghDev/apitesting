const bodyparser=require('body-parser')
// const app=express();
// app.use(bodyparser.json);
getPost = (req, res) => {
    // res.send("hello from server");
    console.log("heloo ")
    res.json({
            posts: [{ title: "first" }, { title: "second" }

            ]

        }
    );
};
getPostByid = (req, res) => {
    res.send("hello from server");
    console.log("heloo "+req.params.id);

};
 takeargs = (req, res) => {
 const data={
    name:req.body.name,
    email: req.body.email
 }
 res.status(200).json("data");




//  //console.log(req.body)
//  const data=req.body;
//  console.log(data)
//     res.status(200).json({"data":"puneet"});
   

};
 module.exports={
getPost,
getPostByid,
takeargs
 }