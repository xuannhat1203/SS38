import React, { useReducer } from "react";
interface Todo {
  id: number;
  name: string;
  status: boolean;
}
export default function UseReducerDefferent() {
  // thực hành làm todo list dùng useReducer
  //   khai báo state trước
  const initial = {
    todos: [],
    isloading: false,
    todo: {
      id: 0,
      name: "",
      status: false,
    },
  };
  //   khởi tạo hàm action
  const action = (type: any, payload: any) => {
    return {
      type: type,
      payload: payload,
    };
  };
  // khởi tạo hàm reducer
  const reducer = (state: any = initial, action: any) => {
    switch (action.type) {
      case "CHANGEINPUT":
        return {
          ...state,
          todo: {
            ...state.todo,
            name: action.payload,
          },
        };
      case "ADD_JOB":
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              ...action.payload,
              id: Math.floor(
                Math.random() * 100 + new Date().getMilliseconds()
              ),
            },
          ],
        };
      default:
        return { ...state, todo: { ...state.todo, name: action.payload } };
    }
  };
  const [state, dispat] = useReducer(reducer, initial);
  //   hàm lấy giá trị ô input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    dispat(action("CHANGEINPUT", inputValue));
  };
  //   hàm thêm công việc
  const addTodo = () => {
    dispat(action("ADD_JOB", state.todo));
    console.log(state.todo);
  };
  return (
    <div>
      <p>UseReducer nâng cao</p>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Nhập tên công việc"
      />
      <button onClick={addTodo}>ADD NEW JOB</button>
      <p>Danh sách công việc</p>
      <ul>
        {state.todos.map((item: Todo) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
