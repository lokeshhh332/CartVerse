function TrendingProducts() {

  const products = [
    {
      id:1,
      name:"Premium Watch",
      price:299,
      image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },

    {
      id:2,
      name:"Luxury Shoes",
      price:199,
      image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },

    {
      id:3,
      name:"Modern Perfume",
      price:149,
      image:"https://images.unsplash.com/photo-1594035910387-fea47794261f"
    },
  ]

  return (
    <section className="px-6">

      {/* Heading */}

      <div className="flex items-center justify-between mb-10">

        <div>

          <p className="uppercase tracking-[4px] text-gray-500 text-xs">
            Featured Products
          </p>

          <h1 className="text-5xl font-extrabold mt-3">
            Trending Products
          </h1>

        </div>

        <button className="border border-[#222] px-6 py-3 rounded-xl hover:bg-white/10 duration-300">

          View All

        </button>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-[#111] border border-[#222] rounded-[30px] overflow-hidden hover:-translate-y-2 duration-300"
          >

            {/* Image */}

            <div className="bg-white h-[280px] overflow-hidden">

              <img
                src={product.image}
                alt=""
                className="w-full h-full object-cover hover:scale-110 duration-500"
              />

            </div>

            {/* Content */}

            <div className="p-6">

              <h1 className="text-2xl font-bold">
                {product.name}
              </h1>

              <p className="text-gray-400 mt-3">
                Premium Quality Product
              </p>

              <div className="flex items-center justify-between mt-6">

                <h2 className="text-3xl font-bold">
                  ${product.price}
                </h2>

                <button className="bg-white text-black px-5 py-3 rounded-xl font-semibold hover:scale-105 duration-300">

                  Add

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default TrendingProducts