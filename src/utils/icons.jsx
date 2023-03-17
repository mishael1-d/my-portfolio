import {
  AiOutlineUser,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { FiEdit, FiHome } from "react-icons/fi";
import { TbBriefcase, TbHeadset, TbSend } from "react-icons/tb";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { FaRegMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";

export const HomeIcon = () => (
  <FiHome size={25} color="" className="text-[#363636] dark:text-[#f5f5f5]" />
);
export const AboutIcon = () => (
  <AiOutlineUser size={25} color="#363636" className="dark:!text-[#f5f5f5]" />
);
export const WorkIcon = () => (
  <TbBriefcase size={25} color="#363636" className="dark:!text-[#f5f5f5]" />
);
export const ContactIcon = () => (
  <TbHeadset size={25} color="#363636" className="dark:!text-[#f5f5f5]" />
);
export const BlogIcon = () => (
  <FiEdit size={25} color="#363636" className="dark:!text-[#f5f5f5]" />
);
export const GithubIcon = () => (
  <AiFillGithub size={25} color="#363636" className="dark:!text-[#f5f5f5]" />
);
export const LinkedInIcon = () => (
  <AiFillLinkedin size={25} color="#363636" className="dark:!text-[#f5f5f5]" />
);
export const TwitterIcon = () => (
  <AiOutlineTwitter
    size={25}
    color="#363636"
    className="dark:!text-[#f5f5f5]"
  />
);
export const SendIcon = () => (
  <TbSend size={22} color="#ffffff" className="dark:!text-black" />
);
export const DocIcon = () => (
  <HiOutlineDocumentDownload size={22} color="#ffffff" className="dark:!text-black" />
);
export const ShareIcon = () => <AiOutlineShareAlt size={25} color="#363636" />;
export const MoonIcon = () => <FaRegMoon size={20} />;
export const SunIcon = () => <BsSun size={20} />;
