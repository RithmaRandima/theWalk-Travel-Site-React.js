import React from "react";
import gallery_img1 from "../../Assets/gallery1.jpg";
import gallery_img2 from "../../Assets/background-1.jpg";
import gallery_img3 from "../../Assets/background-2.jpg";
import gallery_img4 from "../../Assets/activity-3.jpg";
import gallery_img5 from "../../Assets/event3.jpg";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <div
      id="gallery"
      className="gallery-event-bg-container max-w-[100%] m-auto w-full p-4 pb-16"
    >
      <div className="px-2 pb-5 text-center text-white">
        <p className=" text-[24px] my-1">Special Places to Visit</p>
        <h1 className="text-3xl md:text-4xl">
          <span className="font-bold">Top </span>
          Tour Gallery
        </h1>
      </div>
      <div className="max-w-[1140px] mx-auto grid sm:grid-cols-5 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}
          className="sm:col-span-3 col-span-2 row-span-2"
        >
          <img
            className="w-full h-full object-cover"
            src={gallery_img4}
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
        >
          <img
            className="w-full h-full object-cover"
            src={gallery_img2}
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.5,
          }}
        >
          <img
            className="w-full h-full object-cover"
            src={gallery_img1}
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}
        >
          <img
            className="w-full h-full object-cover"
            src={gallery_img3}
            alt=""
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
        >
          <img
            className="w-full h-full object-cover"
            src={gallery_img5}
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
