import React from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../Icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  wide?: boolean;
}

const linkClass =
  "inline-flex items-center gap-1.5 border border-indigo-400/70 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-indigo-700 transition-colors duration-300 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-violet-300/35 dark:text-violet-200 dark:hover:border-violet-400 dark:hover:bg-violet-500";

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  wide = false,
}: ProjectCardProps) => {
  return (
    <article
      className={`group relative flex h-full flex-col border-b border-indigo-300/60 pb-8 text-left dark:border-violet-300/15 ${
        wide ? "md:grid md:grid-cols-2 md:items-center md:gap-10" : ""
      }`}
    >
      {/* Image with offset outline frame */}
      <div className={`relative mb-7 mr-2.5 ${wide ? "md:mb-0" : ""}`}>
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-2.5 translate-y-2.5 border border-indigo-400/70 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:translate-y-1 dark:border-violet-300/35"
        />
        <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-[#160c23] sm:h-56">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-indigo-950/25 via-transparent to-transparent dark:from-[#0b0714]/50"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-violet-300">
          {title}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
          {description}
        </p>

        <ul className="mb-6 flex flex-wrap gap-x-2 gap-y-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="border border-indigo-300/60 bg-indigo-500/5 px-2 py-0.5 font-mono text-[11px] text-indigo-700 dark:border-violet-300/15 dark:bg-violet-400/5 dark:text-violet-200/80"
            >
              {tag}
            </li>
          ))}
        </ul>

        {(liveUrl || githubUrl) && (
          <div className="mt-auto flex flex-wrap gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
                aria-label={`${title} live demo`}
              >
                Live
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} [&>svg]:h-3.5 [&>svg]:w-3.5`}
                aria-label={`${title} GitHub`}
              >
                {GithubIcon}
                Code
              </a>
            )}
          </div>
        )}
      </div>

      <span
        aria-hidden="true"
        className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-linear-to-r from-indigo-500 to-violet-500 transition-transform duration-700 ease-out group-hover:scale-x-100 dark:from-violet-400 dark:to-fuchsia-400"
      />
    </article>
  );
};

export default ProjectCard;
