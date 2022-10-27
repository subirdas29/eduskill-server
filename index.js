const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');

app.get('/courses',(req,res)=>
{
  res.send(courses);
})

app.get('/course/:id',(req,res)=>
{
  const id = req.params.id;
  const select_course = courses.find(course => course.id===id)
  res.send(select_course)
console.log(req.params)
})

app.get('/', (req, res) => {
    res.send('eduskill courses')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })