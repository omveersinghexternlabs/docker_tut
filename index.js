// const express = require('express');
// const app = express();
// const port = 3000;
// const bodyParser = require('body-parser');


// app.use(bodyParser.urlencoded({ extended: false }));
// app.get('/docker', (req, res) => {
//   res.send('Hello Arvind now you are using docker!');
// });
// app.get('/',(req,res)=>{
//     res.send('docker')
// })

// app.post('/data',(req,res)=>{
//   const body=req.body.email
//   console.log("+++++++",body)
//   // res.send('docker',body)
// })

// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });



const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Use the bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// POST route handler
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // do something with the data...
  console.log(name)
  res.send('Data received!');
});

app.get('/test',(req,res)=>{
  console.log("HI")
  res.send('Hi now your using Docker');
})
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
