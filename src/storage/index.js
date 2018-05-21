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

export const fetchServerDetial = (uuid) => {
  return new Promise((resolve, reject) => {
    LocalStore.fetchServerDetail(uuid, (err, values) => {
      resolve(values);
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

export const addConfig = (values) => {
  return new Promise((resolve, reject) => {
    LocalStore.addConfig(values, () => {
      resolve();
    });
  });
}

export const modifyConfig = (uuid, values) => {
  return new Promise((resolve, reject) => {
    LocalStore.modifyConfig(uuid, values, () => {
      resolve();
    });
  });
}

export const deleteConfig = (uuid) => {
  return new Promise((resolve, reject) => {
    LocalStore.deleteConfig(uuid, () => {
      resolve();
    });
  });
}

export const fetchConfigDetial = (uuid) => {
  return new Promise((resolve, reject) => {
    LocalStore.fetchConfigDetail(uuid, (err, values) => {
      resolve(values);
    });
  });
}
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