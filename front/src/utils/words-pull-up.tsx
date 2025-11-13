import { motion, useInView } from "framer-motion";
import * as React from "react";

export function WordsPullUp({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const splittedText = text.split(" ");

  const pullupVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex justify-center">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? "animate" : ""}
          custom={i}
          className={
            "text-xl text-center md:text-2xl font-semibold text-white tracking-tighter xl:text-3xl 3xl:text-4xl md:leading-16 pr-2 " +
            className
          }
        >
          {current === "" ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}
