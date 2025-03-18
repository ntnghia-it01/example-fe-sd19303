const StudentItem = (props)=>{
  const {code, name, isPass} = props;
  return(
    <tr class="">
      <td>{code}</td>
      <td>{name}</td>
      <td className={isPass ? "text-success" : "text-danger"}>{isPass ? "Pass" : "Fail"}</td>
    </tr>
  )
};

export default StudentItem;