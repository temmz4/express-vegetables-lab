const express = require("express")
const app = express()
const PORT = 3000
const fruits = require("./models/fruits")
const vegetables = require("./models2/vegetables")
const reactViews = require('express-react-views')

// app.use(express.static("public "))
app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())


app.get("/fruits", (req, res) => {
  res.render('fruits/Index', {fruits})
})


app.get("/fruits/:indexOfFruit", (req, res) => {
  // res.send(fruits[req.params.indexOfFruit])
  res.render("fruits/Show", fruits[req.params.indexOfFruit])
  
})

app.get('/vegetables', (req, res) => {
  res.render('vegetables/Index', {vegetables})
})

app.get('/vegetables/:indexOfVegetables', (req, res) => {
  res.render('vegetables/Show', vegetables[req.params.indexOfVegetables])
})

app.listen(PORT, () => { 
  console.log(`Listening on port: ${PORT}`)
});