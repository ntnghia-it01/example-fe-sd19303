import HeaderAdmin from "../../components/HeaderAdmin";
import FooterAdmin from "../../components/FooterAdmin";
import {Outlet, useNavigate} from 'react-router';
import {useCookies} from 'react-cookie'
import { useEffect } from "react";
import Constants from '../../Constants'

const MainAdmin = ()=>{
  const [cookies] = useCookies(Constants.COOKIE_TOKEN, Constants.COOKIE_ROLE);
  const navigate = useNavigate();

  // Check kiểm tra có tồn lại token và role == 0
  // Thì có đi tiếp
  // Không thì trở về login

  useEffect(()=>{
    const token = cookies[Constants.COOKIE_TOKEN]; // = cookies.token
    const role = cookies[Constants.COOKIE_ROLE];

    if(!token || role != 0){
      navigate("/login")
    }
  }, [])

  return (
    <>
      <HeaderAdmin/>
      <Outlet/>
      <FooterAdmin/>
    </>
  )
}

export default MainAdmin