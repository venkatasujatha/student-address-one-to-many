const {dataSource} = require('/home/tectoro/Desktop/student-address--cc/database.js');
const express = require('express');
const app=express();
require('dotenv').config();
const cors = require('cors');
const bodyparser = require('body-parser');
const router = require('/home/tectoro/Desktop/student-address--cc/routes/routes.js');

app.use(bodyparser.urlencoded({ extended:true }));
app.use(bodyparser.json());
app.use(cors());

async function run(){
    try {
        await dataSource.initialize();
        console.log('datasource initialized');
        app.use("/",router);
        app.listen(process.env.port, ()=>{
            console.log(`localhost is running on port ${process.env.port}`);
        });
    }
    catch (err) {
        console.log(err.message);
    }

}
run();
