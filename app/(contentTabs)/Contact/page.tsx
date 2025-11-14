"use client";
import { EMAIL } from "@/constants/constants";
import Link from "next/link";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 py-12">
      <div className="text-center space-y-4 text-slate-700 dark:text-gray-300 leading-relaxed">
        {"I am always open to collaborating or talking about ideas."} <br />
        You can book a{" "}
        <Link
          href="https://cal.com/maurya-js/30min?overlayCalendar=true"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 dark:text-green-400 underline hover:opacity-80"
        >
          meeting
        </Link>{" "}
        or drop me a DM on{" "}
        <Link
          href="https://x.com/gauravkmaurya09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 dark:text-green-400 underline hover:opacity-80"
        >
          Twitter
        </Link>{" "}
        or mail me at{" "}
        <a
          href={`mailto:${EMAIL}`}
          className="text-green-600 dark:text-green-400 underline hover:opacity-80"
        >
          {EMAIL}
        </a>.
      </div>
    </div>
  );
}

export default Contact;
