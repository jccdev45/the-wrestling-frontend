import api from "./apiConfig";

export const getItems = async (cancelToken, path) => {
  try {
    const res = await api.get(path, { cancelToken: cancelToken.token });
    return res;
  } catch (error) {
    throw error;
  }
};

export const getItemById = async (path, id) => {
  try {
    const res = await api.get(`${path}/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};

export const searchItem = async (cancelToken, path, search) => {
  try {
    console.log(`${path}/search`, search);
    // let rep = new RegExp(`#${search}#`, "g");
    // console.log(rep);
    const res = await api.post(
      `${path}/search`,
      {
        // cancelToken: cancelToken.token,
        // params: {
        typePrimary: search,
        // typeSecondary: { $all: [`/${search}/`] },
        // participants: { $all: search },
        // title: { $all: [`/${search}/`] },
        // show: `/${search}/`,
        // outcome: `/${search}/`,
        // date: `/${search}/`,
      }
      // }
    );
    return res;
  } catch (error) {
    throw error;
  }
};

export const addItem = async (path, item) => {
  try {
    const res = await api.post(path, item);
    return res;
  } catch (error) {
    throw error;
  }
};

export const editItem = async (path, id, item) => {
  try {
    const res = await api.patch(`${path}/${id}`, item);
    return res;
  } catch (error) {
    throw error;
  }
};

export const deleteItem = async (path, id) => {
  try {
    const res = await api.delete(`${path}/${id}`);
    return res;
  } catch (error) {
    throw error;
  }
};
