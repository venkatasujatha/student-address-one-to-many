const EntitySchema = require('typeorm').EntitySchema;

const tempaddress = new EntitySchema({
    name:"tempaddress",
    tableName:"tempaddress",
    columns:{
        id:
        {
            primary:true,
            type:'int',
            generated:true,
        },
        address:
        {
            type:'varchar'
        }
    },
    
})
module.exports = {tempaddress}