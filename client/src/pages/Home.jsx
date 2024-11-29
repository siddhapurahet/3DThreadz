import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="/threejs.png"
              alt="logo"
              className="w-18 h-12 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <h1 className="head-text">
              Let's <br className="xl:block hidden" /> make it...
            </h1>
          </motion.div>
          <motion.div {...headContentAnimation} className="flex flex-col gap-5">
            <p className="max-w-md font-normal text-white text-base">
              Make your vibrant✨ style🎨 with our new 3D tool👓 for
              customization. Unleash your fashion style💥 and rock with your
              it🎇🎇
            </p>
            <CustomButton
              type="filled"
              title="Customize it"
              handleClick={() => (state.intro = false)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
