import GithubIcon from "@/app/assets/GithubIcon";
import LinkedinIcon from "@/app/assets/LinkedinIcon";
import { getFooterData } from "@/lib/api";
import Link from "next/link";

export default async function Footer() {
  const footerData = await getFooterData();

  return (
    <footer
      style={{ backgroundColor: footerData.backgroundColor.value }}
      className="text-white py-6 px-4 md:px-6 lg:px-8"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>{footerData?.footerText}</p>
        </div>
        <div className="flex space-x-4">
          <Link
            className="hover:text-gray-400"
            href={footerData?.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="h-6 w-6" />
          </Link>
          <Link
            className="hover:text-gray-400"
            href={footerData?.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
