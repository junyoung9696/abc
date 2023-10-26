import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls } from "@react-three/drei";
import DiseaseAnimation from "@/components/3Dmodel/Disease-animation";

function Animation() {
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(true);
  const [animationSpeed, setAnimationSpeed] = useState(1);

  const toggleAnimation = () => {
    setIsAnimationPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const increaseSpeed = () => {
    setAnimationSpeed((prevSpeed) => prevSpeed + 0.1); // 애니메이션 속도를 0.1씩 증가시킵니다.
  };

  const decreaseSpeed = () => {
    setAnimationSpeed((prevSpeed) => prevSpeed - 0.1); // 애니메이션 속도를 0.1씩 감소시킵니다.
  };

  return (
    <>
      <Navbar />
      <div>
        <Canvas style={{ height: "100vh" }}>
          <Stage environment="city" intensity={0.6}>
            <group>
              <DiseaseAnimation
                isPlaying={isAnimationPlaying}
                animationSpeed={animationSpeed}
              />
            </group>
          </Stage>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      <div className="flex justify-center mb-4">
        <button
          className="bg-blue-500 text-white p-2 rounded-md mr-2"
          onClick={toggleAnimation}
        >
          {isAnimationPlaying ? "애니메이션 멈춤" : "애니메이션 재생"}
        </button>
        <button
          className="bg-green-500 text-white p-2 rounded-md mr-2"
          onClick={increaseSpeed}
        >
          속도 증가
        </button>
        <button
          className="bg-red-500 text-white p-2 rounded-md"
          onClick={decreaseSpeed}
        >
          속도 감소
        </button>
        <span className="ml-4 text-gray-600">
          현재 속도: {animationSpeed.toFixed(1)}
        </span>
      </div>
    </>
  );
}

export default Animation;
