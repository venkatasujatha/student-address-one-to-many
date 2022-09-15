const student =require('/home/tectoro/Desktop/student-address--cc/controller/student.js');
const tempaddress = require('/home/tectoro/Desktop/student-address--cc/controller/tempaddress.js');
const permaaddress = require('/home/tectoro/Desktop/student-address--cc/controller/permaaddress.js');
const router = require('express').Router();

router.post("/addstudent",student.add);
router.post("/addtempaddress",tempaddress.add);
router.post("/addpermaaddress",permaaddress.add);

module.exports = router;
