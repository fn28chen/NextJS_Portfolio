import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/20/solid";
import { slideInFromTop } from "@/utils/motion";

interface SparklesIconProps {
  button_name: string;
}
const SparklesBox = ({ button_name }: SparklesIconProps) => {
  return (
    <motion.div
      variants={slideInFromTop(0.2)}
      className={`Welcome-box py-2 px-4 border border-green-500 opacity-[0.9]`}
    >
      <SparklesIcon className={`h-5 w-5 text-green-500 inline-block mr-2`} />
      <h1 className={`text-[14px] text-washed-blue-400`}>{button_name}</h1>
    </motion.div>
  );
};

export default SparklesBox;
