import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";


const Computers = ({ isMobile }) => {
  if (isMobile) {
    return null; // Return null to render nothing on mobile devices
  }

  const computer = useGLTF("./retro_computer/scene.gltf" );
 
  return (
    <mesh position={[0, -1, 0.5]}>
    <hemisphereLight intensity={0.5} skyColor="#ffffff" groundColor="#000000" />
      <spotLight
      position={[-20, 50, 10]}
      angle={Math.PI / 2} // Increase the angle to cover a wider area
      penumbra={0.2} // Adjust the penumbra to control the softness of the shadows
      intensity={1} // Increase the intensity to make the colors more vibrant
      castShadow
      shadow-mapSize={1024}
      />
      <pointLight intensity={1}  /> {/* Add a point light */}

      <primitive
        object={computer.scene}
        scale={0.1}
        position={[0, -8, 0.5]}
        rotation={[0, 0, 0]} 
        />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "1000px", display: "flex", justifyContent: "center", alignItems: "center" }}>

    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 10, 0], fov: 75}}
      gl={{ preserveDrawingBuffer: true, }}
      >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          target={[0, -5, 0]} 

        />
      <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
    </div>
  );
};

export default ComputersCanvas;
