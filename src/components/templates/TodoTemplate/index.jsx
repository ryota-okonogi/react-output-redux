/**
 * TodoTemplate
 *
 * @package components
 */
import { InputForm } from "../../atoms/InputForm";
import { AddTodo } from "../../organisms/AddTodo";
import { TodoList } from "../../organisms/TodoLlist";
import { useTodo } from "../../../hooks/useTodo";
import styles from "./styles.module.css";

/**
 * TodoTemplate
 * @returns {JSX.Element}
 * @constructor
 */

// なんでオブジェクトではなく配列として定義する？
// → useTodo(src/hooks/useTodo.ts)の戻り値が配列で定義されているから
export const TodoTemplate = () => {
  // カスタムフックから状態とロジックを呼び出してコンポーネントにあてがう
  const [
    { addInputValue, searchKeyword, showTodoList },
    {
      onChangeAddInputValue,
      handleAddTodo,
      handleDeleteTodo,
      handleChangeSearchKeyword,
    }
  ] = useTodo(); // 変更点: ローカルの状態管理→ グローバルの状態管理

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      {/* Todo追加エリア */}
      <section className={styles.common}>
        <AddTodo
          addInputValue={addInputValue}
          onChangeTodo={onChangeAddInputValue}
          handleAddTodo={handleAddTodo}
        />
      </section>
      {/* Todo検索フォームエリア */}
      <section className={styles.common}>
        <InputForm
          inputValue={searchKeyword}
          placeholder={"Search Keyword"}
          handleChangeValue={handleChangeSearchKeyword}
        />
      </section>
      {/* Todoリスト一覧表示 */}
      <section className={styles.common}>
        {showTodoList.length > 0 && (
          <TodoList
            todoList={showTodoList}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
      </section>
    </div>
  );
};
