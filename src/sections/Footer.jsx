import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="isolate mx-auto max-w-7xl p-6 pb-12 pt-16 lg:px-8">
      <div className="border-t border-white/10 pt-4 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            target="_blank"
            className="group flex h-6 w-6 items-center justify-center text-zinc-400 transition hover:text-zinc-300"
            href="https://twitter.com/joincobalt">
            <FaTwitter className="hidden h-5 w-5 group-hover:block" />
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-label="X"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 group-hover:hidden"
              aria-hidden="true">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"></path>
            </svg>
          </a>
          <a
            target="_blank"
            className="group flex h-6 w-6 items-center justify-center text-zinc-400 transition-colors hover:text-zinc-300"
            href="https://www.linkedin.com/company/cobaltfinancial">
            <FaLinkedin />
          </a>
          <a
            target="_blank"
            className="group flex h-6 w-6 items-center justify-center text-zinc-400 transition-colors hover:text-zinc-300"
            href="https://www.facebook.com/joincobalt">
            <FaFacebook />
          </a>
        </div>
        <div className="mt-8 flex items-center gap-4 text-sm font-medium leading-5 text-zinc-400 max-md:flex-col md:order-1 md:mt-0">
          <div className="order-2 md:order-1">
            <p className="">© 2023 Cobalt Financial Technologies Inc.</p>
          </div>
          <div className="order-1 flex gap-4 md:order-2">
            <a
              className="transition-colors duration-200 hover:text-zinc-300"
              href="/legal/privacy">
              Privacy Policy
            </a>
            <a
              className="transition-colors duration-200 hover:text-zinc-300"
              href="/legal/terms">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full text-sm leading-5 text-zinc-500 max-md:text-center md:max-w-[60%]">
        <p>
          Cobalt is a trademark or registered trademark of Cobalt Financial
          Technologies Inc. Any other trademarks are the property of their
          respective owners. Unless otherwise noted, use of third party logos
          does not imply endorsement of, sponsorship of, or affiliation with
          Cobalt.
        </p>
        <p className="mt-2">
          Cobalt is a financial technology company, not a bank. Banking services
          are provided by Celtic Bank and Evolve Bank &amp; Trust®, Members
          FDIC.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
