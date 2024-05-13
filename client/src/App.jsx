import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home"
import ModeButton from "./components/mode button/ModeButton"
import NavigationBar from "./components/navigationbar/NavigationBar"
import ScrollToTop from "./components/scroll to top/ScrollToTop"
import Skills from "./components/skills/Skills"
import Work from "./components/work/Work"

function App() {
  return (
    <div className=" font-inter">
    <NavigationBar />
    <div className=" bg-[#edf2f8] dark:bg-slate-950 flex flex-col gap-40 max-md:gap-20">
      <Home />  
      <Work /> 
      <Skills />
      <Contact />
      <ScrollToTop />
      <ModeButton />
    </div>
    <Footer />
    </div>
  )
}

export default App
