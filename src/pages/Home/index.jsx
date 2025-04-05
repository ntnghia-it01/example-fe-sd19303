import {
  Link
} from 'react-router'
import {
  useState,
  useEffect,
  // Gợi ý xem thêm
  useRef,
  useReducer,
  useCallback,
  useMemo,
  useContext,
} from 'react'

const Home = ()=>{
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  // Hàm này sẽ được kích hoạt
  // Khi bất kỳ state nào thay đổi
  // Hoặc components được render lại
  // Khi components khởi tạo
  // useEffect này sẽ được kích hoạt trước
  // ít nhất 2 lần
  // Lần 1: Khi components bắt đầu khởi tạo
  // Lần 2: khi components render thành công
  useEffect(()=>{
    console.log(count);
    // Bị chạy 1 vòng lập vô tận
    // Tuyệt đối không được setState bên trong
    // setCount(count + 1);
  });

  // Trong cả quá trình vòng đời components
  // chỉ được kích hoạt 2 lần
  // Lần 1: Khi components bắt đầu khởi tạo
  // Lần 2: khi components render thành công
  // Gọi API lấy giá trị khởi tạo 
  // Cài đặt giá trị mặc định cho state
  useEffect(()=>{
    console.log(count);

    return ()=>{
      // Sự kiện khi components bị loại bỏ
    }
  }, []);

  // useEffect này sẽ được kích hoạt trước
  // ít nhất 2 lần
  // Lần 1: Khi components bắt đầu khởi tạo
  // Lần 2: khi components render thành công
  // Và sẽ được kích hoạt khi biến count thay đổi
  // giá trị
  useEffect(()=>{
    console.log(count);
  }, [count]);

  // useEffect này sẽ được kích hoạt trước
  // ít nhất 2 lần
  // Lần 1: Khi components bắt đầu khởi tạo
  // Lần 2: khi components render thành công
  // Và sẽ được kích hoạt khi biến count hoặc message thay đổi
  // giá trị
  useEffect(()=>{
    // console.log(count);
  }, [count, message]);

  return (
    <div className="w-100 p-5 text-center">
      <h1>Home</h1>
      <Link to={"/login"} className='btn btn-primary'>Login</Link>
    </div>
  )
}

export default Home