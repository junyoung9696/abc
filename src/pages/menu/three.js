import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import Paprika from "@/components/3Dmodel/Paprika.jsx";
import Paprika2 from "@/components/3Dmodel/Paprika2.jsx";
import Paprika3 from "@/components/3Dmodel/Paprika3.jsx";

function Three() {
  const numPaprikas = 3; // 파프리카의 개수
  const [currentPaprikaIndex, setCurrentPaprikaIndex] = useState(0);

  // 슬라이드 바를 조작할 때 호출되는 함수
  const handleSliderChange = (event) => {
    const newIndex = parseInt(event.target.value, 10);
    setCurrentPaprikaIndex(newIndex);
  };

  // Array of different paprika models
  const paprikaModels = [Paprika, Paprika2, Paprika3];

  // Get the currently selected model
  const CurrentPaprikaModel = paprikaModels[currentPaprikaIndex];

  return (
    <>
      <Navbar />
      <div className="h-80">
        <Canvas>
          <Stage environment="city" intensity={0.6}>
            {/* Render the current paprika model based on the currentPaprikaIndex */}
            <group>
              <CurrentPaprikaModel />
            </group>
          </Stage>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      {/* 슬라이드 바를 사용하여 파프리카 모델 변경 */}
      <input
        className="mx-auto block"
        type="range"
        min={0}
        max={numPaprikas - 1}
        value={currentPaprikaIndex}
        onChange={handleSliderChange}
      />
    </>
  );
}

export default Three;

// 시간순
// import React, { useState, useEffect } from "react";
// import { useTransition, animated } from "react-spring";
// import Navbar from "@/components/Navbar";
// import { Canvas } from "@react-three/fiber";
// import { Stage, OrbitControls } from "@react-three/drei";
// import Paprika from "@/components/3Dmodel/Paprika.jsx";
// import Greenhouse from "@/components/3Dmodel/Greenhouse.jsx";

// function Three() {
//   const models = [
//     "paprika",
//     "greenhouse",
//     "paprika",
//     "paprika",
//     "greenhouse" /*...and so on...*/,
//   ];
//   const [currentModelIndex, setCurrentModelIndex] = useState(0);

//   // 모델 변경하는 함수
//   const changeModel = () => {
//     setCurrentModelIndex((prevIndex) => (prevIndex + 1) % models.length);
//   };

//   // 애니메이션 설정
//   const transitions = useTransition(models[currentModelIndex], {
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//     config: { duration: 1000 }, // 애니메이션 지속 시간 (밀리초)
//   });

//   // 시간 간격으로 모델 변경
//   useEffect(() => {
//     const timeoutId = setTimeout(changeModel, 3000);

//     return () => clearTimeout(timeoutId);
//   }, [currentModelIndex]);

//   return (
//     <>
//       <Navbar />
//       <div className="h-80">
//         {/* Render the Canvas component */}
//         <Canvas>
//           <Stage environment="city" intensity={0.6}>
//             {/* Use the ternary operator to conditionally render models */}
//             {models.map((model, index) => (
//               <React.Fragment key={index}>
//                 {model === "paprika" && (
//                   <Paprika visible={currentModelIndex === index} />
//                 )}
//                 {model === "greenhouse" && (
//                   <Greenhouse visible={currentModelIndex === index} />
//                 )}
//               </React.Fragment>
//             ))}
//           </Stage>
//           <OrbitControls enableZoom={false} />
//         </Canvas>
//       </div>
//       {/* Render the transitions outside the Canvas */}
//       {transitions((styles, item) =>
//         item === "paprika" ? (
//           <animated.div style={styles}>
//             <Paprika />
//           </animated.div>
//         ) : (
//           <animated.div style={styles}>
//             <Greenhouse />
//           </animated.div>
//         )
//       )}
//     </>
//   );
// }

// export default Three;
