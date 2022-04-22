import mongoose from 'mongoose';
import { config } from 'dotenv';

class mongodbConnection {
    private stringConnection: string;

    constructor() {
        // DotEnv configuration
        config();
        //Mongo data class attributes
        this.stringConnection = `mongodb+srv://${process.env.DOTENV_DB_USER}:${process.env.DOTENV_DB_PASSWORD}@cluster0.gaixq.mongodb.net/${process.env.DOTENV_DB_NAME}?retryWrites=true&w=majority`;
    }
    // Initiating Mongo service
    connect = async (): Promise<void> => {
        try {
            mongoose.connect(this.stringConnection);
            this.connectionError();
            this.connectionSuccess();
        } catch (error) {
            
            const message: string = (error as Error).message;

            throw new Error(message);
        }
    }
    // Handling errors and success after connection
    connectionError = () => {
        mongoose.connection.on('error', (err) => {
            console.error(err);
            throw new Error(`unable to connect to database: `);
        })
    }
    connectionSuccess = () => {
        mongoose.connection.on('connected', () => {
            console.log(`Database successfully connected`)
        })
    }

}


export default mongodbConnection;