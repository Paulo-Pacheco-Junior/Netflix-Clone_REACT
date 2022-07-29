import React, { useState, useEffect } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import './App.css';

const Page = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista TOTAL  
      let lists = await Tmdb.getHomeList();
      setMovieList(lists);
    }
    loadAll();
  }, []);

  return (
    <div className='page'>
      <div className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </div>
    </div>
  );
}

export default Page;