import React from 'react';
//
import { motion } from 'framer-motion';
import { pageAnimation, titleAni } from '../animation';
//
import styled from 'styled-components';

function ContactUs(props) {
    return (
        <ContactStyle
            variants={pageAnimation}
            exit='exit'
            initial='hidden'
            animate='show'
            style={{ background: "#fff" }}
        >
            <Title>
                <Hide>
                    <motion.h2 variants={titleAni}>Get in touch</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAni}>
                        <Circle />
                        <h2>Send whatever</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAni}>
                        <Circle />
                        <h2>Send donate plz</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAni}>
                        <Circle />
                        <h2>Or get lost</h2>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    );
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color:#353535;
    min-height:90vh;
    @media (max-width:1500px){
        padding:2rem;
        font-szie:1rem;
    }
`;

const Title = styled.div`
    margin-bottom:4rem;
    color:black;
    @media (max-width:1500px){
        margin-top: 5rem;
    }
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
    @media(max-width:600px){
        width: 2rem;
        height: 2rem;
     }
`;

const Social = styled(motion.div)`
    display:flex;
    align-items:center;
    h2
    {
     margin:2rem;
     @media(max-width:600px){
        font-size: 2rem;
     }
    }
`;

const Hide = styled.div`overflow:hidden`;

export default ContactUs;