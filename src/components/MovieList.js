import Movie from "./Movies";

const MovieList = ({movies}) => {

    const movieNodes = movies.map((movie) => {
        return(
            <Movie name={movie.name} url={movie.url} key={movie.id}>{movie.text}</Movie>
        )
    })
    return(
    <>
        {movieNodes}
    </>
    )
};

export default MovieList;