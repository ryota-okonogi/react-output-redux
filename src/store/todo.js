import { createSlice } from "@reduxjs/toolkit";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data";

// https://redux--toolkit-js-org.translate.goog/api/createslice?_x_tr_sl=en&_x_tr_tl=ja&_x_tr_hl=ja&_x_tr_pto=sc
export const todoListSlice = createSlice({
  name: "todo", // スライス名
  // 初期値定義
  initialState: {
    // stateはinitialState に記述する
    todos: INIT_TODO_LIST,
    uniqueId: INIT_UNIQUE_ID,
  },
  // reducersの中に状態を変更する関数をまとめる
  reducers: { // useReducer = const [state, dispatch] = useReducer(reducer, initialArg, init);
    // 関数１
    // addTodoのソース: src/components/organisms/AddTodo/index.jsx
    addTodo: (state, action) => { // reducer
      const nextUniqueId = state.uniqueId + 1; // const nextUniqueId = uniqueId + 1;
      state.todos = [
        ...state.todos,
        {
          id: nextUniqueId,
          title: action.payload, // payload = 送るデータ本体
        },
      ];
      state.uniqueId = nextUniqueId;
    },
    // 関数２
    // deleteTodoのソース: src/hooks/useTodo.js
    deleteTodo: (state, action) => { // reducer
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// アクション切り出し
export const { addTodo, deleteTodo } = todoListSlice.actions;

// リデューサ切り出し
export default todoListSlice.reducer;

// ＜nextUniqueId ↓＞
// https://github.com/YukiOnishi1129/react-output-redux/commit/518579bb4201a0f2c8d573ffa11541c33381dc42#diff-1d9cb7c75b370fc8f619c721b4093ce614b4f25e5c7ac4b3f23c422ed1391e91L48:~:text=%22%22)%20%7B-,const%20nextUniqueId%20%3D%20uniqueId%20%2B%201%3B,-//%20Todo%E8%BF%BD%E5%8A%A0%E5%87%A6%E7%90%86
