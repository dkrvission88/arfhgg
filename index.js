const { log } = require("console")
const express=require("express")
const app=express()


app.get("/",(req,res)=>{
    res.send("Welcome to my website")

})
app.get("/profile/:name/:dsg/:salary",(req,res)=>{
    // console.log(req.params);
    res.send(`
        <h1>Wel Come to my Profilw Pages</h1>
        <h1>Name : ${req.params.name}</h1>
        <h1>Name : ${req.params.dsg}</h1>
        <h1>Name : ${req.params.salary}</h1>`)

    // http://localhost:8000/profile/shyam Nayak/love setter/30000
    

})

app.get('/employee',(req,res)=>{
    res.send(`
        <h1>Name : ${req.query.name}</h1>
        <h1>Desingnation : ${req.query.dsg}</h1>
        <h1>Salary : ${req.query.salary}</h1>

        
        
        `)
        // http://localhost:8000/employee?name=dheerajkumar&dsg=softwareDeveloper&salary=600000
})




app.get("/contact",(req,res)=>{
    res.send(`
        <h1>wel Come to my Contact Page</h1>`)
})
app.get("/*",(req,res)=>{
    res.status(404).send("<h1>404 Page Not Found !!!</h1>")
})

app.listen(8000,()=>{console.log("Server is running on port 8000")
})



