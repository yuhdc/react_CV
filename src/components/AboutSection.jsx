import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Hide, Image } from "../style"
//framer motion
import { motion } from 'framer-motion';
//animation
import { titleAni, fade, photoAni } from "../animation"
//wave
import Wave from "./Wave";
function AboutSection(props) {
  return (
    <About>
      <Description>
        <motion.div
          className="title">
          <Hide>
            <motion.h2
              variants={titleAni}
              animate='show'
              initial='hidden'
            >Greetings.</motion.h2>
          </Hide>
          <Hide>
            <motion.h2
              variants={titleAni}>They called me</motion.h2>
          </Hide>
          <Hide>
            <motion.h2
              variants={titleAni}>
              Huy <span>an</span> Dev
            </motion.h2>
          </Hide>
          <motion.p variants={fade}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iste quam! Voluptate non repudiandae sequi esse error. Numquam, expedita incidunt?</motion.p>
          <motion.button variants={fade}>contact me</motion.button>
        </motion.div>
      </Description>
      <Image>
        <motion.img variants={photoAni} src={home1} alt="" />
      </Image>
      <Wave />
    </About>
  );
}



export default AboutSection;
