const express = require('express');

const app = express();

app.get('/api/fib', (req, res) => {
  const target = 42;

  function fib(num) {
    if (num < 2) {
      return 1;
    } else {
      return fib(num-1) + fib(num-2);
    }
  }

  res.status(200).send({ans: fib(target)});
  console.log('sent fib')
});

app.get('/api/hello', (req, res) => {

  res.status(200).send({msg: "Hello!"});
  console.log('Sent hello')
})

app.listen(3000, function() {
  console.log('READY TO COMPUTE...');
})