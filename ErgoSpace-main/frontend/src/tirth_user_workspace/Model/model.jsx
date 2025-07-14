import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/models/scene.gltf");
  const modelRef = useRef();

  

  // Rotate model smoothly on Y-axis
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.0009; // Adjust speed here
    }
  });

  return <primitive ref={modelRef} object={scene} scale={[1.8,1.8,1.8]} position={[0, -1, 0]} />;

  
};

export default Model;
