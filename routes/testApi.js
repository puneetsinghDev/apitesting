const express=require('express')
const router=express.Router();
const {getApi, getApi2 }=require('../controller/apiController')
const {getproduct}=require('../controller/shopifyController')



router.post('/',getApi2);
router.get('/shopify',getproduct)
module.exports=router;