import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      className="servis"
      initial={{ x: "100%" }}
      li
      animate={{ x: "0" }}
      transition={{ duration: 0.4, ease: "backInOut" }}
    >
      Services Component
    </motion.div>
  );
};

export default Services;
