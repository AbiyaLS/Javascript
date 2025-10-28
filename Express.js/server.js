const express = require('express')

const app =express()
const PORT = 4000

app.use(express.json())

let users=[
    {id: 1, name: "Alice"},
    {id: 2, name: "John"}
]

// get all the users
app.get("/users",(req, res)=>{
    res.json(users)
})

// get a single user
app.get("/users/:id",(req,res)=>{
    const userId =parseInt(req.params.id)
    const user=users.find(u => u.id === userId)
    if(!userId) 
        return res.status(404).json({message: "User not found"})
    res.json(user)
})

// post a user
app.post("/users",(req,res)=>{
    const {name}=req.body
    if(!name)  return res.status(404).json({message: "User not found"})

const newUser={id: users.length + 1, name}
users.push(newUser)
res.status(200).json(newUser) 
})

// update user
app.put("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id)
    const user = users.find(u => u.id === userId)
    if (!user) return res.status(404).json({ message: "User not found" })

    const { name } = req.body
    if (name) user.name = name

    res.json(user)
})

app.delete("/users/:id", (req,res)=>{
     const index= users.findIndex(u => u.id === parseInt(req.params.id))
    if(index===-1) return res.status(404).json({ message: "user not found" })

    const dltUser=users.splice(index,1)
    res.json(dltUser[0])
})



app.listen(PORT,()=>{console.log("Server run at port 4000")})
