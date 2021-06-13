import { ThunkMiddleware } from "redux-thunk"

export const actionLog: ThunkMiddleware = (store) => (next) => (action) => {
  console.log("state 当前：", store.getState());
  console.log("first action", action);
  next(action);
  console.log("state 更新：", store.getState());
}