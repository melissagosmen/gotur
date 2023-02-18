import express from 'express';
import {config} from './config/config';
import Logger from "./utils/Logger";
import * as http from "http";
import itemRoutes from './routes/Item';
import DatabaseConnection from "./database/Connection";

const router = express();
new DatabaseConnection();

const StartServer = () => {
    router.use((req, res, next) => {
        /** Log the Request */
        Logger.info(`Incoming -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            Logger.info(`Incoming -> Method: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`);
        })

        next();
    });

    router.use(express.urlencoded({extended: true}))
    router.use(express.json());

    /** Rules of API */
    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json();
        }

        next();
    });

    /** Health Check */
    router.get('/ping', (req, res, next) => {
        res.status(200).json({message: 'pong'})
    });

    /** Routes */
    router.use('/item', itemRoutes);

    /** Error handling */
    router.use((req, res, next) => {
        const error = new Error('not found');
        Logger.error(error);

        return res.status(404).json({message: error.message})
    });

    http.createServer(router).listen(config.server.port, () => Logger.info(`Server is running on port: ${config.server.port}`));
};

StartServer();
