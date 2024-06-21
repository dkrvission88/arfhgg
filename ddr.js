const express=require("express")

const app=express()

app.get("/data",(req,res)=>{
   
    // res.send("<h1>This is Home Page</h1>")
    res.send(data)

})

app.get("/about",(req,res)=>{


    res.send("<h1>This is About Page</h1>")
})
app.get("/Profile/:name/:dsg/:salary",(req,res)=>{
    console.log(req.params);
    res.send(`<h1>This is ProfilePage</h1>
        <h1>Name : ${req.params.name}</h1>   
         <h1>dsg : ${req.params.dsg}</h1>
          <h1>salary : ${req.params.salary}</h1> 
        
        
        `)
})

app.get("/Employee",(req,res)=>{
    res.send(`<h1> This is a Employee Query
        <h1>Name : ${req.query.name}</h1>
         <h1>Designation : ${req.query.dsg}</h1>
          <h1>salary : ${req.query.salary}</h1>
        
        
        `)
})

app.get("*",(req,res)=>{
    res.status(404).send("<h1> 404 Page Not Foud !!!!")
})




app.listen(8000,()=>{
    console.log("Server is running on port 8000")
})




var data=[{id:1001,name:"Dheeraj Kumar",dsg:"softWare Developer",salary:45000,email:"dkrvission442@gmail.com",City:"Noida",state:"UP"},
    {id:1001,name:"Dheeraj Kumar",dsg:"softWare Developer",salary:45000,email:"dkrvission442@gmail.com",City:"Noida",state:"UP"},
    {id:1002,name:"Shyam Nayak",dsg:"softWare Developer",salary:45000,email:"dkrvission442@gmail.com",City:"Noida",state:"UP"},
    {id:1003,name:"Vishal Kumar",dsg:"softWare Developer",salary:45000,email:"dkrvission442@gmail.com",City:"Noida",state:"UP"},
    {id:1004,name:"Shakti Singh",dsg:"softWare Developer",salary:45000,email:"dkrvission442@gmail.com",City:"Noida",state:"UP"},
    {id:1005,name:"Divya Ahuja",dsg:"softWare Developer",salary:45000,email:"dkrvission442@gmail.com",City:"Noida",state:"UP"},
    {id:1006,name:"akanksha Agnihotri",dsg:"softWare Developer",salary:45000,email:"dkrvission442@gmail.com",City:"Noida",state:"UP"},
    {id:1007,name:"Kajal Sakshaina",dsg:"softWare Developer",salary:45000,email:"dkrvission442@gmail.com",City:"Noida",state:"UP"}
]

