import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";
import Constants from "../../Constants";

const Users = () => {
  const [data, setData] = useState([]);

  // http://172.16.18.45:8080/auth/users

  // Không được set async cho func bên trong useEffect
  useEffect(() => {
    // Trường hợp đúng
    // Khi response có giá trị
    // try{
    //   const res = await axios.get("http://172.16.18.45:8080/auth/users");
    //   console.log(res);
    //   console.log("abc");
    // }catch(e){
    //   console.log(e)
    // }
    // call api => axios
    // axios.get
    // async await
    // axios.get("http://172.16.18.45:8080/auth/users")
    // .then(res => {
    //   // call success
    //   console.log(res);
    // })
    // .catch(e=>{
    //   // call error
    //   console.log(e);
    // });

    // console.log("abc");
    getData();

    // Nếu dung async bên trong sẽ bị ảnh hưởng đến unmount
    // return ()=>{

    // }
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get(`${Constants.DOAMIN_API}/auth/users`);
      console.log(res.data.data);
      setData(res.data.data);
      console.log("abc");
    } catch (e) {
      console.log(e);
    }
  };

  // function* getData2(){
  //   try{
  //     const res = yield axios.get("http://172.16.18.45:8080/auth/users");
  //     console.log(res);
  //     console.log("abc");
  //   }catch(e){
  //     console.log(e)
  //   }
  // }

  const imageStyle = { width: "100px", height: "100px" };

  const renderUser = (value, index) => {
    return (
      <tr key={index}>
        <td>{value.id}</td>
        <td>{value.username}</td>
        <td>{value.name}</td>
        <td>{value.gender == 0 ? "Male" : "Female"}</td>
        <td>
          <img
            src={`${Constants.DOAMIN_API}/${value.avatar}`}
            style={imageStyle}
          />
        </td>
        <td>{value.role == 0 ? "Admin" : "User"}</td>
        <td>
          {/* Click vào mở trang /register-use-hook-form?id=? */}
          {/* id của user */}
          <Link to={`/register-use-hook-form?id=${value.id}`} type="button" class="btn btn-warning">
            Update
          </Link>

          <button onClick={deleteUser.bind(this, {id: value.id})} type="button" class="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  };

  // Tạo 1 nút chuyển quan trang đăng ký có bắt lỗi

  // Trong danh sách user
  // Ở mỗi dòng thêm 1 cột action
  // Trong này có 2 nút sửa và xoá

  // Tạo 1 hàm xoá user, hàm này có params nhận vào là id của user
  // Trong hàm này thực hiện gọi api delete user
  // Sau khi xoá user xong thì thực hiện load lại danh sách user
  // Kiểm tra xem user vừa xoá có bị mất ở danh sách chưa

  const deleteUser = async (props) => {
    try {
      const { id } = props;

      let formData = new FormData();
      formData.append("id", id);

      await axios.delete(
        `${Constants.DOAMIN_API}/auth/delete-user`,
        {
          data: formData
        }
      );

      // Load lại danh sách user

      getData();
    } catch (e) {
      console.log("Delete error: ", e);
    }
  };

  // deleteUser({id: 1})

  return (
    <div className="container">
      <Link to={"/register-use-hook-form"} className="btn btn-primary">
        Add User
      </Link>
      <div class="table-responsive">
        <table class="table table-primary">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Username</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Avatar</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{data.map(renderUser)}</tbody>
        </table>
      </div>

      {/* Table */}
      {/* {data.map()} */}
    </div>
  );
};

export default Users;
