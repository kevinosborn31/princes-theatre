import '../styles/style.css';




const MovieListing = ({id, image, title, cinemaPrice, filmPrice}) => {


    return (
        <div className="movie-listing-wrapper">

            <li className="movie-listing-item">
                    <div className="movie-image-container">
                        <img src={image} alt={title} />
                    </div>
                    <div className="movie-info">
                        <div className="movie-price-wrapper">
                            <p className="movie-price" style={ cinemaPrice < filmPrice ? {fontWeight: 'bold'} : {}}>CinemaWorld: {cinemaPrice}</p>
                            <p className="movie-price" style={ filmPrice < cinemaPrice ? {fontWeight: 'bold'} : {}}>FilmWorld: {filmPrice}</p>
                        </div>
                        <p className="movie-name">{title}</p>
                    </div>
            </li>
        </div>
    )
}






export default MovieListing;