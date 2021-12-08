import React from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../store/actions';

const SearchBar = (props) => {

    const [movie, setMovie] = React.useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setMovie(
            e.target.value
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.searchMovie(movie);
        setMovie('');
    };

    return (
        <div className="form">
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <input 
                    type="text" 
                    name='input'
                    placeholder="escribe tu película"
                    value={movie}
                    onChange={(e)=>{handleChange(e)}}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    searchMovie: (title) => dispatch(searchMovies(title))
});

export default connect(null, mapDispatchToProps)(SearchBar);
