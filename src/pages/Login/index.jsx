import axios from "axios";
import { useForm } from "react-hook-form";
import Constants from "../../Constants";
import { useNavigate } from 'react-router'
// Provider import và gọi ở file index.js thư mục root src
// Khi sử dụng Provider thì các hàm liên quan đến 
// import những hàm có use****

import { useCookies } from 'react-cookie';

const Login = () => {
  const navivgate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["token", "role"]);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleLogin = async (props) => {
    try{
      const {username, password} = props;
      // Gọi api đăng nhập
      let formData = new FormData();
      // formData.append("username", props.username)
      // formData.append("password", props.password)

      formData.append("username", username)
      formData.append("password", password)
      const res = await axios.post(`${Constants.DOAMIN_API}/auth/login`)
      console.log("login res === ", res.data);

      // let expiresTime = new Date().getTime() + 1000 * 60 * 60 * 10;
      // let expiresDate = new Date(expiresTime);
      // Tăng expiresDate lên 10h tiếp theo 

      let expiresDate = new Date();
      expiresDate.setHours(expiresDate.getHours() + 10)

      setCookie("token", res.data.data.token, {
        path: "/*",
        expires: expiresDate// Date
      })

      setCookie("role", `${res.data.data.role}`, {
        path: "/*",
        expires: expiresDate// Date
      })

      // JWT
      // CN: Xác thực API
      // CN-2: Lưu trữ thông tin user với thời hạn nhất định trên JWT

      // JWT hết hạn => lưu trong localstorage

      // Ktra nếu có jwt (2h) thì user đã đăng nhập và không cần
      // đăng nhập lại

      // Sau 2h => mở vào web => JWT có tồn tại ở localstorage
      // => Đã đăng nhập => encode => thời hạn

      // Có tồn tại hay không là được???????

      // role == 0 => Admin
      // role == 1 => User

      // Gọi API login ở postman
      // Kiểm tra JWT tồn tại trong bao lâu (10h)
      // Lưu jwt vào cookie
      // Sử dụng thư viện react-cookie
      // Lưu và set thời gian hết hạn của cookie tương
      // ứng với thời gian của JWT

      // Set jwt vào cookie với key "token", thời hạn là 10h
      // Set role vào cookie với key "role", thời hạn là 10h

      if(res.data.data.role == 0){
        navivgate("/admin/users")
      }else {
        navivgate("/user/info")
      }

      // Kiểm tra nếu role là admin thì chuyển về trang /admin/users
      // Kiểm tra nếu role là user thì chuyển về trang /user/info

    }catch(e){
      console.log(e)
    }
  }

  return (
    <div className="col-6 offset-3 p-5 text-center">
      <div class="mb-3">
        <label class="form-label">Username</label>
        <input
          type="text"
          class="form-control"
          {...register("username", {
            required: { value: true, message: "Username required" },
          })}
        />
        {errors["username"] && (
          <small className="text-danger">{errors["username"].message}</small>
        )}
      </div>

      <div class="mb-3">
        <label class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          {...register("password", {
            required: { value: true, message: "password required" },
          })}
        />
        {errors["password"] && (
          <small className="text-danger">{errors["password"].message}</small>
        )}
      </div>
        {/* Click vào thực hiện kiểm tra validate */}
        {/* Nếu có lỗi hiển thị lỗi */}
        {/* Nếu không lỗi gọi api đăng nhập sau đó log ra response từ api trả về */}
      <button onClick={handleSubmit(handleLogin)} type="button" class="btn btn-primary">
        Login
      </button>
    </div>
  );
};

export default Login;
