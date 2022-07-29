const API_KEY = '60dd76c8eb8bc769449db6ebda930e4c';
const API_BASE = 'https://api.themoviedb.org/3';
/*
- Originais da netflix > `/discover/tv?&with_networks=213&language=pt-BR&api_key=${API_KEY}`
- Recomendados para Você > (trending) `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
- Em alta (top rated) > `/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`
- Ação
- Comédia
- Terror
- Romance
- Documentários
*/

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

let Tmdb = {
  getHomeList: async () => {
    return [
      {
        slug:'originals',
        title:'Originais da Netflix',
        items: await basicFetch(`/discover/tv?&with_networks=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug:'trendings',
        title:'Recomendados para Você',
        items:await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug:'toprated',
        title:'Em Alta',
        items:await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
      },
      {
        slug:'action',
        title:'Ação',
        items:await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
      },
      {
        slug:'comedy',
        title:'Comédia',
        items:await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
      },
      {
        slug:'horror',
        title:'Terror',
        items:await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
      },
      {
        slug:'romance',
        title:'Romance',
        items:await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
      },
      {
        slug:'documentary',
        title:'Documentários',
        items:await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
      }
    ];
  }
}

export default Tmdb;