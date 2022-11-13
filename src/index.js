import path from 'node:path';
import 'dirnamejz';
import express from 'express';

const app = express();
const staticFilesPath = path.join(__dirnamejz, '..', 'public');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(staticFilesPath));

app.post('/data', (req, res) => {
  console.log(req.body); 
});

app.listen(3000, () => {
  console.log('Server running: http://localhost:3000');
});
