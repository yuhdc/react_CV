import React from 'react';
//
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

function ContactUs(props) {
    return (
        <motion.div
            variants={pageAnimation}
            exit='exit'
            initial='hidden'
            animate='show'>
            contact us
        </motion.div>
    );
}

export default ContactUs;