import React from "react";
import { motion } from "framer-motion";
import TechnicalInterests from "../subcomponents/About/TechnicalInterests";
import me from "../assets/moi.jpg";

const facts = [
  { label: "Based in", value: "Montreal, QC" },
  { label: "Studying", value: "BEng Software Eng." },
  { label: "Exchange", value: "HKU, 2026" },
];

const About: React.FC = () => {
  return (
    <section className="w-full px-5 py-4 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto grid w-full max-w-6xl items-start gap-10 md:grid-cols-[minmax(13rem,0.75fr)_minmax(0,1.4fr)] md:gap-16 lg:gap-20"
      >
        {/* Portrait with offset outline frame */}
        <figure className="group relative mx-auto w-44 sm:w-56 md:mx-0 md:mt-2 md:w-full md:max-w-72">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 border border-indigo-400/70 transition-transform duration-500 ease-out group-hover:translate-x-1.5 group-hover:translate-y-1.5 dark:border-violet-300/35"
            />
            <div className="relative overflow-hidden bg-violet-100 dark:bg-[#160c23]">
              <img
                src={me}
                alt="Sami Erafii"
                loading="lazy"
                decoding="async"
                className="aspect-3/4 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-indigo-950/25 via-transparent to-transparent dark:from-[#0b0714]/50"
              />
            </div>
          </div>
          <figcaption className="mt-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500 dark:text-violet-200/50">
            <span className="h-px w-8 bg-indigo-500 dark:bg-violet-400" />
            That's Me
          </figcaption>
        </figure>

        <div className="text-left">
          <h2 className="mb-6 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent dark:from-indigo-400 dark:to-purple-400 sm:text-4xl">
            About Me
          </h2>

          <p className="max-w-2xl border-l-2 border-indigo-500/70 pl-5 text-base leading-7 text-slate-600 dark:border-violet-400/60 dark:text-slate-300 sm:text-lg sm:leading-8">
            Hello! I&apos;m{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              Sami Erafii
            </span>
            , a software engineering student who enjoys building software and
            working on projects that make a difference. I&apos;m excited about
            learning, and I&apos;m always looking to improve my skills and
            knowledge.
          </p>

          <dl className="mt-8 grid grid-cols-3 border-y border-indigo-300/60 dark:border-violet-300/15">
            {facts.map(({ label, value }) => (
              <div
                key={label}
                className="border-l border-indigo-300/60 py-3 pl-3 first:border-l-0 first:pl-0 dark:border-violet-300/15 sm:py-4 sm:pl-5"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500 dark:text-violet-200/50 sm:text-[11px]">
                  {label}
                </dt>
                <dd className="mt-1 text-xs font-semibold text-slate-800 dark:text-slate-100 sm:text-sm">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <TechnicalInterests />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
