

const Movie = ({ title, image, popularity, rating, release, id }) => {
    return (
        <div className="card">
            <img src={image} alt="movie poster" />
            <h2>{title}</h2>
            <h3>release: {release}</h3>
            <h3>Popularity: {popularity}</h3>
            <h3>rating: {rating}</h3>

        </div>
    );
};

export default Movie;
