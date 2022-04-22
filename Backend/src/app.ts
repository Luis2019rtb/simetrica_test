import express from 'express';
import morgan from 'morgan';
import Router from './routes';
import cors from 'cors';
import database from './database';

export class App {

    private app: express.Application;

    constructor(private port?: string | number) {
        // Initiating express app
        this.app = express();
        // Initiating global settings
        this.initSettings();
        // Setting up middlewares
        this.middleWareSettings();
        // Setting up routes
        this.setRoutes();
    }

    private connectToDB(): void {
        const db: database = new database();
        db.connect() 
    }

    private initSettings(): void {
        this.app.set('port', Number(this.port) | 3000);
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(cors())
    }

    private middleWareSettings(): void {
        this.app.use(morgan('dev'));
    }

    private setRoutes(): void {
        this.app.use('/api', Router);
    }

    startListening():void {
        const port = this.app.get('port');
        this.connectToDB()
        this.app.listen(port,()=>{
            console.log(`Server Up on port ${this.app.get('port')}`);
        });
        
    }
}