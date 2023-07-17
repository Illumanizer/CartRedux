import React from 'react'
import ProductCard from './ProductCard'
import "../styles/Home.scss"

const Home = () => {
  const productList = [
  {
    name:"adasg",
    price:6000,
    imgSrc: "asghh",
    id:"kjajhghuagds",
  },
{
  name:"agsdha",
  price:1200,
  imgSrc:"aghahgh",
  id:"auhugduh",
}];

  const addToCartHandler=(options)=>{
    console.log(options);
  };

  return (
    <div className='home'>
      {
        productList.map((i) => (
          <ProductCard
            key={i.id}
            name={i.name}
            imgSrc={i.imgSrc}
            price={i.price}
            id={i.id}
            handler={addToCartHandler}
          />
        ))
      }
    </div>
  )
}

export default Home