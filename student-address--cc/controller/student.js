const {student} =require('/home/tectoro/Desktop/student-address--cc/entity/student.js');
const {dataSource} =require('/home/tectoro/Desktop/student-address--cc/database.js');
const studentRepo = dataSource.getRepository("student");
const appConst = require('/home/tectoro/Desktop/student-address--cc/routes/constants.js');

const add= async (req, res) =>{
    try{
       const resp =await studentRepo.createQueryBuilder().insert().into(student).values(req.body).execute();
       res.status(200).json({status:appConst.status.success,
       response:resp,
       message:null});
    }
    catch(err)
    {
        res.status(400).json({status:appConst.status.fail,
        response:null, message:err.message})
    }
}
module.exports ={add};