import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { createNewUser, signin } from "./handlers/user";
import router from './router';
import { protect } from './middlewares/auth';

// initializations
const app = express();

// middlewares
app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// routes
app.use('/api/v1', protect,router);

app.post("/userup", createNewUser);
app.post("/signin", signin);

export default app
