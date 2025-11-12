import { IMAGE_PLACEHOLDER, SOCIAL_LINKS } from "@/constants/constants";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const IconMap : { [key: string]: React.ComponentType } = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
  mail: Mail,
};
function Header() {
  return (
    <header className="mb-16">
      <div className="flex justify-between items-start">
        <div>
          <Image 
            src={IMAGE_PLACEHOLDER} 
            alt="Gaurav Maurya" 
            className="rounded-full w-20 h-20 mb-4"
            width={80}
            height={80}
          />
          <h1 className="text-3xl font-bold text-slate-800 dark:text-gray-200 font-heading">Gaurav Maurya</h1>
          <p className="mt-4 max-w-md text-slate-600 dark:text-gray-400 leading-relaxed">
            I am a full stack web2/web3 developer with experience. I enjoy building things from scratch-from idea to production. I care a lot about writing clean, fast code and keeping things simple.
          </p>
          <div className="flex items-center space-x-4 mt-6">
            {SOCIAL_LINKS.map(link => {
              const Icon = IconMap[link.icon]; 
              return (
                <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="text-slate-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-gray-200 transition-colors">
                  <Icon />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header