import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"

import { getProducts } from "../services/productApi"

function Shop() {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {

      const res = await getProducts()

      setProducts(res.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  if(products.length === 0){
  return(
    <div className="bg-black text-white min-h-screen flex justify-center items-center text-5xl">
      Loading...
    </div>
  )
}

  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      <section className="px-8 py-16">

        <h1 className="text-6xl font-bold mb-12">
          Shop Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.title}
              price={product.price}
            />

          ))}

        </div>

      </section>

      <Footer />

    </div>
  )
}

export default Shop