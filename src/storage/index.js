import { NativeModules } from "react-native";

const LocalStore = NativeModules.LocalStore;

export const fetchServerList = () => {
  return new Promise((resolve, reject) => {
    LocalStore.fetchServerList((err, serverList) => {
      resolve(serverList);
    });
  });
};

export const addServer = (values) => {
  return new Promise((resolve, reject) => {
    LocalStore.addServer(values, () => {
      resolve();
    });
  });
}

export const modifyServer = (uuid, values) => {
  return new Promise((resolve, reject) => {
    LocalStore.modifyServer(uuid, values, () => {
      resolve();
    });
  });
}

export const deleteServer = (uuid) => {
  return new Promise((resolve, reject) => {
    LocalStore.deleteServer(uuid, () => {
      resolve();
    });
  });
}

export const fetchConfigList = () => {
  return new Promise((resolve, reject) => {
    LocalStore.fetchConfigList((err, configList) => {
      resolve(configList);
    });
  });
};

export const getGeneral = () => {
  return new Promise((resolve, reject) => {
    LocalStore.getGeneral((err, general) => {
      resolve(general);
    });
  });
}

export const setGeneral = (values) => {
  return new Promise((resolve, reject) => {
    LocalStore.setGeneral(values, () => {
      resolve();
    });
  });
}