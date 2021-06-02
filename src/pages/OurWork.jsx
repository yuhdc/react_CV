import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import athlete from "../img/athlete-small.png";
import racer from "../img/theracer-small.png";
import goodtime from "../img/goodtimes-small.png";
//
import { motion } from 'framer-motion';
import { SliderContainer, pageAnimation, fade, photoAni, LineAni, Slider } from '../animation';


function OurWork(props) {
    return (
        <Work
            variants={pageAnimation}
            exit='exit'
            initial='hidden'
            animate='show'
            style={{ background: '#fff' }}>
            <motion.div variants={SliderContainer}>
                <Frame1 variants={Slider}></Frame1>
                <Frame2 variants={Slider}></Frame2>
                <Frame3 variants={Slider}></Frame3>
                <Frame4 variants={Slider}></Frame4>
            </motion.div>
            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={LineAni} className="line"></motion.div>
                <Link to='/work/the-athlete'>
                    <Hide>
                        <motion.img variants={photoAni} src={athlete} alt="" />
                    </Hide>
                </Link>
            </Movie>
            <Movie>
                <motion.h2 variants={fade}>The Racer</motion.h2>
                <motion.div variants={LineAni} className="line"></motion.div>
                <Link to='/work/the-racer'>
                    <Hide>
                        <motion.img variants={photoAni} src={racer} alt="" />
                    </Hide>
                </Link>
            </Movie>
            <Movie>
                <motion.h2 variants={fade}>Goodtime</motion.h2>
                <motion.div variants={LineAni} className="line"></motion.div>
                <Link to='/work/good-times'>
                    <Hide>
                        <motion.img variants={photoAni} src={goodtime} alt="" />
                    </Hide>
                </Link>
            </Movie>
        </Work>
    );
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
`;

const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        background: #23d997;
        height: 0.5rem;
        margin-bottom:3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Frame1 = styled(motion.div)`
position: fixed;
left:0;
top:10%;
width:100%;
height: 100vh;
background: #fffebf;
z-index:3;
`;

const Frame2 = styled(Frame1)`
background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
background: #8effa0;
`;

export default OurWork;