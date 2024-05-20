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
      id: Math.floor(Math.random() * 100 + new Date().getMilliseconds()),
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
  const reducer = (state = initial, action: any) => {
    switch (action.type) {
      case "CHANGEINPUT":
        return { ...state, todo: { ...state.todo, name: action.payload } };
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
  return (
    <div>
      <p>UseReducer nâng cao</p>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Nhập tên công việc"
      />
      <button onClick={handleButton}>ADD NEW JOB</button>
      <p>Danh sách công việc</p>
      <ul>
        {state.todos.map((item: Todo) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
