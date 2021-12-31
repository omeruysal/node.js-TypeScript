import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

const connect = async () => {
  const dbUri = config.get<string>('dbUri');

  try {
    await mongoose.connect(dbUri);
    logger.info('Connected to Mongo');
  } catch (error) {
    logger.info(error);
    process.exit(1);
  }
};

export default connect;
