import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index.tsx";
import Projects from "./pages/Projects.tsx";
import Labs from "./pages/LearningJourney.tsx";
import Blog from "./pages/Legacy.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop";
import ClickSpark from "@/components/ClickSpark";
import LetterGlitch from "@/components/LetterGlitch";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <>
        <ScrollToTop />

        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/learning-journey" element={<Labs />} />
          <Route path="/legacy" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ClickSpark
          sparkColor="#ffffff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
          easing="ease-out"
        >
          <div className="min-h-screen flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-black">
              <LetterGlitch
                className="w-full h-full opacity-15"
                glitchSpeed={180}
                smooth={true}
                centerVignette={false}
                outerVignette={false}
              />
            </div>

            <Navbar />

            <main className="flex-1">
              <AnimatedRoutes />
            </main>

            <Footer />
          </div>
        </ClickSpark>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
