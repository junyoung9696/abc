import Greenhouse from "@/components/3Dmodel/Greenhouse.jsx";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import Link from "next/link";

function Section1() {
  return (
    <>
      <div className="sectionContainer">
        <section className="dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-bold text-white">
                Keti SmartFarm Project
              </h2>
              <p className="mb-4 font-light text-white">
                Track work across the enterprise through an open, collaborative
                platform. Link issues across Jira and ingest data from other
                software development tools, so your IT support and operations
                teams have richer contextual information to rapidly respond to
                requests, incidents, and changes.
              </p>
              <p className="mb-4 font-medium text-white">
                Deliver great service experiences fast - without the complexity
                of traditional ITSM solutions. Accelerate critical development
                work, eliminate toil, and deploy changes with ease.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
              >
                Learn more
                <svg
                  className="ml-1 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .sectionContainer {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f5f5f5;
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.05),
              rgba(255, 255, 255, 0.03)
            ),
            url("/mainimg1.webp");
          background-size: cover;
        }
      `}</style>
    </>
  );
}

function Section2() {
  return (
    <>
      <div className="sectionContainer">
        <section className="bg-gray-100 dark:bg-gray-900">
          <div className="gap-10 items-center py-8 px-4 mx-auto max-w-screen-xl grid grid-cols-[60%_30%] lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Dashboard & Plotly
              </h2>
              <p className="mb-4 font-light">
                Track work across the enterprise through an open, collaborative
                platform. Link issues across Jira and ingest data from other
                software development tools, so your IT support and operations
                teams have richer contextual information to rapidly respond to
                requests, incidents, and changes.
              </p>
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 rounded float-right">
                <Link className="py-2 px-4 block" href="/menu/chart">
                  Go To
                </Link>
              </button>
            </div>
            <div></div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .sectionContainer {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f5f5f5;
        }
      `}</style>
    </>
  );
}

function Section3() {
  return (
    <>
      <div className="sectionContainer">
        <section className="bg-gray-100 dark:bg-gray-900">
          <div className="gap-10 items-center py-8 px-4 mx-auto max-w-screen-xl grid grid-cols-[45%_45%] lg:py-16 lg:px-6">
            <div>
              <Canvas>
                <Stage environment="city" intensity={0.6}>
                  <Greenhouse args={[2, 2, 2]} scale={[1, 1, 1]} />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
              </Canvas>
            </div>
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                3D Data Visualization
              </h2>
              <p className="mb-4 font-light">
                Track work across the enterprise through an open, collaborative
                platform. Link issues across Jira and ingest data from other
                software development tools, so your IT support and operations
                teams have richer contextual information to rapidly respond to
                requests, incidents, and changes.
              </p>
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 rounded float-right">
                <Link className="py-2 px-4 block" href="/menu/three">
                  Go To
                </Link>
              </button>
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .sectionContainer {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f5f5f5;
        }
      `}</style>
    </>
  );
}

function Section4() {
  return (
    <>
      <div className="sectionContainer">
        <section className="bg-gray-100 dark:bg-gray-900">
          <div className="gap-10 items-center py-8 px-4 mx-auto max-w-screen-xl grid grid-cols-[60%_30%] lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                VR & AR
              </h2>
              <p className="mb-4 font-light">
                Track work across the enterprise through an open, collaborative
                platform. Link issues across Jira and ingest data from other
                software development tools, so your IT support and operations
                teams have richer contextual information to rapidly respond to
                requests, incidents, and changes.
              </p>
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold border-b-4 border-blue-700 hover:border-blue-500 rounded float-right">
                <Link className="py-2 px-4 block" href="/menu/vrar">
                  Go To
                </Link>
              </button>
            </div>
            <div className=""></div>
          </div>
        </section>
      </div>
      <style jsx>{`
        .sectionContainer {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f5f5f5;
        }
      `}</style>
    </>
  );
}

export { Section1, Section2, Section3, Section4 };
