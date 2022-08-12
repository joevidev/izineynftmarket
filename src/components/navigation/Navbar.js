import { Fragment, useState, useEffect } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import {Link, NavLink} from 'react-router-dom'
import Web3Modal from "web3modal";
import { ethers } from "ethers";

import { setLoadWeb3, loadBlockchainData } from '../../redux/actions/ethereum'
import { connect } from 'react-redux'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const providerOptions = {
  binancechainwallet: {
    package: true,
  },
};

const web3Modal = new Web3Modal({
  network: "goerli",
  cacheProvider: true,
  providerOptions,
});


function NavBar({ setLoadWeb3, loadBlockchainData, account, izineyNFT }) {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [customerAddress, setCustomerAddress] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      const instance = await web3Modal.connect();
      if (instance) {
        const provider = new ethers.providers.Web3Provider(instance);
        const accounts = await provider.listAccounts();
        const account = accounts[0];
        setIsWalletConnected(true);
        setCustomerAddress(account);
        console.log("Account Connected: ", account);
        loadBlockchainData();
      } else {
        console.log("No checkIfWalletIsConnected");
        loadBlockchainData();
      }
    } catch (error) {
      console.log(error);
      console.log("No Metamask detected");
    }
  };


  useEffect(() => {
    checkIfWalletIsConnected();
    setLoadWeb3();
    loadBlockchainData();
  }, []);

  return (
    <>
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "bg-white shadow-2xl lg:static lg:overflow-y-visible"
          )
        }
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-40">
              <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
                  <div className="flex items-center">
                    <Link to="/">
                      <img
                        className="block h-8 w-auto"
                        src="logo512.png"
                        alt="Workflow"
                      />
                    </Link>
                  </div>
                </div>
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                    <div className="w-full">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                          <SearchIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Search"
                          type="search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                  <NavLink
                    to="/"
                    className="text-gray-500 hover:text-gray-700 text-lg font-medium"
                    activeClassName="text-gray-700 text-lg font-medium"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/explore"
                    className="text-gray-500 hover:text-gray-700 text-lg font-medium mx-9"
                    activeClassName="text-gray-700 text-lg font-medium"
                  >
                    🔎 Explore
                  </NavLink>

                  <NavLink
                    to="/create"
                    className="text-gray-500 hover:text-gray-700 text-lg font-medium"
                    activeClassName="text-gray-700 text-lg font-medium"
                  >
                    🔥 Create
                  </NavLink>

                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="mx-8 text-gray-500 hover:text-gray-700 text-lg font-medium">
                        📢 Resources
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className=" origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className=" py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/docs"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-900",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                📚 Docs
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="https://izineydao.vercel.app/"
                                className="block px-4 py-2 text-sm"
                              >
                                👨🏻‍⚖️ Governance
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="https://izineystaking.vercel.app/"
                                className="block px-4 py-2 text-sm"
                              >
                                💸 Staking
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="https://izineybank.vercel.app/"
                                className="block px-4 py-2 text-sm"
                              >
                                🏦 Bank
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <div className="flex items-center md:ml-12">
                    <span className="sm:ml-3">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={checkIfWalletIsConnected}
                      >
                        {isWalletConnected
                          ? "🔒 Wallet: " +
                            customerAddress.slice(0, -38) +
                            "..." +
                            customerAddress.slice(-8, -4)
                          : "Connect Wallet 🔑"}
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="rounded-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="py-6 px-5">
                  <div className="flex flex-col items-center">
                    <NavLink
                      to="/"
                      className="text-gray-500 hover:text-gray-700 text-lg font-medium mx-9 mb-4"
                      activeClassName="text-gray-700 text-lg font-medium"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/explore"
                      className="text-gray-500 hover:text-gray-700 text-lg font-medium mx-9 mb-4"
                      activeClassName="text-gray-700 text-lg font-medium"
                    >
                      🔎 Explore
                    </NavLink>

                    <NavLink
                      to="/create"
                      className="text-gray-500 hover:text-gray-700 text-lg font-medium mb-4"
                      activeClassName="text-gray-700 text-lg font-medium"
                    >
                      🔥 Create
                    </NavLink>
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="mx-8 text-gray-500 hover:text-gray-700 text-lg font-medium">
                          📢 Resources
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className=" origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className=" py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/docs"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-900",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  📚 Docs
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="https://izineydao.vercel.app/"
                                  className="block px-4 py-2 text-sm"
                                >
                                  👨🏻‍⚖️ Governance
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="https://izineystaking.vercel.app/"
                                  className="block px-4 py-2 text-sm"
                                >
                                  💸 Staking
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="https://izineybank.vercel.app/"
                                  className="block px-4 py-2 text-sm"
                                >
                                  🏦 Bank
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    <div className="flex items-center md:ml-12 mt-5">
                      <span className="sm:ml-3">
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={checkIfWalletIsConnected}
                        >
                          {isWalletConnected
                            ? "🔒 Wallet: " +
                              customerAddress.slice(0, -38) +
                              "..." +
                              customerAddress.slice(-8, -4)
                            : "Connect Wallet 🔑"}
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
}

const mapStateToProps = (state) => ({
  account: state.ethereum.account,
  izineyNFT: state.ethereum.izineyNFT,
});

export default connect(mapStateToProps, {
  setLoadWeb3,
  loadBlockchainData
}) (NavBar)