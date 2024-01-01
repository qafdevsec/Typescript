import * as express from 'express';

const app = express();

// Middleware to set X-Frame-Options header
app.use((req, res, next) => {
  res.header('X-Frame-Options', 'DENY');
  next();
});

// Your routes and application logic go here

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
