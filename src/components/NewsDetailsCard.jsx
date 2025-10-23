import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router'

function NewsDetailsCard({ news }) {
  return (
    <div className="space-y-5">
      <img
        className="w-full h-[350px] object-cover"
        src={news.image_url}
        alt=""
      />
      <h1>{news.title}</h1>
      <p>{news.details}</p>
      <Link className='btn btn-secondary' to={`/category/${news.category_id}`}>Back To Category</Link>
    </div>
  );
}

export default NewsDetailsCard