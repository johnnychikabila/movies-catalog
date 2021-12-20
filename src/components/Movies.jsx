import { Movie } from "./Movie";


function Movies(props) {
    const {movies = []} = props;
    
    return (<div className='movies'>
        {movies.length ? (
            movies.map(movie => (<Movie key={movie.imdbID} Title={movie.Title} Poster={movie.Poster} Type={movie.Type} Year={movie.Year} /> //{...movie}
        )) 
        ) : (
        <h4>Nothing found</h4>
        )}
        </div>
    )
}

export {Movies}