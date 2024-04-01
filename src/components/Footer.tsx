import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

function Footer() {
  return (
    <div className="wrapper bg-cyan-400">
      <div className="adapter flex justify-evenly h-[75px]">
        <div className="flex text-white items-center px-6">
          <CgMail className=" text-white p-1" size={30} />
          raianecastrodemoura@gmail.com
        </div>

        <div className="flex gap-4 items-center">
          <FaLinkedin className="text-white" size={25} />
          <FaInstagram className="text-white" size={25} />
          <FaGithub className="text-white" size={25} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
