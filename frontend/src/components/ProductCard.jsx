import { Link } from "react-router-dom"

function ProductCard({ id, image, name, price }) {

  return (

    <Link to={`/product/${id}`}>

      <div className="bg-[#111] rounded-[30px] overflow-hidden border border-[#222] p-5 hover:-translate-y-2 hover:border-[#b68d40] duration-300">

        {/* Image */}

        <div className="bg-white rounded-[25px] overflow-hidden h-[350px] flex justify-center items-center p-10">

          <img
            src={image}
            alt=""
            className="h-[250px] object-contain hover:scale-110 duration-500"
          />

        </div>

        {/* Content */}

        <div className="mt-6">

          <h2 className="text-2xl font-semibold line-clamp-1">
            {name}
          </h2>

          <p className="text-gray-400 mt-3">
            Premium Quality Product
          </p>

          <div className="flex justify-between items-center mt-6">

            <h3 className="text-3xl font-bold">
              ${price}
            </h3>

            <button className="bg-white text-black px-5 py-3 rounded-xl font-semibold hover:scale-105 duration-300">
              Add
            </button>

          </div>

        </div>

      </div>

    </Link>
  )
}

export default ProductCard