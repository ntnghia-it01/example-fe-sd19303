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
        <Route path="login" element={<Login/>}/>
      </Route>

      <Route path="/admin" element={<MainAdmin/>}>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="products" element={<Products/>}/>
      </Route>
    </Routes>
  );
}

export default App;
