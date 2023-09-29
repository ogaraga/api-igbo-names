import express from 'express';
import cors from 'cors';
import { router } from './routes/nameRoutes.js';
const PORT = process.env.PORT || 4000;
const app = express();


//MIDDLEWARE
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);


app.listen(PORT, () => console.log(`Server running live on port ${PORT}`)); 