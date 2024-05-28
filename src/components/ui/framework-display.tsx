import { motion } from "framer-motion";
import Image from "next/image";
import getFrameworkImageLink from "../style/get-image-link";

export const FrameworkImage = ({ framework }: { framework: string }) => {
  const src = getFrameworkImageLink(framework);
  return (
    <motion.div
      className={`flex justify-center items-center gap-2`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Image src={src} width={25} height={25} alt={`${framework}`} />
    </motion.div>
  );
};
