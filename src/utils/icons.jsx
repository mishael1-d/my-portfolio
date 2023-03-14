import {
  AiOutlineUser,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FiEdit, FiHome } from "react-icons/fi";
import { TbBriefcase, TbHeadset, TbSend } from "react-icons/tb";
import { HiOutlineDocumentDownload } from "react-icons/hi";

export const HomeIcon = () => <FiHome size={25} color="#363636" />;
export const AboutIcon = () => <AiOutlineUser size={25} color="#363636" />;
export const WorkIcon = () => <TbBriefcase size={25} color="#363636" />;
export const ContactIcon = () => <TbHeadset size={25} color="#363636" />;
export const BlogIcon = () => <FiEdit size={25} color="#363636" />;
export const GithubIcon = () => <AiFillGithub size={25} color="#363636" />;
export const LinkedInIcon = () => <AiFillLinkedin size={25} color="#363636" />;
export const TwitterIcon = () => <AiOutlineTwitter size={25} color="#363636" />;
export const SendIcon = () => <TbSend size={22} color="#ffffff" />;
export const DocIcon = () => (
  <HiOutlineDocumentDownload size={22} color="#ffffff" />
);
