// Khi ấn thêm thực hiện kiểm tra thông tin với các điều kiện sau
// Username không được bỏ trống
// Password không được bỏ trống và tối thiểu 6 ký tự
// Name không được bỏ trống
// Class bắt buộc chọn

import { useForm } from "react-hook-form";
import axios from 'axios'
import {
  useNavigate,
  useSearchParams, // Lấy thông qua query params ?id=abc
  // register-use-hook-form/:id => register-use-hook-form/123
  useParams, // 123 => path
} from 'react-router'
import { useEffect, useState } from "react";
import Constants from "../../Constants";


// Lấy giá trị của query params thông qua thư viên react-router

const RegisterUseHookForm = () => {
  const navigate = useNavigate();
  const [queryParams, setQueryParams] = useSearchParams();
  const {
    register,
    formState: { errors }, // Dùng errors để hiển thị lỗi
    handleSubmit, // Validate form => Có lỗi hiển thị error
    // Nếu không có lỗi => gọi hàm handleRegister và truyền giá trị
    // của từng ô input vào hàm handleRegister

    reset, // Xoá nội dung bên trong form
    getValues, // getValues("username") => Lấy giá trị của ô input có key là username
    setValue, // setValue("username", "abc"); => Gán giá trị của ô input có key là username
  } = useForm();

  useEffect(()=>{
    console.log("params === ", queryParams.get("id"))
    // Gọi api get user info theo id trên url
    // Sau đó dùng hàm setValue của react-hook-form
    // để gán giá trị lấy được từ api vào gắn vào input tương ứng
    // username, name, gender

    if(queryParams.get("id")){
      getUserInfo();
    }
  }, [])

  const getUserInfo = async () =>{
    try{
      const res = await axios.get(`${Constants.DOAMIN_API}/auth/user?id=${queryParams.get("id")}`)

      setValue("username", res.data.data.username)
      setValue("name", res.data.data.name)
      setValue("gender", `${res.data.data.gender}`)

      console.log(getValues())
    }catch(e){
      console.log("error === ", e);
    }
  }

  // Thêm 2 trường dữ liệu
  // Radio button giới tính
  // Input images ảnh đại diện

  // Thực hiện bắt lỗi thêm 2 trường dữ liệu trên
  // Giới tính bắt buộc chọn
  // Ảnh đại diện
  // + bắt buộc thêm
  // + phải là kiểu jpg || jpge || webp || png
  // + kích thước tối đa 10MB

  const handleRegister = async (props) => {
    // Nếu có id thì thực hiện chức năng sửa
    // Gọi api sửa

    if(queryParams.get("id")){
      // Gọi api sửa
      // Sau khi sửa thành công chuyển về trang danh sách user
      try{
        let formData = new FormData();
        formData.append("username", props.username);
        formData.append("password", props.password);
        formData.append("name", props.name);
        formData.append("gender", props.gender);
        // Post 1 file
        formData.append("avatar", props.avatar[0])
        formData.append("id", queryParams.get("id"))

        // Ví dụ api này cho post lên nhiều ảnh
        // Key "avatar" => nhận 1 array file
        // Ví dụ trong ô input cho 3 ảnh
        // append => "avatar[0]"
        // props.avatar => array (file)
        // Post nhiều file
        for(let index = 0; index < props.avatar.length; index++){
          formData.append(`avatar[${index}]`, props.avatar[index]);
        }

        await axios.put(`${Constants.DOAMIN_API}/auth/update-user`, formData)

        navigate("/users");
      }catch(e){
        console.log(e)
      }
      return;
    }

    console.log("register value === ", props);
    // props => json {key: value} => tên của từng ô input
    try{
      let formData = new FormData();
      formData.append("username", props.username);
      formData.append("password", props.password);
      formData.append("name", props.name);
      formData.append("gender", props.gender);
      formData.append("avatar", props.avatar[0])
  
      const res = await axios.post(`${Constants.DOAMIN_API}/auth/add-user`, formData)
      console.log(res.data)

      navigate("/users");

      // Thêm thành công.
      // Chuyển về lại trang danh sách user
      // và có hiển thị được cái user vừa thêm
      // sử dụng thư viện của react-router để chuyển trang
    }catch(e){
      console.log(e)
    }
  };

  // Cho chọn nhiều ảnh
  // Số lượng ảnh tối thiểu là 3
  // Kiểu của tất cả các ảnh phải là
  // jpg || jpge || webp || png
  // Kích thước của mỗi ảnh không được vượt quá 15MB

  // const validateAvatar = (props) => {
  //   console.log("Avatar props === ", props);
  //   if(props.length < 3){
  //     return "Avatar required!";
  //   }

  //   const types = [
  //     "image/jpeg", 
  //     "image/png", 
  //     "image/jpg", 
  //     "image/webp"
  //   ];

  //   const maxSize = 1024 * 1024 * 15;

  //   for(let index = 0; index < props.length; index++){
  //     if(!types.includes(props[index].type)){
  //       return "Avatar type error!";
  //     }

  //     if(props[index].size > maxSize){
  //       return "Avatar size error!";
  //     }
  //   }

  //   return true;
  // }

  const validateAvatar = (props) => {
    console.log("Avatar props === ", props);

    // Bắt lỗi không chọn file
    if(props.length == 0) {
      return "Avatar required!";
    }

    // jpg || jpge || webp || png
    // props[0].type => image/jpeg
    const types = [
      "image/jpeg", 
      "image/png", 
      "image/jpg", 
      "image/webp"
    ];
    if(!types.includes(props[0].type)) {
      return "Avatar type error!";
    }

    // kích thước tối đa 10MB
    const maxSize = 1024 * 1024 * 10; // convert 10MB => byte
    if(props[0].size > maxSize){
      return "Avatar size error!"
    }

    // props is Array
    // Giá trị image => items[0] => {type, size}

    // Nếu type khác giá trị => return "Error";

    return true; // Đúng thông tin cần kiểm tra
    // Không có Error

    // return "abc"; // Error sẽ là chuỗi được return
  };

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
        <br />

        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            value="0"
            {...register("gender", {
              required: { value: true, message: "Gender required!" },
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
              required: { value: true, message: "Gender required!" },
            })}
          />
          <label class="form-check-label" for="">
            Female
          </label>
        </div>

        {errors["gender"] && (
          <small className="text-danger">{errors["gender"]["message"]}</small>
        )}
      </div>

      <div class="mb-3">
        <label for="" class="form-label">
          Avatar
        </label>
        <input
          type="file"
          class="form-control"
          aria-describedby="fileHelpId"
          multiple
          accept="image/*"
          {...register("avatar", {
            validate: validateAvatar,
          })}
        />

        {errors["avatar"] && (
          <small className="text-danger">{errors["avatar"]["message"]}</small>
        )}
      </div>

      <button
        onClick={handleSubmit(handleRegister)}
        type="button"
        className="btn btn-primary"
      >
        {queryParams.get("id") ? "Update" : "Add"}
      </button>

      {/* queryParams.get("id") */}

      {/* Nếu có query params thì nội dung của button là update */}
      {/* Ngược lại là add */}
    </div>
  );
};

export default RegisterUseHookForm;
