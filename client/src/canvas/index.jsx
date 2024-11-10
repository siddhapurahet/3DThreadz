import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Backdrop from "./Backdrop";
import CameraPos from "./CameraPos";
import Shirt from "./Shirt";

const CanvasModel = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment press="city" />
      {/* <CameraPos> */}
      {/* <Backdrop> */}
      <Center>
        <Shirt />
      </Center>
      {/* </Backdrop> */}
      {/* </CameraPos> */}
    </Canvas>
  );
};

export default CanvasModel;
