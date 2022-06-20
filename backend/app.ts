import express, { Request, Response, NextFunction } from 'express';

const app = express();
//const dev=process.env.NODE_ENV==='development';
const port=8080

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('mainPage!');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})