const {tempaddress} =require('/home/tectoro/Desktop/student-address--cc/entity/temp-address.js');
const {dataSource} =require('/home/tectoro/Desktop/student-address--cc/database.js');
const tempRepo = dataSource.getRepository("tempaddress");
const appConst = require('/home/tectoro/Desktop/student-address--cc/routes/constants.js');

const add= async (req, res) =>{
    try{
       const resp =await tempRepo.createQueryBuilder().insert().into(tempaddress).values(req.body).execute();
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