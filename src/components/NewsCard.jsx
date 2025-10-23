import React from "react";
import { FaEye, FaStar, FaRegBookmark } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { Link } from "react-router";

const NewCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    published_date,
    id,
  } = news;

  const formattedDate = new Date(news.author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
    <div className="bg-base-100 shadow-md rounded-2xl overflow-hidden mb-6 border border-base-200">
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <div>
            <h3 className="font-semibold text-base">{author.name}</h3>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <FiShare2 className="text-xl cursor-pointer text-gray-500 hover:text-primary" />
          <FaRegBookmark />
        </div>
      </div>
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          {details.length > 150 ? (
            <>
              {details.slice(0, 150)}...{" "}
              <Link
                to={`/news-details/${id}`}
                className="text-primary font-medium cursor-pointer"
              >
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      <div className="flex justify-between items-center p-4 border-t border-base-200">
        <div className="flex items-center gap-1 text-warning">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "text-warning" : "text-gray-300"}
            />
          ))}
          <span className="ml-1 text-gray-600 font-semibold">
            {rating.number.toFixed(1)}
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-600">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
