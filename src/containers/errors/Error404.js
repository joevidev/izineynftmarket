import Layout from "../../hocs/Layout";

export default function Error404() {
  return (
    <Layout>
      <div className="bg-gray-50 mt-20" style={{ marginBottom: "288px" }}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:grid lg:items-center lg:justify-center lg:justify-items-center lg:content-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-8 text-center">
            <span className="block mb-2">⚠ Error 404 😵</span>
            <span className="block text-indigo-600">Not Found</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow m-2">
              <a
                href="/"
                className="inline-flex  items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                🏠 Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
