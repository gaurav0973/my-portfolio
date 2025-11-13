"use client"
import { FEATURED_PROJECTS } from "@/constants/constants"
import { useState } from "react";
import { Folder, ExternalLink } from "lucide-react";
import Link from "next/link";

function FeaturedProjects() {
    const [previewVideoUrl, setPreviewVideoUrl] = useState(FEATURED_PROJECTS[0]?.videoPreview || '');
  return (
    <section id="featured-projects" className="my-16">
      <h2 className="text-xl font-bold text-slate-800 dark:text-gray-200 mb-6 font-heading">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="space-y-4">
          {FEATURED_PROJECTS.map((project, index) => (
            <div
              key={index}
              onMouseEnter={() => setPreviewVideoUrl(project.videoPreview)}
              className="block group p-2 -m-2 rounded-md hover:bg-slate-200/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-start space-x-4">
                  <div className="mt-1.5 shrink-0">
                    <span
                      className={`inline-block h-3 w-3 rounded-full transition-colors ${
                        previewVideoUrl === project.videoPreview
                          ? 'bg-green-500'
                          : 'bg-slate-400 dark:bg-gray-600'
                      }`}
                    ></span>
                  </div>
                  <div className="grow">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-slate-100 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-md flex items-center justify-center">
                        <Folder className="w-5 h-5 text-slate-500 dark:text-gray-400" />
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
                          {project.technologies && project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1">
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
        <div className="md:sticky md:top-24">
          {previewVideoUrl ? (
            <video
              key={previewVideoUrl}
              src={previewVideoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto rounded-lg border border-slate-200 dark:border-gray-800 aspect-video object-cover"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="w-full rounded-lg border border-slate-200 dark:border-gray-800 aspect-video bg-slate-100 dark:bg-gray-900 flex items-center justify-center">
              <p className="text-slate-500 dark:text-gray-500">
                Hover over a project to see a preview.
              </p>
            </div>
          )}
        </div>
      </div>
      <hr className="my-12 border-slate-200 dark:border-gray-800" />
    </section>
  )
}
export default FeaturedProjects