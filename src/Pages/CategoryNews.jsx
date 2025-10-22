
import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import NewsCard from '../components/NewsCard';

function CategoryNews() {
    const [categoryNews , setCatagoryNews]  = useState([])
    const {id} = useParams()
    const data = useLoaderData();
     
    useEffect(()=>{
        if(id =='0'){
            setCatagoryNews(data)
            return;
        }else if(id == '1'){
            const filterNews = data.filter(
              (news) => news.others.is_today_pick == true
            );
            setCatagoryNews(filterNews);
            return;
        }else{
             const filterNews = data.filter((news) => news.category_id == id);
             setCatagoryNews(filterNews);
        }
       
    }, [data , id])
  return (
    <>
      <h1 className="font-bold">
        Total{" "}
        <span className="text-secondary mb-5"> {categoryNews.length}</span>{" "}
        Found
      </h1>
      <div className='grid grid-cols-1 gap-5'>
        {
          categoryNews.map(news => <NewsCard key={news.id} news={news}/>)
        }
      </div>
    </>
  );
}

export default CategoryNews