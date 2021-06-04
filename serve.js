/**
 * 
 * Criação do server express
 */

const express    =  require('express') // import  express
const bodyParser =  require('body-parser') // import  body-parser
const adminRotes =  require('./routes/administrator.routes');

// init app

const app  = express();

//parse os requests   para  content-type  aplicattion/json
app.use(bodyParser.urlencoded({extended: true}));


//Rotes
app.get("/", (req,res) => {
    res.json({ message: "Bem vindo API restfull"});
})

adminRotes(app);

//setando portas para  servidor 3000
app.listen(3000, ()=> {
    console.log("SERVER running  on port  3000 ....");
});
