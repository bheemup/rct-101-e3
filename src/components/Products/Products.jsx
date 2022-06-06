import React, { useEffect,useState } from "react";

const Products = () => {


  const [data, setData]=useState([]);
  useEffect(()=>{
    axios.get('http:localhost3000/products')
    .then((res)=>{
      console.log(res);
      setData(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  })
  return <div>
    <ol>
      {data.map((item)=>(
      <li>item.name</li>
      ))}
    </ol>
  </div>;
};

export default Products;
