const getApi=(req ,res)=>{
    //req.send("[ok");
    console.log("getApi");
    // res.status(200).json("data");


}
const getApi2=(req ,res)=>{
    console.log(req.body);
    console.log(req.body);
    res.status(200).json(req.data);


}//dd
module.exports={  
    getApi,getApi2
};
//aknakjnafnn