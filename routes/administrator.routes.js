/*
*  rotas  do administrador
*/


module.exports = app => {
    const admin  = require("../controllers/administrador.controller.js");

    // create new Admin
    app.post("/admin", admin.create);

    // all admins
    app.get("/admin", admin.findAll);

    //find by id 
    app.get("/admin/:adminId", admin.findOne);

    //update administrator
    app.put("/admin/:adminId", admin.update);
    
    // Delete a Admin with Id
    app.delete("/admin/:adminId", admin.delete);

}