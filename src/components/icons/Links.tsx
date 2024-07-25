import { ReactNode } from 'react';

import {InstagramSVG, XSVG,
    EmailSVG,
    GithubSVG,
    GoogleSVG,
    DownloadSVG,
    LinkedinSVG,} from './index';

interface Link {
    title: string;
    href: string;
    icon: ReactNode;
    text: string;
    rel: string;
  }

const LINKS: Link[] =
    [
    {
      title: "X: Sujeet_Gund",
      href: "https://x.com/Sujeet_Gund",
      icon: <XSVG />,
      text: "Sujeet_Gund",
      rel: "noopener noreferrer external",
    },
    {
      title: "Instagram: sujeet.gund",
      href: "https://instagram.com/sujeet.gund",
      icon: <InstagramSVG />,
      text: "sujeet.gund",
      rel: "noopener noreferrer external",
    },
    {
      title: "LinkedIn: sujeetgund",
      href: "https://linkedin.com/in/sujeetgund",
      icon: <LinkedinSVG />,
      text: "sujeetgund",
      rel: "noopener noreferrer external",
    },
    {
      title: "GitHub: sujeetgund",
      href: "https://github.com/sujeetgund",
      icon: <GithubSVG />,
      text: "sujeetgund",
      rel: "noopener noreferrer external",
    },
    {
      title: "Email",
      href: "mailto:sujeetgund@gmail.com",
      icon: <EmailSVG />,
      text: "Email",
      rel: "noopener noreferrer external",
    },
    {
      title: "Resume",
      href: "https://drive.google.com/file/d/1cEbJdDXdH-4H028u24nHdoMdutnppf3I/view?usp=sharing",
      icon: <DownloadSVG />,
      text: "Resume",
      rel: "noopener noreferrer external",
    },
]

export default LINKS;