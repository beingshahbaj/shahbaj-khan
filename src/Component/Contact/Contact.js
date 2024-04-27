import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";
const Contact = () => {
  return (
    <motion.div
      className="contact"
      initial={{ x: "100%" }}
      animate={{ x: "0" }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.3 }}
    >
      <div>Content</div>
    </motion.div>
  );
};

export default Contact;
