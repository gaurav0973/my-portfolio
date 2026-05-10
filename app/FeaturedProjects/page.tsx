"use client";
import { FEATURED_PROJECTS } from "@/constants/constants";
import { Folder, ExternalLink } from "lucide-react";
import Link from "next/link";

function FeaturedProjects() {
  return (
    <section id="featured-projects" className="my-16">
      <h2 className="text-xl font-bold text-slate-800 dark:text-gray-200 mb-6 font-heading">
        Featured Projects
      </h2>
      <div className="space-y-4">
        {FEATURED_PROJECTS.map((project, index) => (
          <div
            key={index}
            className="block group p-2 -m-2 rounded-md hover:bg-slate-200/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
          >
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="flex items-start space-x-4">
                <div className="grow">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-green-800 rounded-lg flex items-center justify-center shrink-0">
                      <Folder className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="grow">
                      <h3 className="font-semibold text-slate-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex items-center">
                        {project.title}
                        <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-gray-400">
                        {project.description}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.technologies &&
                          project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1"
                            >
                              {tech}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <hr className="my-12 border-slate-200 dark:border-gray-800" />
    </section>
  );
}
export default FeaturedProjects;
