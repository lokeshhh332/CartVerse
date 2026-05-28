import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Navbar from "../components/Navbar"

import { getSingleProduct } from "../services/productApi"

function ProductDetails() {

  const { id } = useParams()

  const [product, setProduct] = useState(null)

  const fetchSingleProduct = async () => {
    try {

      const res = await getSingleProduct(id)

      setProduct(res.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchSingleProduct()
  }, [])

  if (!product) {
    return (
      <div className="bg-black text-white min-h-screen flex justify-center items-center text-4xl">
        Loading...
      </div>
    )
  }

  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      <section className="px-8 py-16 grid lg:grid-cols-2 gap-16">

        <div className="bg-[#111] rounded-[30px] p-10 flex justify-center">

          <img
            src={product.image}
            alt=""
            className="h-[500px] object-contain"
          />

        </div>

        <div>

          <p className="uppercase text-[#b68d40] tracking-[5px]">
            {product.category}
          </p>

          <h1 className="text-5xl font-bold mt-5 leading-tight">
            {product.title}
          </h1>

          <p className="text-gray-400 text-xl mt-8 leading-10">
            {product.description}
          </p>

          <h2 className="text-5xl font-bold mt-10">
            ${product.price}
          </h2>

          <div className="flex gap-5 mt-10">

            <button className="bg-white text-black px-10 py-5 rounded-2xl font-semibold hover:scale-105 duration-300">
              Add To Cart
            </button>

            <button className="border border-[#222] px-10 py-5 rounded-2xl hover:bg-white/10 duration-300">
              Wishlist
            </button>

          </div>

        </div>

      </section>

    </div>
  )
}

export default ProductDetails