/**
 * 
 * model for Administrador
 */

const sql  =  require("./db");  //importaçãod a conexão


//criação do construtor

const Administrator =  function(administrator) {
    
    this.nome  = administrator.nome,
    this.email = administrator.email,
    this.login = administrator.login,
    this.data  = administrator.data,
    this.deletado = administrator.deletado 

}

//  CRUD  create
Administrator.create = (newAdmin, result) => {
    sql.query("INSERT INTO cip_administrador SET ?", newAdmin, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created admin: ", { id: res.insertId, ...newAdmin });
      result(null, { id: res.insertId, ...newAdmin });
    });
  };


  // CRUD pesquisa  por  ID
  Administrator.findById = (adminId, result) => {
    sql.query(`SELECT * FROM cip_administrador WHERE administrador_id = ${adminId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found admin: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // não existe admin com este id
      result({ kind: "not_found" }, null);
    });
  };


  // CRUD retorna  todos  os  dados
  Administrator.getAll = result => {
    sql.query("SELECT * FROM cip_administrador", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Admins: ", res);
      result(null, res);
    });
  };


  //CRUD update
  Administrator.updateById = (id, admin, result) => {
    sql.query(
      "UPDATE cip_administrador SET email = ?, name = ?, active = ? WHERE id = ?",
      [admin.email, admin.name, admin.login, admin.senha, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // não foi encontrado admin com  este id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated admin: ", { id: id, ...admin });
        result(null, { id: id, ...admin });
      }
    );
  };


  //CRUD Remove
  Administrator.remove = (id, result) => {
    sql.query("DELETE FROM cip_administrator WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // não há admin com este id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted admin with id: ", id);
      result(null, res);
    });
  };


  module.exports = Administrator;