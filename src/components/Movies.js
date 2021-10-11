
const Movie = ({name, url}) => {
    return(
    <>
    <ul>
        <li><a href={url}>{name}</a><br></br></li>
    </ul>
    </>
    )
}


export default Movie;