import React from 'react'
import errorImage from "../../assets/App-Error.png";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-5">
        <div>
            <img src={errorImage} alt="" />
        </div>
      <h1 className="text-6xl font-extrabold text-pink-500 mb-4">😿 404</h1>
      <h2 className="text-3xl font-bold mb-2">Oops! Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Looks like the page you’re looking for took a nap 💤
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}

export default ErrorPage