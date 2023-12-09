import React from "react";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";
import InstagramIcon from "../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";
import GmailIcon from "../public/gmail-icon.svg";

const EmailSection = () => {
    return (
      <main className="grid md:grid-cols-2 my-12 md:my-12 py-24 md:py-24 gap-4 relative" id="contact">
        <div className="z-10">
          <h5 className="text-4xl font-bold text-white my-2">Let's Connect</h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md mt-8 text-justify">
            Right now, I'm searching for new chances, and my email is never closed. I'll do my best to respond to you, whether you have a query or are just wishing to say hello!
          </p>
          <h4 className="pb-3 mt-6">Let's get in touch!</h4>
          <div className="flex flex-row gap-4 mt-6">
            <a href="https://github.com/AhBamboo" target="_blank" rel="noopener noreferrer">
              <Image src={GithubIcon} alt="Github Icon" />
            </a>
            <a href="https://www.linkedin.com/in/yi-xuan-boo-36808927b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BsztNgIgHS92%2FsUoCT1lgwg%3D%3D" target="_blank" rel="noopener noreferrer">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </a>
            <a href="https://instagram.com/ahboo11_?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <Image src={InstagramIcon} alt="Instagram Icon" />
            </a>
            <a href="mailto:booyixuan0111@gmail.com" target="_blank" rel="noopener noreferrer">
              <Image src={GmailIcon} alt="Gmail Icon" />
            </a>
          </div>
        </div>
      </main>
    );
  };
  
  export default EmailSection;