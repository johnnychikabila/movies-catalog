import React, {Component} from 'react';
import { Movies } from "../components/Movies";
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
    state = {
       movies: [],
       loading: true,
    };

    componentDidMount() {
        console.log('mount');
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`) //запит для видачі стартової сторінки
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
    }

    // searchInputFunc = (find = 'matrix', type) => {
    //      // функція з параметром find котрий буде отримувати значення для запиту на сервер
    //     if (type == 'movie') {fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${find}&type=movie`)
    //     .then(response => response.json())
    //     .then(data => this.setState({movies: data.Search, loading: false}))}
    //     else if (type == 'series') {fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${find}&type=series`)
    //     .then(response => response.json())
    //     .then(data => this.setState({movies: data.Search, loading: false}))}
    //     else {fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${find}`)
    //     .then(response => response.json())
    //     .then(data => this.setState({movies: data.Search, loading: false}))}
    // }
    
    //компактніший і лаконічніший варіант
    searchInputFunc = (find = 'matrix', type = 'all') => {
        this.setState({loading: true})
       fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${find}${type !== 'all' ? `&type=${type}` : ''}`)
       .then(response => response.json())
       .then(data => this.setState({movies: data.Search, loading: false}))
   }
    

render() {
    const {movies, loading} = this.state;
    return ( <main classNameName='container content'>
        <Search searchInputFunc={this.searchInputFunc} />
        {
           loading ? <Preloader /> : <Movies movies={movies }/>
        }
    </main>
         
    )
}

}

// function Main() {
// return ( <main classNameName='container content'>
//     Hello from movies App
//     <Movies />
// </main>
     
// )
// }

export {Main}