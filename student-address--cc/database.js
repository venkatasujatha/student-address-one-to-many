const {DataSource} = require('typeorm');
const dataSource =new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'studentdb',
    username: 'postgres',
    password: 'postgres',
    entities: ['/home/tectoro/Desktop/student-address--cc/entity/*.js'],
    migrations:['migrations/*.js'],
    migrationsTableName:'studentdb-migrations',
    cli: 
    {
        entitiesDir:['/home/tectoro/Desktop/student-address--cc/entity/*.js'],
    },
    synchronize:true

});

//export
module.exports ={dataSource};


