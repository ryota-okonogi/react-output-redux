/**
 * useTodo
 *
 * @package hooks
 */
import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

/**
 * useTodo
 */
export const useTodo = () => {
    /* store */

    // https://scrapbox.io/terrierscript/%E4%BB%8A%E3%81%93%E3%81%9D%E4%BC%9D%E3%81%88%E3%81%9F%E3%81%84%EF%BC%81@ts-ignore%E3%81%AE%E9%AD%85%E5%8A%9B
  // @ts-ignore
  const todoList = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  /* add input title */
  const [addInputValue, setAddInputValue] = useState("");
  /* 検索キーワード */
  const [searchKeyword, setSearchKeyword] = useState("");
  /* 表示用TodoList */
  const showTodoList = useMemo(() => {
    return .filter((todo) => { // ーーーーー変更ーーーーー
      // 検索キーワードに部分一致したTodoだけを一覧表示する
      const regexp = new RegExp("^" + searchKeyword, "i");
      return todo.title.match(regexp);
    });
  }, [, searchKeyword]); // ーーーーー変更ーーーーー

  /* actions */
  /**
   * addInputValueの変更処理
   * @param {*} e
   */
  const onChangeAddInputValue = (e) => setAddInputValue(e.target.value);

  /**
   * Todo新規登録処理
   * @param {*} e
   */
  const handleAddTodo = (e) => {
    //  エンターキーが押された時にTodoを追加する
    if (e.key === "Enter" && addInputValue !== "") {
      // Todo追加処理
      // const nextUniqueId = uniqueId + 1; // ーーーーー変更ーーーーー
      // 元の配列を破壊しないように配列のコピーを作成して、その値でstateを更新する
      // pushでの配列追加は元の配列の値を変更するのでエラーになる

      // concatの処理
      // setOriginTodoList(
      //   // concatとpushの違い
      //   // https://kskpblog.com/javascript-array-add/
      //   todoList.concat({
      //     id: nextUniqueId,
      //     title: addInputValue,
      //   })
      // );

      // スプレッド構文の処理
      // const newTodoList = [
      //   ...originTodoList,
      //   {
      //     id: nextUniqueId,
      //     title: addInputValue,
      //   },
      // ];
      // setOriginTodoList(newTodoList);

      // // 採番IDを更新
      // setUniqueId(nextUniqueId); // ーーーーー変更ーーーーー

      // ーーーーー変更(追加)ーーーーー

      // todo追加後、入力値をリセット
      setAddInputValue("");
    }
  };

  /**
   * Todo削除処理
   * @param { number } targetId
   * @param { string }targetTitle
   */
  const handleDeleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
      // 削除するid以外のtodoリストを再編集
      // filterを用いた方法
      // const newTodoList = originTodoList.filter((todo) => todo.id !== targetId); // ーーーーー変更ーーーーー

      // 削除するTodoの配列番号を取り出してspliceで削除する方法もある
      // const newTodoList = [...todoList];
      // const deleteIndex = newTodoList.findIndex((todo) => todo.id === targetId);
      // newTodoList.splice(deleteIndex, 1);

      // todoを削除したtodo listで更新
      // setOriginTodoList(newTodoList); // ーーーーー変更ーーーーー
    }
  };

  /**
   * 検索キーワード更新処理
   * @param {*} e
   */
  const handleChangeSearchKeyword = (e) => setSearchKeyword(e.target.value);

  // 変更点: ローカルの状態管理→ グローバルの状態管理
  // 状態とロジックはまとめてreturnで返す


  // context以前の返却方法へ戻す // ーーーーー変更(追加)ーーーーー


  // return {
  //   addInputValue,
  //   searchKeyword,
  //   showTodoList,
  //   onChangeAddInputValue, // ーーーーー変更(もとの)ーーーーー
  //   handleAddTodo,
  //   handleDeleteTodo,
  //   handleChangeSearchKeyword,
  // };
};
