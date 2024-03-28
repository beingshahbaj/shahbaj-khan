import React from "react";
import { motion } from "framer-motion";
import CForm from "../Antd/Form";

const Contact = () => {
  return (
    <motion.div
      className="contact"
      initial={{ x: "100%" }}
      animate={{ x: "0" }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <CForm />
      </div>
    </motion.div>
  );
};

export default Contact;
