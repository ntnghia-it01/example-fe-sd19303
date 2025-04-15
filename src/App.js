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

      {/* Danh sách các trang không cần đăng nhập */}
      <Route path="/">
        <Route index element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Route>

      {/* Danh sách những trang cần vai trò user để sử dụng */}
      {/* Tạo 1 trang MainUser */}
      {/* Để quản lý tất cả route của user */}
      {/* Và thực hiện kiểm tra trạng thái đăng nhập */}
      <Route path="/user" element={<MainUser/>}>
        <Route path="info" element={<h1>User info</h1>}/>
        <Route path="cart" element={<h1>User cart</h1>}/>
        <Route path="order" element={<h1>User order</h1>}/>
        <Route path="change-password" element={<h1>User change password</h1>}/>
      </Route>

      {/* Danh sách những trang cần vai trò Admin để sử dụng */}
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
