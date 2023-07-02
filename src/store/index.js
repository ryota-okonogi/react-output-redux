import { configureStore } from "@reduxjs/toolkit"
import todoListReducer from "./todo"

export default configureStore({
  reducer: {
    // Slice名: スライス名(reducer名)
    todo: todoListReducer,
  },
});

// ＜stateへのアクセス＞
// Storeに登録するReducerのkeyでstateにアクセスできる ↓
// Reducerのキーがtodoなのでstate.todoでアクセスできる
