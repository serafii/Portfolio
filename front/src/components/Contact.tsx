import React, { useEffect, useRef, useState } from "react";
import gmail from "../assets/gmail.svg";
import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Check, Copy } from "lucide-react";

const email = "sami.erafii@gmail.com";

const montrealTime = new Intl.DateTimeFormat("en-CA", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "America/Toronto",
  timeZoneName: "short",
});

// Re-renders once a minute; no animation frames involved.
const useMontrealTime = () => {
  const [time, setTime] = useState(() => montrealTime.format(new Date()));

  useEffect(() => {
    const id = window.setInterval(
      () => setTime(montrealTime.format(new Date())),
      30_000,
    );
    return () => window.clearInterval(id);
  }, []);

  return time;
};

const Contact: React.FC = () => {
  const year = new Date().getFullYear();
  const time = useMontrealTime();
  const [copied, setCopied] = useState(false);
  const copyTimeout = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(copyTimeout.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.clearTimeout(copyTimeout.current);
      copyTimeout.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const linkedin =
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg";
  const github =
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
  const discord: React.ReactNode = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="bi bi-discord w-16 h-16"
      viewBox="0 0 16 16"
    >
      <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
    </svg>
  );

  const contacts = [
    {
      name: "LinkedIn",
      handle: "in/sami-erafii",
      url: "https://www.linkedin.com/in/sami-erafii-bb618220a/",
      icon: linkedin,
      iconColor: "text-blue-500",
    },
    {
      name: "GitHub",
      handle: "@serafii",
      url: "https://github.com/serafii",
      icon: github,
      iconColor: "text-gray-700 dark:invert dark:brightness-200",
    },
    {
      name: "Discord",
      handle: "serafii",
      url: "https://discord.com/users/serafii",
      icon: discord,
      iconColor: "text-indigo-500 dark:text-indigo-400",
    },
    {
      name: "Email",
      handle: email,
      url: `mailto:${email}`,
      icon: gmail,
      iconColor: "text-rose-500",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const rowVariants = {
    hidden: {
      opacity: 0,
      y: 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="w-full">
      <div className="mx-auto mb-24 w-full max-w-6xl px-5 py-16 text-left text-slate-700 dark:text-white z-10 sm:mb-32 sm:px-10 lg:px-0 2xl:mb-48">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-indigo-600 dark:text-violet-300">
              Contact
            </span>
            <span className="h-px flex-1 bg-linear-to-r from-indigo-400/70 to-transparent dark:from-violet-300/30" />
          </div>
          <h2 className="mb-3 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent dark:from-indigo-400 dark:to-purple-400 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="max-w-2xl text-base font-medium text-slate-600 dark:text-slate-300 sm:text-lg">
            Feel free to reach out through any of these platforms.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
          {/* Email call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-8"
          >
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500 dark:text-violet-200/50">
                Fastest way to reach me
              </p>
              <a
                href={`mailto:${email}`}
                className="group relative inline-block break-all text-2xl font-bold tracking-tight text-slate-900 transition-colors duration-300 hover:text-indigo-600 dark:text-white dark:hover:text-violet-300 sm:text-4xl"
              >
                {email}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-linear-to-r from-indigo-500 to-violet-500 transition-transform duration-500 ease-out group-hover:scale-x-100 dark:from-violet-400 dark:to-fuchsia-400"
                />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="group inline-flex items-center gap-2 bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-indigo-700 dark:bg-violet-500 dark:hover:bg-violet-400"
              >
                Send an email
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex cursor-pointer items-center gap-2 border border-indigo-400/70 px-5 py-3 text-sm font-semibold text-indigo-700 transition-colors duration-300 hover:border-indigo-600 hover:bg-indigo-600/5 dark:border-violet-300/35 dark:text-violet-200 dark:hover:border-violet-300 dark:hover:bg-violet-300/5"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                <span aria-live="polite">
                  {copied ? "Copied!" : "Copy address"}
                </span>
              </button>
            </div>
          </motion.div>

          {/* Platform links */}
          <motion.ul
            className="border-t border-indigo-300/60 dark:border-violet-300/15"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {contacts.map((contact, index) => (
              <motion.li key={contact.name} variants={rowVariants}>
                <a
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-4 border-b border-indigo-300/60 py-4 dark:border-violet-300/15 sm:gap-5 sm:py-5"
                >
                  <span className="font-mono text-xs tabular-nums text-indigo-500/70 dark:text-violet-300/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`${contact.iconColor} flex h-6 w-6 shrink-0 items-center justify-center grayscale-60 transition-[filter,transform] duration-300 group-hover:scale-110 group-hover:grayscale-0 [&>svg]:h-full [&>svg]:w-full`}
                  >
                    {typeof contact.icon === "string" ? (
                      <img
                        src={contact.icon}
                        alt=""
                        loading="lazy"
                        className="h-full w-full"
                      />
                    ) : (
                      contact.icon
                    )}
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="text-base font-semibold text-slate-800 transition-colors duration-300 group-hover:text-indigo-600 dark:text-slate-100 dark:group-hover:text-violet-300 sm:text-lg">
                      {contact.name}
                    </span>
                    <span className="truncate font-mono text-xs text-slate-500 dark:text-slate-400">
                      {contact.handle}
                    </span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-400 transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-600 dark:text-violet-300/50 dark:group-hover:text-violet-300" />
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-linear-to-r from-indigo-500 to-violet-500 transition-transform duration-500 ease-out group-hover:scale-x-100 dark:from-violet-400 dark:to-fuchsia-400"
                  />
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      <footer className="relative isolate mt-14 w-full overflow-hidden bg-[#3d4264] text-slate-100 dark:bg-[#180c26]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-10 -z-10 h-10 bg-linear-to-b from-transparent via-[#3d4264]/55 to-[#3d4264] dark:via-[#180c26]/55 dark:to-[#180c26]"
        />
        <div className="mx-auto w-full max-w-6xl px-5 pt-12 sm:px-10 lg:px-0 md:pt-16">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-violet-200/60">
                Have a question?
              </p>
              <a
                href={`mailto:${email}`}
                className="group inline-flex items-center gap-2 text-lg font-semibold text-white transition-colors duration-300 hover:text-violet-200"
              >
                {email}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <p className="mt-4 flex items-center gap-2 font-mono text-xs text-slate-300/80 dark:text-violet-100/60">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Montreal, QC &middot; {time}
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 py-6 md:mt-12 text-xs text-slate-300/80 dark:text-violet-100/60 sm:flex-row sm:items-center sm:text-sm">
            <p>
              &copy; {year} &middot; Designed &amp; Developed by Sami Erafii
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex cursor-pointer items-center gap-2 font-medium text-slate-200 transition-colors duration-300 hover:text-white"
            >
              Back to top
              <span className="flex h-8 w-8 items-center justify-center border border-white/20 transition-[border-color,transform] duration-300 group-hover:-translate-y-1 group-hover:border-violet-300">
                <ArrowUp className="h-4 w-4" />
              </span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
