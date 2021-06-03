import React from 'react';
import AboutSection from '../components/AboutSection';
import FaqSection from '../components/FaqSection';
import ServiceSection from '../components/ServiceSection';
//
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
function AboutUs(props) {
    return (
        <motion.div variants={pageAnimation} exit='exit' initial='hidden' animate='show'>
            <AboutSection />
            <ServiceSection />
            <FaqSection />
        </motion.div>
    );
}

export default AboutUs;