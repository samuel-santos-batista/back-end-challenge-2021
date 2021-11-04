import mongoose, { Mongoose } from 'mongoose';

export const createConnection = async (): Promise<Mongoose> =>
  mongoose.connect(process.env.MONGODB_URI as string, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

export const closeConnection = (): Promise<void> => mongoose.connection.close();
