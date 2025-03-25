import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // Khai báo 1 biến count có giá trị mặc định là 0
  // Biến này có thể thay đổi giá trị
  // let count = 0;
  // [biến chứa giá trị, hàm setter]
  // const [count, setCount] = useState(0);

  // // Viết 1 hàm tăng count lên 1 đơn vị
  // const handleCount = ()=>{
  //   // count = count + 1;
  //   // hàm set state của React JS đều là hàm
  //   // bất đồng bộ
  //   let countTemp = count + 1;
  //   setCount(countTemp);
  //   // TODO
  //   // 500 dòng đều sử dụng giá trị sau khi count + 1
  //   console.log(countTemp);
  // }

  // Khai báo 3 biến state MSSV, Tên, Điểm
  // Làm 1 giao diện hiện thị thông tin giá trị của 3 biến trên
  // Sử thẻ h

  // 1 Form có 3 input có thể nhập vào thông tin tương ứng

  const [code, setCode] = useState("PC12345");
  const [name, setName] = useState("Nguyen Van A");
  const [point, setPoint] = useState(7);

  // Tạo thêm 1 state là mảng sinh viên
  // Có 1 item mẫu bao gồm mssv, họ tên và điểm của SV
  // Dùng vòng lặp duyệt qua state trên để hiển thị ra bảng danh sách SV

  // Xử lý sự kiện khi người dùng nhập thông tin vào ô input
  // Nội dung hiển thị ở phía bên trên thông tin SV sẽ thay đổi theo
  // Tạo arrow func lắng nghe sự kiện đó bên ngoài return

  const handleChangeCode = (props)=>{
    setCode(props.target.value)
  }

  const handleChangeName = (props)=>{
    setName(props.target.value)
  }

  const handleChangePoint = (props)=>{
    setPoint(props.target.value)
  }

  return (
    <div className="container">
      <div className="text-center">
        <h1 className="text-primary">MSSV: {code}</h1>
        <h1 className="text-primary">Ho va ten: {name}</h1>
        <h1 className="text-danger">Diem: {point}</h1>
        <h1 className={point >= 5 ? "text-success" : "text-danger"}>
          Trang thai: {point >= 5 ? "Pass" : "Fail"}
        </h1>
        {/* Thêm 1 thông tin trạng thái của sv */}
        {/* Nếu điểm >= 5 hiển thị "Pass" chữ màu lục */}
        {/* Nếu điểm < 5 hiển thị "Fail" chữ màu đỏ */}
      </div>

      <div className="mt-5 col-6 offset-3">
        <div class="mb-3">
          <label for="" class="form-label">
            MSSV
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="MSSV"
            onChange={handleChangeCode}
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Họ và tên
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Họ và tên"
            onChange={handleChangeName}
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Điểm
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Điểm"
            onChange={handleChangePoint}
          />
        </div>
      </div>
      {/* <h1 className="text-danger">Count: {count}</h1>
      <br/>
      <button onClick={handleCount} className="btn btn-primary">Count</button> */}
      {/* Viết 1 thẻ HTML để hiện thị giá trị biến count lên giao diện */}
      {/* Viết 1 nút button click vào sẽ gọi hàm handleCount */}
    </div>
  );
}

export default App;
