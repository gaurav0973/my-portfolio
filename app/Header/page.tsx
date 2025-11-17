"use client";
import { BIO, IMAGE_PLACEHOLDER, NAME, RESUME_URL, SOCIAL_LINKS } from "@/constants/constants";
import { Github, Twitter, Linkedin, Mail, CodeXml, Braces, Rss, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const IconMap: { [key: string]: React.ComponentType } = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
  mail: Mail,
  leetcode: CodeXml,
  gfg: Braces,
  medium: Rss,
};

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex flex-col items-center">
      <div className="flex justify-between items-start">
        <div className="flex flex-col items-center text-center">
          
          {/* Profile Image */}
          <Image
            src={IMAGE_PLACEHOLDER}
            alt="Gaurav Maurya"
            className="rounded-full w-20 h-20 mb-4"
            width={80}
            height={80}
          />

          {/* Theme Toggle */}
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>
            <Button
              variant="outline"
              asChild
            >
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </div>

          {/* Name */}
          <h1 className="text-3xl font-bold text-slate-800 dark:text-gray-200 font-heading">
            {NAME}
          </h1>

          {/* Bio */}
          <p className="mt-4 max-w-md text-slate-600 dark:text-gray-400 leading-relaxed">
            {BIO}
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4 mt-6">
            {SOCIAL_LINKS.map((link) => {
              const Icon = IconMap[link.icon];
              return (
                <Link
                  key={link.name}
                  href={link.url}

                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  title={link.name} 
                  className="text-slate-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-gray-200 transition-colors"
                >
                  <Icon />
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
