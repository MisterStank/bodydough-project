import { ConnectOptions, connect } from 'mongoose';
import { configs } from './config';
export const dbConnection = async () => {
    const dbConfig = {
      url: configs.dbUrl || '',
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    };
  
    await connect(dbConfig.url, dbConfig.options as ConnectOptions)
    .then(() =>{
        console.log('Database connection successfully');
    })
    .catch((err) =>{
        console.log('Database connection error');
        console.log(err);
        process.exit(1);
    });
};
