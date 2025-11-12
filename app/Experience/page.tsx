import { EXPERIENCE_DATA } from "@/constants/constants";
import { Briefcase } from "lucide-react";

function Experience() {
  return (
    <section id="experience" className="my-16">
      <h2 className="text-xl font-bold text-slate-800 dark:text-gray-200 mb-6 font-heading">Experience</h2>
      <div className="space-y-6">
        {EXPERIENCE_DATA.map((job, index) => (
          <div key={index} className="flex items-start space-x-4">
            {/* <div className="mt-1.5 flex-shrink-0">
               <span className="inline-block h-3 w-3 rounded-full bg-green-500"></span>
            </div> */}
            <div className="flex-grow">
               <div className="flex items-center space-x-4">
                 <div className="w-10 h-10 bg-slate-100 dark:bg-gray-800 border border-slate-200 dark:border-gray-700 rounded-md flex items-center justify-center">
                     <Briefcase className="w-5 h-5 text-slate-500 dark:text-gray-400" />
                 </div>
                 <div>
                    <h3 className="font-semibold text-slate-700 dark:text-gray-300">
                      {job.role}
                      {job.date === 'PRESENT' && (
                        <span className="ml-2 text-xs font-mono px-2 py-0.5 bg-slate-200 dark:bg-gray-700 text-green-700 dark:text-green-400 rounded">PRESENT</span>
                      )}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-gray-400">{job.company}</p>
                 </div>
               </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="my-12 border-slate-200 dark:border-gray-800" />
    </section>
  )
}
export default Experience;
