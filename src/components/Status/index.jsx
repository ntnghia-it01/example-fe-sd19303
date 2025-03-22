import "./style.css";

const Status = (props) =>{
  const {type} = props;
  let title = "";
  let styles = {
    container:{
      borderColor: 'green'
    },
    dot: {
      backgroundColor: 'green'
    },
    title: {
      color: 'green'
    }
  }

  switch(type){
    case 0:
      title = "Đang theo học"
      styles = {
        container:{
          borderColor: 'green'
        },
        dot: {
          backgroundColor: 'green'
        },
        title: {
          color: 'green'
        }
      }
      break;
    case 1:
      title = "Đã thôi học"
      styles = {
        container:{
          borderColor: 'red'
        },
        dot: {
          backgroundColor: 'red'
        },
        title: {
          color: 'red'
        }
      }
      break;
    case 2:
      title = "Đã tốt nghiệp"
      break;
    case 3:
      title = "Đã chuyển lớp"
      break;
    case 4:
      title = "Đã chuyển trường"
      break;
    default:
      title = "Đang theo học"
      break;
  }

  // type == 0  => TH1
  // ...
  // type == 4 => TH5

  return (
    <div className="status-container" style={styles.container}>
      <div className="dot" style={styles.dot}/>
      <p className="title" style={styles.title}>{title}</p>
    </div>
  );
}

export default Status