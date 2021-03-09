'use strict';

const express = require('express');
const {upload} = require('../../helpers/filehelper');
const {singleFileUpload, multipleFileUpload,getallSingleFiles, getallMultipleFiles} = require('../controllers/fileuploaderController');
const router = express.Router();
const cors = require("cors");

router.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers","*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD"); 
 

router.post('/singleFile', upload.single('file'), singleFileUpload);
router.post('/multipleFiles', upload.array('files'), multipleFileUpload);
router.get('/getSingleFiles', getallSingleFiles);
router.get('/getMultipleFiles', getallMultipleFiles);
router.use(cors());

next();
}); 

module.exports = {
    routes: router
}