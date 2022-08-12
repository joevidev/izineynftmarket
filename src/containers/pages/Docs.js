import Layout from "../../hocs/Layout";

const Documents = () => {
  return (
    <Layout>
      <div className="bg-gray-50 mt-20" style={{ marginBottom: "304px" }}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:grid lg:items-center lg:justify-center lg:justify-items-center lg:content-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-8 text-center">
            <span className="block mb-2">👷🏻‍♂️ Building 🚧</span>
            <span className="block text-indigo-600">
              💸 Try our other protocols!
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow m-2">
              <a
                href="https://izineybank.vercel.app/"
                className="inline-flex  items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                🗳 Iziney Bank
              </a>
            </div>
            <div className=" inline-flex rounded-md shadow m-2">
              <a
                href="https://izineydao.vercel.app/"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                👨🏻‍⚖️ Iziney DAO
              </a>
            </div>
            <div className="inline-flex rounded-md shadow  m-2">
              <a
                href="https://izineynftmarket.vercel.app/"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                🖼 Iziney NFT Marketplace
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Documents;
