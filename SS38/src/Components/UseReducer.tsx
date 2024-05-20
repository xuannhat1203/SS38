import { useReducer } from "react";
export default function UseReducer() {
  // khai báo giá trị khởi tạo
  const initial: number = 0;
  // khởi tạo hàm reducer
  const reducer = (state = initial, action: any) => {
    switch (action.type) {
      case "increase":
        return state + 1;
      case "decrease":
        return state - 1;
      default:
        return state;
    }
  };
  const action = (type: any, payload: any) => {
    return {
      type: type,
      payload: payload,
    };
  };
  // đối với những action có dữ liệu phức tạp thì nên tạo ra 1 function
  // dùng destructuring để hứng kết quả;
  const [count, dispatch] = useReducer(reducer, initial);
  const increase = () => {
    dispatch(action("increase", 1));
  };
  const decrease = () => {
    dispatch(action("decrease", 2));
  };
  return (
    <div>
      {/* 
        là 1 hook 
        sinh ra để làm gì và cách dùng của nó:
        1. sinh ra để quản lí những state phức tạp
        - khi muốn quản lí state thì thường sử dụng useState (quản lí những state đơn giản)
        - về bản chất những gì useState làm được thì useReducer cũng làm được nhưng nó sẽ đi xử lí những state phức tạp hơn
        2. tiền đề sau này học redux ( là 1 thư viện giúp tạo kho chứa dữ liệu )
        B1: import nó vào 
        B2: useReducer()
        nhận vào 2 tham số: 
        - hàm reducer
        - giá trị khởi tạo
      */}
      <p>Giá trị của count: {count}</p>
      <button onClick={increase}>Tăng</button>
      <button onClick={decrease}>Giảm</button>
    </div>
  );
}
