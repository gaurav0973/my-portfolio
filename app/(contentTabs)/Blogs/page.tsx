"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Blog = {
  guid: string;
  title: string;
  link: string;
};

function Blogs() {
  const [fetchedInfo, setFetchedInfo] = useState<Blog[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gauravkmaurya09"
      );
      const data = await response.json();
      // console.log(data.items);
      setFetchedInfo(data.items); 
    };

    fetchBlogs();
  }, []);

  if (!fetchedInfo.length) {
    return <div className="loading">Loading Blogs ....</div>;
  }

  // pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = fetchedInfo.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(fetchedInfo.length / blogsPerPage);

  return (
    <div className="">
      {/* Blog Cards */}
      {currentBlogs.map((blog) => (
        <div
          key={blog.guid}
          className="mb-6 p-4 border border-slate-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow duration-200"
        >
          <Link href={blog.link} target="_blank" rel="noopener noreferrer">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              {blog.title}
            </h3>
          </Link>
        </div>
      ))}

      <div className="flex justify-center items-center space-x-4 mt-6">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-slate-200 dark:bg-gray-700 text-slate-800 dark:text-gray-200 disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-slate-600 dark:text-gray-300">
          Page {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded bg-slate-200 dark:bg-gray-700 text-slate-800 dark:text-gray-200 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Blogs;
