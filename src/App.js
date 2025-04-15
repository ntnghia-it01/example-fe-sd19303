import logo from "./logo.svg";
import "./App.css";
import {
  Routes,
  Route
} from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import MainUser from "./pages/MainUser";
import MainAdmin from "./pages/MainAdmin";
import Register from "./pages/Register";
import RegisterUseHookForm from "./pages/RegisterUseHookForm";
import Users from "./pages/Users";

function App() {

  // Tạo 2 Components Header cho user và admin 
  // Tạo 2 Components Footer cho user và admin

  // Tạo 2 Pages Home và Login (Có 1 dòng text tên trang)
  // Tạo 2 Pages Dashboard và Product List
  

  return (
    <Routes>
      {/* Khi người dùng mở vào trang */}
      {/* localhost:3000 => Home */}
      {/* localhost:3000/login => Login */}
      <Route path="/" element={<MainUser/>}>
        <Route index element={<Home/>}/>
        {/* path của route con không có dấu / phía trước */}
        {/* <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="register-use-hook-form" element={<RegisterUseHookForm/>}/>
         */}
      </Route>

      {/* Tạo 1 trang login: username, password. URL => /login */}

      {/* Tạo 1 trang dang sách user. Có đường đẫn là /admin/users */}
      {/* Hiển thị danh sách tài khoản từ api */}

      {/* Tạo 1 trang user info. Có đường dẫn là /user/info */}
      {/* Hiển thị thông tin của user vừa đăng nhập */}
      {/* Username, name, gender, avatar, role */}

      <Route path="/login" element={<Login/>}/>

      <Route path="/admin" element={<MainAdmin/>}>
        <Route path="users" element={<Users/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="products" element={<Products/>}/>
      </Route>
    </Routes>
  );

  // Tạo 1 trang đăng ký với url /register
  // Có thông các input sau
  // username, password, name, class (dropdown)
}

export default App;
