import logo from "./logo.svg";
import "./App.css";
import StudentItem from "./components/StudentItem";
import Button from "./components/Button";
import Status from "./components/Status";

function App() {
  // Tạo 1 danh sách SV
  // MSSV, Họ tên, Điểm TB
  // Tạo 1 Components hiển thị thông tin SV đó
  // - MSSV
  // - Họ và tên
  // - Trạng thái: Nếu điểm TB >= 5 => "Pass Môn" : "Fail Môn"
  // Dùng vòng lập duyệt qua danh sách SV
  // Hiển thị thông tin vào components

  const students = [
    {
      code: "PC1234",
      name: "Nguyen Van A",
      point: 7,
    },
    {
      code: "PC1235",
      name: "Nguyen Van B",
      point: 4,
    },
    {
      code: "PC1236",
      name: "Nguyen Van C",
      point: 9.75,
    },
  ];

  const renderStudent = (value, item)=>(
    <StudentItem code={value.code}
      name={value.name}
      point={value.point}
      isPass={value.point >= 5}/>
  )



  // Xây dựng 1 components Button
  // Có props lần lượt là
  // - title (Nội dung hiển thị bên trong button)
  // - type
  //     + "default" hoặc không nhập type => giao diện button primary
  //     + "disable" => giao diện button disable (màu xám)
  //     + "outline" => giao diện button background trong suốt, border màu xanh

  return (
    <div className="container">
      <Status type={0}/>
      <Status type={1}/>
      {/* <div class="table-responsive">
        <table class="table table-primary">
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map(renderStudent)}
          </tbody>
        </table>
      </div>

      <Button title={"Test primary"} type="outline"/>
      <Button title={"Test primary"} type="default"/>
      <Button title={"Test primary"} type="disable"/>
      <Button title={"Test primary"}/> */}
    </div>
  );
}

export default App;
