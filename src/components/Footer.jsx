import React from "react";
import { Link } from "react-router-dom";
import github from "../assets/10.png";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <>
      <div className="flex justify-between px-4 py-6 bg-gray-900 text-white">
        <div>
          <img src={logo} className="h-16" alt="Logo" />
          <div className="mt-3 flex justify-around">
            <a
              href="https://github.com/rajat2502/StandNote"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-6 m-auto mb-1 w-auto flex-shrink-1"
                alt="Star"
                src={github}
              />
              Star us on GitHub
            </a>
            <a href="mailto:standnote@gmail.com">
              <img
                className="h-6 m-auto mb-1 w-auto flex-shrink-1"
                alt="Email"
                src="https://img.icons8.com/fluent/48/000000/gmail.png"
              />
              Email us
            </a>
          </div>
        </div>
        <div className="flex flex-col mr-8">
          <Link to="/" className="text-lg hover:underline">
            Home
          </Link>
          <Link to="/register" className="text-lg hover:underline">
            Register
          </Link>
          <Link to="/login" className="text-lg hover:underline">
            Login
          </Link>
          <Link to="/privacy-policy" className="text-lg hover:underline">
            Privacy Policy
          </Link>
          <Link className="text-lg hover:underline" to="/integrations">
            Integrations
          </Link>
        </div>
      </div>
      <div className="text-center bg-gray-800 p-2">
        <p className="text-gray-200 text-center">
          MIT License © Copyright 2020 StandNote.
        </p>
      </div>
    </>
  );
}

export default Footer;
