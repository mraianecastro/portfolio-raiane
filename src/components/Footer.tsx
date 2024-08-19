import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

function Footer() {
  return (
    <div className="wrapper bg-cyan-400 pb-4 md:pb-0" id="contacts">
      <div className="adapter">
        <div className="flex flex-col md:flex-row items-center justify-evenly">
          <div className="flex text-white items-center px-6">
            <a
              className="flex p-2 items-center"
              href="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <CgMail className=" text-white p-1" size={30} />{" "}
              raianecastrodemoura@gmail.com
            </a>
          </div>

          <div className="flex gap-4 items-center">
            <a
              href="http://linkedin.com/in/raianecastrodemoura"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white" size={25} />
            </a>
            <a
              href="https://www.instagram.com/mraianecastro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white" size={25} />
            </a>
            <a
              href="https://github.com/mraianecastro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white" size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
