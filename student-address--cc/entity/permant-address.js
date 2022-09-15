const EntitySchema=require('typeorm').EntitySchema;

const permanentaddress=new EntitySchema({
    name :"permantaddress",
    tablename :"permantaddress",
    columns :{
        id:
        {
            primary:true,
            type:'int',
            generated:true,
        },
        address:
        {
            type:'int',
        }
    },
    
})
module.exports = {permanentaddress}