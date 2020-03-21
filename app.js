const express = require('express');
const data = require('./data.json');
const app = express();

//sets the view engine as pug for render requests
//looks for pug templates in default views file
app.set('view engine', 'pug');

//serve static files
app.use('/static', express.static('public'));

//serves routes  -----  -- - mus create /routes - - - - - - - -
const routes = require('./routes');
//uses the routes imported from the routes file & index.js contained within
app.use(routes);

//404 and other error handler 
//creates error
app.use((req, res, next)=>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})
//error handler

  app.use(( err, req, res, next ) => {
    res.locals.error = err;
    if (err.status >= 100 && err.status < 600)
      res.status(err.status);
    else
      res.status(500);
//needs error page created - -  - - - - --  -- - - - - - -- - -
    res.render('error', {err});
  });

  //starts listening on specfied port(localhost:3000). Server must be started with node app.js in terminal
app.listen(3000, () =>{
    console.log('The server is up and running')
}); 