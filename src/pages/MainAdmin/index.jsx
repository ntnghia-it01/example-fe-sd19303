import HeaderAdmin from "../../components/HeaderAdmin";
import FooterAdmin from "../../components/FooterAdmin";
import {Outlet} from 'react-router';

const MainAdmin = ()=>{

  return (
    <>
      <HeaderAdmin/>
      <Outlet/>
      <FooterAdmin/>
    </>
  )
}

export default MainAdmin