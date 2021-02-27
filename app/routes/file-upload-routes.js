'use strict';

const express = require('express');
const {upload} = require('../../helpers/filehelper');
const {singleFileUpload, multipleFileUpload,
     getallSingleFiles, getallMultipleFiles} = require('../controllers/fileuploaderController');
const router = express.Router();


router.post('/admin/singleFile', upload.single('file'), singleFileUpload);
router.post('/admin/multipleFiles', upload.array('files'), multipleFileUpload);
router.get('/admin/getSingleFiles', getallSingleFiles);
router.get('/admin/getMultipleFiles', getallMultipleFiles);


module.exports = {
    routes: router
}