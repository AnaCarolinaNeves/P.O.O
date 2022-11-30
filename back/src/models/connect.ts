import {Sequelize} from "sequelize";
const connection = new Sequelize("WorldBeauty", "root", "Ana05", {
    host: "localhost", 
    dialect: "mysql"
})
connection.authenticate().then(()=> console.log("Conexão realizada com sucesso!")).catch(()=> console.log("Conexão não estabelecida!"))

module.exports = connection