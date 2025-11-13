import ContentTabs from "./ContentTabs/page"
import Experience from "./Experience/page"
import FeaturedProjects from "./FeaturedProjects/page"
import Footer from "./Footer/page"
import Header from "./Header/page"
import { Toaster } from "react-hot-toast"

function Home() {
  return (
    <div className="min-h-screen font-body flex flex-col items-center">
       <Toaster
        position="top-right"
        
      />
      <main className="w-full px-6 sm:px-12 md:px-24 max-w-4xl py-16">
        <Header />
        <Experience />
        <FeaturedProjects />
        <ContentTabs />
      </main>
      <Footer />
    </div>
  )
}
export default Home