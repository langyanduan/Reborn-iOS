import Storage from "react-native-storage";
import { AsyncStorage } from "react-native";

import { setCurrentServer, setServerList } from "../redux/server/action";
import { setCurrentConfig, setConfigList } from "../redux/config/action";

const STORAGE_KEY_CURRENT_SERVER = "currentServer";
const STORAGE_KEY_SERVER_LIST = "serverList";
const STORAGE_KEY_CURRENT_CONFIG = "currentConfig";
const STORAGE_KEY_CONFIG_LIST = "configList";

const storage = new Storage({
  // maximum capacity, default 1000 
	size: 1000,

	// Use AsyncStorage for RN, or window.localStorage for web.
	// If not set, data would be lost after reload.
	storageBackend: AsyncStorage,
	
	// expire time, default 1 day(1000 * 3600 * 24 milliseconds).
	// can be null, which means never expire.
	defaultExpires: null,
	
	// cache data in the memory. default is true.
	enableCache: true,
	
	// if data was not found in storage or expired,
	// the corresponding sync method will be invoked and return 
	// the latest data.
	sync : {
		// we'll talk about the details later.
	}
});

class LocalStorage {
  constructor() {
    console.log('localstorage');
  }

  syncDataToServerState() {
    storage.load({
      key: STORAGE_KEY_CURRENT_SERVER,
      autoSync: false
    }).then(uuid => {
      if (uuid) {
        setCurrentServer(uuid);
      }
    }).catch(err => {
    });

    storage.getAllDataForKey(STORAGE_KEY_SERVER_LIST).then(serverList => {
      setServerList(serverList);
    });
  }

  syncDataToConfigState() {
    storage.load({
      key: STORAGE_KEY_CURRENT_CONFIG,
      autoSync: false
    }).then(uuid => {
      if (uuid) {
        setCurrentConfig(uuid);
      }
    }).catch(err => {
    });

    storage.getAllDataForKey(STORAGE_KEY_CONFIG_LIST).then(configList => {
      setConfigList(configList);
    });
  }

  setCurrentServer(uuid) {
    storage.save({
      key: STORAGE_KEY_CURRENT_SERVER,
      data: uuid
    });
  }

  setCurrentConfig(uuid) {
    storage.save({
      key: STORAGE_KEY_CURRENT_CONFIG,
      data: uuid
    });
  }

  addServer(uuid, values) {
    storage.save({
      key: STORAGE_KEY_SERVER_LIST,
      id: uuid,
      data: values,
    })
  }
  deleteServer(uuid) { 
    storage.remove({
      key: STORAGE_KEY_SERVER_LIST,
      id: uuid,
    })
  }
  modifyServer(uuid, values) {
    this.addServer(uuid, values)
  }

  addConfig(uuid, values) {
    storage.save({
      key: STORAGE_KEY_CONFIG_LIST,
      id: uuid,
      data: values,
    })
  }
  deleteConfig(uuid) {
    storage.remove({
      key: STORAGE_KEY_CONFIG_LIST,
      id: uuid,
    });
  }
  modifyConfig(uuid, values) {
    this.addConfig(uuid, values);
  }

  serverDetail(uuid, callback) {
    storage.load({
      key: STORAGE_KEY_SERVER_LIST,
      id: uuid,
    }).then(data => {
      callback(data);
    }).catch(err => {
      callback(null);
    });
  }
  configDetail(uuid, callback) {
    storage.load({
      key: STORAGE_KEY_CONFIG_LIST,
      id: uuid,
    }).then(data => {
      callback(data);
    }).catch(err => {
      callback(null);
    });
  }
}

const localStorage = new LocalStorage();

export default localStorage;
