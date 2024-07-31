import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useUpdatePath } from "@/lib/providers/path-provider";

interface ContinueButtonProps {
  variant: any;
  nextPath: string;
  content: string;
  className: string;
}


const ContinueButton = ({
  variant,
  nextPath,
  content,
  className,
}: ContinueButtonProps) => {
  const { setPath } = useUpdatePath();
  return (
    <motion.div
      variants={variant}
      className={className}
    >
      <Link href={"/" + nextPath}>
        <Button
          onClick={() => setPath("/" + nextPath)}
          className={`hover:before:bg-redborder-red-500 relative h-[50px] w-56 overflow-hidden border border-green-500 bg-black px-3 text-green-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-300 hover:text-white hover:shadow-green-500 hover:bg-black hover:before:left-0 hover:before:w-full 
            `}
        >
          <span
            className={`group-hover:${"hidden"} text-white group-hover:text-black relative z-10`}
          >
            {content}
          </span>
          <LiaLongArrowAltRightSolid
            className={`group-hover:${"display"} h-6 w-6 text-white group-hover:text-slate-900 transition-all duration-300 ${"group-hover:hidden"}`}
          />
        </Button>
      </Link>
    </motion.div>
  );
};

export default ContinueButton;
