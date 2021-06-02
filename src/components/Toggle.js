import { motion } from "framer-motion";
import React, { useState } from "react";

//HOC
function Toggle({ children, title }) {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div
      layout
      style={{ cursor: "pointer" }}
      onClick={() => setToggle(!toggle)}
    >
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-Line"></div>
    </motion.div>
  );
}

export default Toggle;
