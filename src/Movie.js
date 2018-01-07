import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

function Movie({title,poster,generes, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>    
            <div className="Movie__Column">
                <h1>{title}</h1>                
                <div className="Movie__Genres">
                    {generes.map( (genere,index) => <MovieGenere genere={genere} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    /> 
                </div>
            </div>            
        </div>        
    )
} 

function MoviePoster({poster,alt}){
    return(
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

function MovieGenere({genere}){
    return (
        <span className="Movie__Genre">{genere}</span>
    )
}

Movie.propTypes = {
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    generes:PropTypes.array.isRequired,
    synopsis:PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired
}

MovieGenere.propTypes = {
    genere: PropTypes.string.isRequired
}


export default Movie