import { connect, useDispatch } from 'react-redux';
import Movie from './Movie';
import { useEffect } from 'react';
import { getMovies } from '../store/actions';
import SearchBar from './SearchBar';

function Home(props) {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch])
    console.log(props.movies)

    return (
        
        <div className="container">
            <SearchBar />
            {props.movies ? props.movies.map(e => (
                <Movie 
                image={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                title={e.title}
                release={e.release_date}
                rating={e.vote_average}
                popularity={e.popularity}
                id={e.id}
                key={e.id}
                />)
            ) : <div className="notMovie">No hay movies</div>}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    };
};


export default connect(mapStateToProps)(Home);
