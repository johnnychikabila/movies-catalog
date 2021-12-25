import React, {useState, useEffect} from 'react';
import { Movies } from "../components/Movies";
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY; // шлях до ключа API в файлі - .env.local

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);


    const searchInputFunc = (find = 'matrix', type = 'all') => {
        setLoading(true)
       fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${find}${type !== 'all' ? `&type=${type}` : ''}`)
       .then(response => response.json())
       .then(data => {setMovies(data.Search); setLoading(false)})
       .catch((err) => {
        console.log(err);
        setLoading(false);
    })
   }
    
   useEffect(() => {
    console.log('mount');
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`) //запит для видачі стартової сторінки
    .then(response => response.json())
    .then(data => {setMovies(data.Search); setLoading(false)})
    .catch((err) => {
        console.log(err);
        setLoading(false);
    })
   },[]);

    return ( <main className='content container'>
        <Search searchInputFunc={searchInputFunc} />
        {
           loading ? <Preloader /> : <Movies movies={movies }/>
        }
    </main>
         
    )
}
export {Main}




// old version with class component
// class Main extends Component {
//     state = {
//        movies: [],
//        loading: true,
//     };

//     componentDidMount() {
//         console.log('mount');
//         fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`) //запит для видачі стартової сторінки
//         .then(response => response.json())
//         .then(data => this.setState({movies: data.Search, loading: false}))
//         .catch((err) => {
//             console.log(err);
//             this.setState({loading: false});
//         })
//     }

//     // searchInputFunc = (find = 'matrix', type) => {
//     //      // функція з параметром find котрий буде отримувати значення для запиту на сервер
//     //     if (type == 'movie') {fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${find}&type=movie`)
//     //     .then(response => response.json())
//     //     .then(data => this.setState({movies: data.Search, loading: false}))}
//     //     else if (type == 'series') {fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${find}&type=series`)
//     //     .then(response => response.json())
//     //     .then(data => this.setState({movies: data.Search, loading: false}))}
//     //     else {fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${find}`)
//     //     .then(response => response.json())
//     //     .then(data => this.setState({movies: data.Search, loading: false}))}
//     // }
    
//     //компактніший і лаконічніший варіант
//     searchInputFunc = (find = 'matrix', type = 'all') => {
//         this.setState({loading: true})
//        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${find}${type !== 'all' ? `&type=${type}` : ''}`)
//        .then(response => response.json())
//        .then(data => this.setState({movies: data.Search, loading: false}))
//        .catch((err) => {
//         console.log(err);
//         this.setState({loading: false});
//     })
//    }
    

// render() {
//     const {movies, loading} = this.state;
//     return ( <main className='content container'>
//         <Search searchInputFunc={this.searchInputFunc} />
//         {
//            loading ? <Preloader /> : <Movies movies={movies }/>
//         }
//     </main>
         
//     )
// }

// }
// export {Main}