import React from 'react';
import styled from 'styled-components'
import { About } from '../style'
//
import Toggle from '../components/Toggle'
//
import { AnimateSharedLayout } from 'framer-motion';


function FaqSection(props) {
    return (
        <Faq>
            <h2>Any question <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title='How do I start'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, similique.</p>

                    </div>
                </Toggle>
                <Toggle title='Are you mad ?'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, similique.</p>
                    </div>
                </Toggle>
                <Toggle title='What the fuck was that?'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, similique.</p>
                    </div>

                </Toggle>
                <Toggle title='None of your bussines'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, similique.</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq >
    );
}

const Faq = styled(About)`
    display:block;
    span{
        display:block;
    }
    h2{
        padding-bottom:2rem;
        font-weight: lighter;
    }
    .faq-Line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .answer{
        padding:2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;


export default FaqSection;