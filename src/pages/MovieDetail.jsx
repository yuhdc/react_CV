import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MovieState } from '../movieState';
//
import styled from 'styled-components';
//
import { pageAnimation } from '../animation';
import { motion } from 'framer-motion';

function MovieDetail(props) {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
        //run when movies or url update
    }, [movies, url]);


    return (
        <>
            {movie &&
                (
                    <Detail
                        variants={pageAnimation}
                        exit='exit'
                        initial='hidden'
                        animate='show'>
                        <Headline>
                            <h2>{movie.title}</h2>
                            <img src={movie.mainImg} alt="" />
                        </Headline>
                        <Awards>
                            {movie.awards.map((award) => {
                                return <Award
                                    title={award.title}
                                    description={award.description}
                                    key={award.title}
                                />
                            })}
                        </Awards>
                        <ImageDisplay>
                            <img src={movie.secondaryImg} alt="" />
                        </ImageDisplay>
                    </Detail>
                )
            }
        </>
    );
}
//styled components

const Detail = styled(motion.div)`
    color: white;
`;
const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%,-10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
    @media (max-width:960){
        h2{
            font-size: 3rem;
        }
    }
`;

const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
    @media (max-width:1500px){
        display:block;
        margin:2rem;
    }
`;

const AwardStyle = styled.div`
    padding: 5rem;
    h3{
        font-size: 1.5rem;
    }
    .line{
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 2rem 0rem;
    }
`;

const ImageDisplay = styled.div`
    min-height: 50vh;
    img{
        height: 100vh;
        object-fit: cover;
        width: 100%;
    }
`;

//award
const Award = ({ title, description }) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}


export default MovieDetail;