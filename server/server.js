require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');
const { setStorageMode } = require('./config/storage');

const PORT = process.env.PORT || 5000;
const FALLBACK_MODE = process.env.GOLAMART_STORAGE_MODE || 'file';

const startServer = async () => {
  try {
    let storageMode = FALLBACK_MODE;

    if (process.env.MONGO_URI) {
      try {
        await connectDB();
        storageMode = 'mongo';
      } catch (error) {
        if (FALLBACK_MODE !== 'file') {
          throw error;
        }

        console.warn('MongoDB unavailable, starting GolaMart with local file storage.');
      }
    } else {
      console.warn('MONGO_URI not set, starting GolaMart with local file storage.');
    }

    setStorageMode(storageMode);
    app.locals.storageMode = storageMode;

    app.listen(PORT, () => {
      console.log(`GolaMart server listening on port ${PORT} using ${storageMode} storage`);
    });
  } catch (error) {
    console.error('Failed to start server', error);
    process.exit(1);
  }
};

startServer();
