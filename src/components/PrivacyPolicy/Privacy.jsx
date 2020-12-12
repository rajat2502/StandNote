import React from "react";
import { Link } from "react-router-dom";

function Privacy() {
  return (
    <>
      <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 bg-gray-50">
        <div className="flex items-center justify-between mb-4 md:mb-0">
          <h1 className="leading-none text-2xl text-grey-darkest">
            <Link
              className="no-underline text-grey-darkest hover:text-black"
              to="/"
            >
        <img
          className='mx-auto'
          src={require('assets/logo.png').default}
          alt='StandNote'
          style={{width: 240}}
        />
            </Link>
          </h1>

          <Link className="text-black hover:text-orange md:hidden" to="/">
            <i className="fa fa-2x fa-bars"></i>
          </Link>
        </div>
        <nav>
          <ul className="list-reset md:flex md:items-center">
            <li className="md:ml-4">
              <Link
                className="block no-underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0 font-bold"
                to="/register"
              >
                Register
              </Link>
            </li>
            <li className="md:ml-4">
              <Link
                className="border-t block no-underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0 font-bold"
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li className="md:ml-4">
              <Link
                class="border-t block no-underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0 font-bold"
                to="/"
              >
                Integrations
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="w-full h-screen bg-gray-200">
      <h1 className='mb-2 pt-4 text-center text-4xl text-gray-700 font-bold'>Privacy Policy</h1>
      </div>
    </>
  );
}

export default Privacy;
