import React from "react";
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <motion.div
      className="contact"
      initial={{ x: "100%" }}
      animate={{ x: "0" }}
      transition={{ duration: 0.3 }}
    >
      Contact Component
    </motion.div>
  );
};

export default Contact;
