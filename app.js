const express = require("express")

const path= require('path')
const staticp=path.join(__dirname,"pubic")


const app = express()

var items = ['Buy food','Cook food','Eat food']

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
  
app.use(express.static(__dirname+"/pubic"))

app.get("/", (req, res) => {
    // res.send("Hello")
    var today = new Date();
    var currentDay = today.getDay() 

    const option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", option)


    res.render("list", { listTitle: day, newListItems: items })
    
    // if (currentDay === 6 || currentDay === 0) {
    //     res.send("<h1>Yay its the weekend</h1>")
    // }
    // else {
    //     res.send("<h1>Boo! its a weekday</h1>")
    // }
})

app.post('/', (req, res) => {
    var item = req.body.newItem
    items.push(item)
    res.redirect('/')



})

app.listen(3000, () => {
    console.log("Server is started on port 3000")
})