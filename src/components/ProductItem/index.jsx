// Components == Func
// Cách thông thường đối với JS => được gọi là Func
// const ProductItem = (name, price, img, discount)=>{
// Nếu nó là components
// Truyền chung 1 biến duy nhất được gọi props (properties)
// props => object
const ProductItem = (props)=>{
  const {name, image, price, discount} = props;
  const styles = {
    image: {
      width: '100%',
      height: '300px'
    }
  }

  return (
    <div className="card">
      <img
        style={styles.image}
        className="card-img-top"
        // lưu trong src
        // src={require("../../assets/images/prod-1.webp")}
        // lưu ở public
        src={image}
        alt="Card image cap"
      />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{price}</p>
        <p className="card-text">{discount || '-'}</p>
      </div>
    </div>
  )
}

export default ProductItem;