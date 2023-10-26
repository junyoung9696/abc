import { useState, useRef, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import Authentication from "@/components/authentication";
import ScrollNavBar from "@/components/ScrollNavbar";
import dynamic from "next/dynamic";
import { useGLTF } from "@react-three/drei";

const Section1 = dynamic(
  () => import("@/components/main/Sections").then((module) => module.Section1),
  { ssr: false }
);
const Section2 = dynamic(
  () => import("@/components/main/Sections").then((module) => module.Section2),
  { ssr: false }
);
const Section3 = dynamic(
  () => import("@/components/main/Sections").then((module) => module.Section3),
  { ssr: false }
);
const Section4 = dynamic(
  () => import("@/components/main/Sections").then((module) => module.Section4),
  { ssr: false }
);

const Paprika = dynamic(() => import("@/components/3Dmodel/Paprika.jsx"), {
  ssr: false,
});

function Home() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleClick = (ref) => {
    const sectionElement = ref.current;
    if (sectionElement) {
      const offsetTop =
        sectionElement.getBoundingClientRect().top + window.pageYOffset;
      scroll.scrollTo(offsetTop, {
        duration: 800,
        smooth: "easeInOutQuad",
      });
    }
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = 1.3 - scrollY / 350;
  useGLTF.preload("/paprika-transformed.glb");

  return (
    <>
      <Authentication setIsLoggedIn={setIsLoggedIn} />

      <div className="main-container">
        <div className="hero">
          <div className="hero-background" />
          <h1 className="hero-title">ETRI 재난안전</h1>
        </div>
        <ScrollNavBar
          handleClick={handleClick}
          isLoggedIn={isLoggedIn}
          section1Ref={section1Ref}
          section2Ref={section2Ref}
          section3Ref={section3Ref}
          section4Ref={section4Ref}
        />
        <section id="section1" ref={section1Ref}>
          <Section1 />
        </section>
        <section id="section2" ref={section2Ref}>
          <Section2 />
        </section>
        <section id="section3" ref={section3Ref}>
          <Section3 />
        </section>
        <section id="section4" ref={section4Ref}>
          <Section4 />
        </section>
      </div>

      <style jsx>{`
        .main-container {
          height: 500vh;
          width: 100%;
        }

        .hero {
          position: relative;
          height: 100vh;
          background-color: black;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("/mainimg2.webp");
          background-size: cover;
          opacity: ${opacity};
          transition: opacity 0.5s;
        }

        .hero-title {
          position: absolute;
          bottom: 20px;
          right: 20px;
          font-size: 4rem;
          font-weight: bold;
          color: whitesmoke;
          padding: 3rem;
          opacity: ${opacity};
        }

        section {
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}

export default Home;
