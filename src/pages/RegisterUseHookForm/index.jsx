// Khi ấn thêm thực hiện kiểm tra thông tin với các điều kiện sau
// Username không được bỏ trống
// Password không được bỏ trống và tối thiểu 6 ký tự
// Name không được bỏ trống
// Class bắt buộc chọn

import { useForm } from "react-hook-form";

const RegisterUseHookForm = () => {
  const {
    register,
    formState: { errors }, // Dùng errors để hiển thị lỗi
    handleSubmit, // Validate form => Có lỗi hiển thị error
    // Nếu không có lỗi => gọi hàm handleRegister và truyền giá trị
    // của từng ô input vào hàm handleRegister

    reset, // Xoá nội dung bên trong form
    getValues, // getValues("username") => Lấy giá trị của ô input có key là username
    setValue, // setValue("username", "abc"); => Gán giá trị của ô input có key là username
  } = useForm({
    defaultValues: {
      username: "abc",
      password: "1234567",
    },
  });

  // Thêm 2 trường dữ liệu
  // Radio button giới tính
  // Input images ảnh đại diện

  // Thực hiện bắt lỗi thêm 2 trường dữ liệu trên
  // Giới tính bắt buộc chọn
  // Ảnh đại diện
  // + bắt buộc thêm
  // + phải là kiểu jpg || jpge || webp || png
  // + kích thước tối đa 10MB

  const handleRegister = (props) => {
    console.log("register value === ", props);
  };

  const validateAvatar = (props)=>{
    console.log("Avatar props === ", props);
    // props is Array
    // Giá trị image => items[0] => {type, size}

    // Nếu type khác giá trị => return "Error";

    return true; // Đúng thông tin cần kiểm tra
    // Không có Error

    // return "abc"; // Error sẽ là chuỗi được return
  }

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
            required: { value: true, message: "Username required!" },
          })}
        />
        {errors["username"] && (
          <small className="text-danger">{errors["username"]["message"]}</small>
        )}
        {/* {errors.username && <small className='text-danger'>{errors.username.message}</small>} */}
      </div>

      <div className="mb-3">
        <label for="" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          {...register("password", {
            required: { value: true, message: "Password required!" },
            minLength: { value: 6, message: "Password min length 6!" },
          })}
        />
        {errors["password"] && (
          <small className="text-danger">{errors["password"]["message"]}</small>
        )}
      </div>

      <div className="mb-3">
        <label for="" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          {...register("name", {
            required: { value: true, message: "Name required!" },
          })}
        />
        {errors["name"] && (
          <small className="text-danger">{errors["name"]["message"]}</small>
        )}
      </div>

      <div className="mb-3">
        <label for="" className="form-label">
          Class
        </label>
        <select
          className="form-select form-select-lg"
          {...register("className", {
            required: { value: true, message: "Class name required!" },
            min: { value: 0, message: "Class name required!" },
          })}
        >
          <option selected value="-1">
            --------Select class--------
          </option>
          <option value="1">WD19301</option>
          <option value="2">WD19302</option>
          <option value="3">WD19303</option>
          <option value="4">WD19304</option>
        </select>
        {errors["className"] && (
          <small className="text-danger">
            {errors["className"]["message"]}
          </small>
        )}
      </div>

      <div className="mb-3">
        <label for="" className="form-label">
          Gender
        </label>
        <br/>

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            value="0"
            {...register("gender", {
              required: {value: true, message: "Gender required!"}
            })}
          />
          <label class="form-check-label" for="">
            Male
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            value="1"
            {...register("gender", {
              required: {value: true, message: "Gender required!"}
            })}
          />
          <label class="form-check-label" for="">
            Female
          </label>
        </div>
      </div>

      <div class="mb-3">
        <label for="" class="form-label">
          Avatar
        </label>
        <input
          type="file"
          class="form-control"
          aria-describedby="fileHelpId"
          {...register("avatar", {
            validate: validateAvatar
          })}
        />
      </div>

      <button
        onClick={handleSubmit(handleRegister)}
        type="button"
        className="btn btn-primary"
      >
        Add
      </button>
    </div>
  );
};

export default RegisterUseHookForm;
