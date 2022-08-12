const Banner=()=>{
    return (
      <div className="bg-white mb-4">
        <div className="grid md:grid-cols-2">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center mt-7">
              <p className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-6xl">
                💎 Discover, collect and sell
              </p>
              <span className="items-center justify-center block text-indigo-600 xl:inline text-3xl tracking-tight font-extrabold sm:text-4xl md:text-6xl">
                the spectacular NFTs 💰
              </span>
              <p className="max-w-xl mt-5 mx-auto text-2xl text-gray-500 items-center justify-center">
                🚀 Easily, quickly and cost-effectively
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="/explore"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Discover 🔎
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/create"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Create 🖼
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/625438f14b4e60daaaba25fa/Picture1/960x0.png?format=png&width=960"
              alt=""
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    );
}

export default Banner