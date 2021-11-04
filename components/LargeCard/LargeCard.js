import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

function LargeCard({ img, title, description, buttonText }) {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        x: 0,
        transition: { type: "easing", duration: 0.5 },
      });
    }
  }, [inView]);

  return (
    <motion.div initial={{ opacity: 0, x: 50 }} animate={animation}>
      <div ref={ref} className="relative h-96 min-w-[300px] cursor-pointer ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={animation}
        className="absolute top-32 left-12"
      >
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 ">
          {buttonText}
        </button>
      </motion.div>
    </motion.div>
  );
}

export default LargeCard;
