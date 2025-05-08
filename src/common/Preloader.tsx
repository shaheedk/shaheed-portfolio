import * as motion from "motion/react-client";

interface PreloaderProps {
  fadeOut: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ fadeOut }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black ">
      <motion.div
        animate={{ opacity: fadeOut ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          style={box}
        />
      </motion.div>
    </div>
  );
};

export default Preloader;

const box: React.CSSProperties = {
  width: 100,
  height: 100,
  backgroundColor: "#fc8c03",
  borderRadius: 5,
};
