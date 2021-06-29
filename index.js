const express = require('express')
const path = require("path")

const app = express()


require("./db/conn")

const Register = require("./models/registers")

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine", "hbs")



app.get('/', (req, res) => {
    res.render("index")
})

app.post("/", async(req,res) =>{
    
        const registerEmployee = new Register ({
                name: req.body.name,
                email:req.body.email,
                phone:req.body.phone
        })       
        console.log(registerEmployee)
        res.send(registerEmployee)
        const registered = await registerEmployee.save()
})

app.listen(3000, () => {
    console.log(' servier working')
})
