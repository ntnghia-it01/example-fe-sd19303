// Khi ấn thêm thực hiện kiểm tra thông tin với các điều kiện sau
// Username không được bỏ trống
// Password không được bỏ trống và tối thiểu 6 ký tự
// Name không được bỏ trống
// Class bắt buộc chọn

import { useForm } from 'react-hook-form';

const RegisterUseHookForm = () => {
  const {
    register
  } = useForm();

  return (
    <div className="container col-6 offset-3">
      <div className="mb-3">
        <label for="" className="form-label">
          Username
        </label>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Username" 
          {...register("username", {
            required: {value: true, message: "Username required!"},
            // minLength: {value: 6, message: "Username min Length 6 charter"},
            // valueAsNumber: true,
            // min: {value: 10, message: "Error"}
          })}
        />
      </div>

      <div className="mb-3">
        <label for="" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" placeholder="Password" />
      </div>

      <div className="mb-3">
        <label for="" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" placeholder="Name" />
      </div>

      <div className="mb-3">
        <label for="" className="form-label">
          Class
        </label>
        <select className="form-select form-select-lg" name="" id="">
          <option selected value="-1">--------Select class--------</option>
          <option value="1">WD19301</option>
          <option value="2">WD19302</option>
          <option value="3">WD19303</option>
          <option value="4">WD19304</option>
        </select>
      </div>

      <button type="button" className="btn btn-primary">
        Add
      </button>
    </div>
  );
};

export default RegisterUseHookForm;
