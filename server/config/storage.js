let storageMode = process.env.GOLAMART_STORAGE_MODE === 'mongo' ? 'mongo' : 'file';

const setStorageMode = (mode) => {
  storageMode = mode;
};

const getStorageMode = () => storageMode;

module.exports = {
  setStorageMode,
  getStorageMode,
};
