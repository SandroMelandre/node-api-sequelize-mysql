/**
 *  controller Adminsitrador
 */


const Administrator = require("../app/models/admin.module");


//Criando e salvando um novo admin
exports.create = (req, res) => {
    //validações aqui
    if (!req.body) {
        res.status(400).send({
            message: "Não pode ser vazio ..."
        })
    }

    //Criando Admin
    const Admin  =  new Administrator({
        nome:   req.body.nome,
        email:  req.body.email,
        login:  req.body.login,
        senha:  req.body.senha,
    });

    //salvando Admin
    Administrator.create(admin,(err, data) =>{
        if (err)
        res.status(500).send({
            message:
                err.message ||  "ocorreu um erro ao tentar  salvar  o Admin"
        });
        else res.send(data);
    })
};

//recuperando o  admin
exports.findOne = (req, res) => {
    Administrator.findById(req.params.adminId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found admin with id ${req.params.adminId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Administrador with id " + req.params.adminId
            });
          }
        } else res.send(data);
      });
  };

//Retornando todos
exports.findAll = (req, res) => {
    Administrator.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };


//atualizando um admin
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Administrator.updateById(
      req.params.adminId,
      new Customer(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Customer with id ${req.params.adminId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Customer with id " + req.params.adminId
            });
          }
        } else res.send(data);
      }
    );
  };

//delete um admin
exports.delete = (req, res) => {
    Administrator.remove(req.params.adminId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.adminId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Customer with id " + req.params.adminId
          });
        }
      } else res.send({ message: `Customer was deleted successfully!` });
    });
  };