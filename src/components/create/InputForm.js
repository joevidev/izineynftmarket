
import {useState, useEffect} from 'react'

import { connect } from 'react-redux'
const InputForm = ({
    izineyNFT,
    account,
}) =>{

    useEffect(() => {
    }, [])
    
    const [formData, setFormData] = useState({
        input:''
    })

    const {input} = formData

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault()
        izineyNFT.methods.mint(input).send({ from: account });
    }

    return (
      <div className="bg-gray-50" style={{ marginBottom: "172px" }}>
        <div className="max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:py-1 lg:px-8 ">
          <h2 className="text-3xl  tracking-tight text-gray-900 sm:text-5xl mb-8 text-center">
            <span className="block mb-2 font-extrabold">
              🎨 Create New item
            </span>
            <span className="block text-indigo-600 text-base font-medium">
              * Required fields
            </span>
          </h2>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="">
            <label
              htmlFor="tokenurl"
              className="flex text-xl font-bold text-gray-700 mb-4"
            >
              Token URL Location *
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-3xl flex rounded-md shadow-sm">
                <input
                  type="url"
                  value={input}
                  onChange={(e) => onChange(e)}
                  name="input"
                  required  
                  placeholder="Enter URL"
                  className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="float-center mt-9 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit 👨🏻‍🎨
          </button>
        </form>
      </div>
    );
}

const mapStateToProps = (state) => ({
  izineyNFT: state.ethereum.izineyNFT,
  account: state.ethereum.account,
});

export default connect(mapStateToProps, {
}) (InputForm)