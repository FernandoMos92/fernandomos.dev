"use client";
import About from "@/components/About/About";
import Blog from "@/components/Blog/Blog";
import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import Welcome from "@/components/Welcome/Welcome";
import { globalStore } from "@/store/globalStore.store";

export default function Home() {
  const {positionMenu} = globalStore();

  const managementPages = (positionMenu: number | string) => {
    switch (positionMenu) {
      case 0:
        return <Welcome />
      case 1:
        return <Blog />
      case 2:
        return <About />
      case 3:
        return <Experience />
      case 4:
        return <Contact />
      default:
        break;
    }
  }
  return (
    <main style={{
      display: 'flex',
      width: '100%',
      padding: '1rem',
    }}>
      {
        managementPages(positionMenu)
      }
    </main>
  );
}
