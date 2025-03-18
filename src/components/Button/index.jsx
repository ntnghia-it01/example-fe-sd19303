// Xây dựng 1 components Button
// Có props lần lượt là
// - title (Nội dung hiển thị bên trong button)
// - type
//     + "default" hoặc không nhập type => giao diện button primary
//     + "disable" => giao diện button disable (màu xám)
//     + "outline" => giao diện button background trong suốt, border màu xanh


// đặt 1 biến className bên trong components
// dùng switch case để set giá trị cho biến className
// Giá trị sẽ tương ứng với tổ hợp class trong bootstrap để có được UI yêu cầu
// type == default || null => className = "btn btn-primary"

const Button = (props) =>{
  const {title, type} = props;

  let className = ""

  switch(type){
    case "default":
      className = "btn btn-primary";
      break;
    case "disable":
      className = "btn btn-secondary";
      break;
    case "outline":
      className = "btn btn-outline-primary";
      break;
    default:
      className = "btn btn-primary";
      break; 
  }

  return(
    <button className={className}>{title}</button>
  )
}

export default Button;