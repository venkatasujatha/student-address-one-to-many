const EntitySchema=require('typeorm').EntitySchema;
const {tempaddress} = require('/home/tectoro/Desktop/student-address--cc/entity/temp-address.js');
const {permanentaddress} = require('/home/tectoro/Desktop/student-address--cc/entity/permant-address.js');
const student=new EntitySchema({
    name :"student",
    tableName :"student",
    columns :{
        id: {
            primary:true,
            type:'int',
            generated:true
        },
        firstname: {
            type:'varchar',
        },
        lastname: {
            type:'varchar',
        },
        email: {
            type:'varchar',
        }
    },
    relations:[
        {
            temp1:{
                target:"tempaddress",
                type:'one-to-many',
                joinColumn:true,
                joinTable:true,
                cascade:true,
                inverseSide:"tempaddress",
                eager:true,
                nullable:true,
                referenceColumn:true,
            }
        },{
            temp2:{
                target:"permaaddress",
                type:'one-to-many',
                joinColumn:true,
                joinTable:true,
                inverseSide:"permaaddress",
                cascade:true,
                eager:true,
                nullable:true,
                referenceColumn:true,
        }
    }
    ]
    

})
module.exports={student}
