import { useState } from "react";

const Register = () => {

  // Khi ấn thêm thực hiện kiểm tra thông tin với các điều kiện sau
  // Username không được bỏ trống
  // Password không được bỏ trống và tối thiểu 6 ký tự
  // Name không được bỏ trống
  // Class bắt buộc chọn

  // Tạo 4 state lưu thông tin của 4 nội dung user nhập vào
  // Tạo 4 state lưu error của 4 nội dung trên
  //  - Nếu có lỗi thì error tương ứng != null
  // Tạo hàm khi có sự kiện click vào nút thêm để thực hiện kiểm tra trên

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [className, setClassName] = useState("-1");

  const [errUsername, setErrUsername] = useState(null);
  const [errPassword, setErrPassword] = useState(null);
  const [errName, setErrName] = useState(null);
  const [errClassName, setErrClassName] = useState(null);

  const handleChangeUsername = (props)=>{
    setUsername(props.target.value);
  }

  const handleChangePassword = (props)=>{
    setPassword(props.target.value);
  }

  const handleChangeName = (props)=>{
    setName(props.target.value);
  }

  const handleChangeClassName = (props)=>{
    setClassName(props.target.value);
  }

  const handleRegister = ()=>{
    if(username.trim().length == 0){
      setErrUsername("Username Error!");
    }

    if(password.trim().length < 6){
      setErrPassword("Password Error!");
    }

    if(name.trim().length == 0){
      setErrName("Name Error!");
    }

    if(className == -1){
      setErrClassName("Class Name Error!");
    }
  }

  return (
    <div className="container col-6 offset-3">
      <div className="mb-3">
        <label for="" className="form-label">
          Username
        </label>
        <input onChange={handleChangeUsername} required maxLength={20} type="text" className="form-control" placeholder="Username" />
        {/* Nếu errUsername != null || errUsername != undefind || errUsername == true || errUsername != 0 */}
        {errUsername && <small className="text-danger">{errUsername}</small>}
      </div>

      <div className="mb-3">
        <label for="" className="form-label">
          Password
        </label>
        <input onChange={handleChangePassword} type="password" className="form-control" placeholder="Password" />
      </div>

      <div className="mb-3">
        <label for="" className="form-label">
          Name
        </label>
        <input onChange={handleChangeName} type="text" className="form-control" placeholder="Name" />
      </div>

      <div className="mb-3">
        <label for="" className="form-label">
          Class
        </label>
        <select onChange={handleChangeClassName} className="form-select form-select-lg" name="" id="">
          <option selected value="-1">--------Select class--------</option>
          <option value="1">WD19301</option>
          <option value="2">WD19302</option>
          <option value="3">WD19303</option>
          <option value="4">WD19304</option>
        </select>
      </div>

      <button onClick={handleRegister} type="button" className="btn btn-primary">
        Add
      </button>
    </div>
  );
};

export default Register;
