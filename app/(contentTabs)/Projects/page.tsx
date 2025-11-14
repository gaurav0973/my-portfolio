"use client";

import { PROJECTS_DATA } from "@/constants/constants";
import { useState } from "react";

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProjects = PROJECTS_DATA.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(PROJECTS_DATA.length / itemsPerPage);

  return (
    <div className="">
      <ul className="space-y-4">
        {currentProjects.map((project) => (
          <li
            key={project.title}
            className="border border-slate-200 dark:border-gray-700 p-4 rounded-lg"
          >
            <h2 className="text-lg font-semibold text-slate-800 dark:text-gray-200">
              {project.title}
            </h2>

            <p className="text-slate-600 dark:text-gray-400">
              {project.description}
            </p>

            <p className="text-sm mt-2 text-slate-700 dark:text-gray-300">
              <strong>Technologies:</strong> {project.technology.join(", ")}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 hover:underline mt-2 inline-block"
            >
              View Project
            </a>
          </li>
        ))}
      </ul>

      {/* PAGINATION */}
      <div className="flex justify-center items-center space-x-4 mt-6">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-slate-200 dark:bg-gray-700 text-slate-900 dark:text-gray-200 disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-slate-600 dark:text-gray-300">
          Page {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded bg-slate-200 dark:bg-gray-700 text-slate-900 dark:text-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Projects;
