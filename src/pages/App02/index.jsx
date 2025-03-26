// import React from 'react'
import { useState } from "react";
import StudentItem from "../../components/StudentItem";

const App02 = () => {
  // Tạo thêm 1 state là mảng sinh viên
  // Có 1 item mẫu bao gồm mssv, họ tên và điểm của SV
  // Dùng vòng lặp duyệt qua state trên để hiển thị ra bảng danh sách SV

  // const [students, setStudents] = React.useState([])
  const [students, setStudents] = useState([
    {
      code: "PC12345",
      name: "Nguyen Van A",
      point: 9,
    },
  ]);
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [point, setPoint] = useState(0);

  // Tạo thêm 3 biến state để chứa thông tin của 3 ô input
  // Sử dụng event change của ô input để cập nhật giá trị state
  // khi người dùng nhập thông tin vào input 

  const handleChangeCode = (props)=>{
    setCode(props.target.value)
  }

  const handleChangeName = (props)=>{
    setName(props.target.value)
  }

  const handleChangePoint = (props)=>{
    setPoint(props.target.value)
  }

  // Tạo 1 hàm xử lý sự kiện khi click vào Button Thêm
  // Thực hiện thêm 1 item bao gồm các thông tin input 
  // vào mảng students ở state

  const handleClickAdd = ()=>{
    const data = {
      code: code,
      name: name,
      point: point,
    }

    // Lấy dữ liệu từ data thêm vào mảng students
    // và cập nhật state students lại

    // Tạo 1 mảng mới bằng với mảng students hiện tại
    // Thực hiện push data vào mảng mới
    // dùng setStudent gán giá trị của mảng mới vào

    // let studentsTemp = [];
    // studentsTemp.push(...students)
    // studentsTemp.push(data)
    // setStudents(studentsTemp);

    setStudents([...students, data])

    // students => [1, 2, 3, 4, 5]
    // data = 7
    // [...students, data] <=> [1, 2, 3, 4, 5, 7]

    // Ví dụ array = [1, 2, 3, 4]
    // ...array => a = 1, b = 2, ....
    // studentsTemp.push(...array) <=> studentsTemp.push(1, 2, 3, 4)
  }

  const renderStudent = (value, index) => {
    return <StudentItem code={value.code}
      name={value.name}
      isPass={value.point >= 5}/>
    // return (
    //   <tr key={index}>
    //     <td>{value.code}</td>
    //     <td>{value.name}</td>
    //     <td>{value.point}</td>
    //   </tr>
    // );
    
    // return components StudentItem
  };

  return (
    <div className="container mt-5">
      <div className="table-responsive">
        <table className="table table-primary">
          <thead>
            <tr>
              <th scope="col">MSSV</th>
              <th scope="col">Họ và tên</th>
              <th scope="col">Điểm</th>
            </tr>
          </thead>
          <tbody>{students.map(renderStudent)}</tbody>
        </table>
      </div>

      {/* Làm 1 form thêm thông tin SV */}
      {/* Có MSSV, Họ tên, điểm */}

      <div className="col-6 offset-3">
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

        <button
          type="button"
          class="btn btn-primary"
          onClick={handleClickAdd}
        >
          Thêm
        </button>
        
      </div>
    </div>
  );
};

export default App02;
