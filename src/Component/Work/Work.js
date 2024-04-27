import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Work.css";

const Work = () => {
  const [selectedId, setSelectedId] = useState(null);

  // Sample 'items' array for demonstration purposes
  const items = [
    { id: 1, subtitle: "Subtitle 1", title: "Title 1" },
    { id: 2, subtitle: "Subtitle 2", title: "Title 2" },
    // Add more items as needed
  ];

  return (
    <motion.div
      className="work-list"
      initial={{ x: "100%" }}
      animate={{ x: "0" }}
      exit={{ scale: 0.5 }}
      transition={{ duration: 0.3 }}
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            hello this is shahbaj khan
            <motion.h5>
              {items.find((item) => item.id === selectedId)?.subtitle}
            </motion.h5>
            <motion.h2>
              {items.find((item) => item.id === selectedId)?.title}
            </motion.h2>
            <motion.button onClick={() => setSelectedId(null)}>
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Work;
