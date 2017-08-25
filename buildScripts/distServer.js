import express from 'express'; // ES6 variable Syntax
import path from 'path';
import open from 'open';
import compression from 'compression';

/*eslint-disable no-console*/
const port = 3000; // const fixed your variable value can't change
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(reg, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(reg, res) {
    // dard coding for simplicity, Pretend this hits a real database
    res.json([
      {"id": 1,"firstName": "Bob", "lastName":"Smith", "email": "bob@gmail.com" },
      {"id": 2,"firstName": "Tammy", "lastName":"Norton", "email": "norton@gmail.com" },
      {"id": 3,"firstName": "Tina", "lastName":"Lee", "email": "lee.tina@yahoo.com" }
    ]);
  });


app.listen(port, function(err){
  if(err){
    console.log(err);
  }else{
    open('http://localhost:' + port);
  }
});
