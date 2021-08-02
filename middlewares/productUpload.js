const multer = require("multer");
const fileSize = 1
const {UPLOAD_DIR} = require('../config');
const fileTypes = ['jpeg', 'jpg', 'png']
re = /(?:\.([^.]+))?$/;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOAD_DIR);
    },
    filename: (req, file, cb) => {
        const {title} = req.body
        const extension = file.originalname.split('.')[file.originalname.split('.').length -1]
        const fileName = `${title}-${Date.now()}.${extension}`.toLowerCase().split(' ').join('-');
        req.body.imgUrl = `/static/productListing/${fileName}`
        cb(null, fileName)
    },
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * fileSize
    },
    fileFilter: (req, file, cb) => {
        if (fileTypes.includes(re.exec(file.originalname)[1])) {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('File type not allowed'));
        }
    }
})


module.exports = upload;