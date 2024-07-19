import { motion } from "framer-motion";
import React from "react";

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div>project</div>
    </motion.section>
  );
};

export default Work;
