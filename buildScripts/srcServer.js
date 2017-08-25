import express from 'express'; // ES6 variable Syntax
import path from 'path';
import open from 'open';
import webpack from 'webpack'; // webpack import
import config from '../webpack.config.dev'; // webpack config import

/*eslint-disable no-console*/
const port = 3000; // const fixed your variable value can't change
const app = express();
const compiler = webpack(config); // webpack compiler

// express do webpack-dev-middleware
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(reg, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
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