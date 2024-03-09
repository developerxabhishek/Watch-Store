import "./Card.css";
const Card=()=>{
    return(
        <>
            <div class="card">
  <figure>
    <img src="https://artoftimeindia.com/cdn/shop/products/RDDBEX0619_400x.jpg?v=1601055648" alt="op"/>
  </figure>
  <section class="details">
    <div class="min-details">
      <h1>Remera <span>azul</span></h1>
      <h1 class="price">$45.99</h1>
    </div>
    <span className="cardwishlist">
        <i class="fa-regular fa-heart"></i>
    </span>
    <button className="cardbutton">Buy Now </button>
    <button className="cardbutton">Add to Cart</button>
  </section>
</div>
        </>
    );
};
export default Card;