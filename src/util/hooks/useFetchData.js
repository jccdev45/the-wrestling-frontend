import { useReducer, useEffect } from "react";
import axios from "axios";
import { getItems, searchItem } from "../api/apiRequests";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, data: [] };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, data: action.payload.data };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: [],
      };
    default:
      return state;
  }
};

export default function useFetchData(target, search) {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    loading: true,
  });

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });

    // console.log(search)
    search
      ? searchItem(cancelToken, target, search)
      : getItems(cancelToken, target)
          .then((res) => {
            dispatch({ type: ACTIONS.GET_DATA, payload: { data: res.data } });
          })
          .catch((e) => {
            if (axios.isCancel(e)) return;
            dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
          });

    return () => {
      cancelToken.cancel();
    };
  }, [target, search]);

  return state;
}
