"use client"
import { useState } from "react";
import toast from "react-hot-toast";
import Projects from "../(contentTabs)/Projects/page";
import ProofOfWork from "../(contentTabs)/ProofOfWork/page";
import Blogs from "../(contentTabs)/Blogs/page";
import { Contact } from "lucide-react";
import { TABS } from "@/constants/constants";

function ContentTabs() {
    const [activeTab, setActiveTab] = useState('Projects');

  const handleTabClick = (tab: string) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      toast(`${tab}`, {
        icon: '🍃',
        duration: 500,
      });
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Projects':
        return <Projects />;
      case 'POW':
        return <ProofOfWork />;
      case 'Blogs':
        return <Blogs />;
      case 'Contact':
        return <Contact />;
      default:
        return null;
    }
  };
  return (
    <div>
      <div className="flex items-center space-x-2 sm:space-x-4 mb-8 -mt-2">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-3 py-2 text-sm font-medium transition-all duration-200 outline-none rounded-md ${
              activeTab === tab 
                ? 'text-slate-800 dark:text-gray-200 bg-slate-200 dark:bg-gray-800' 
                : 'text-slate-500 dark:text-gray-500 hover:text-slate-700 dark:hover:text-gray-300 hover:bg-slate-200/50 dark:hover:bg-gray-800/50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  )
}
export default ContentTabs