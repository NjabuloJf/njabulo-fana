import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "ɳʝαႦυʅσ ʝႦ",
  initials: "",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "sᴏғᴛᴡᴀʀᴇ ᴇɴɢɪɴᴇᴇʀ ᴛᴜʀɴᴇᴅ ᴇɴᴛʀᴇᴘʀᴇɴᴇᴜʀ. ɪ ʟᴏᴠᴇ ʙᴜɪʟᴅɪɴɢ ᴛʜɪɴɢs ᴀɴᴅ ʜᴇʟᴘɪɴɢ ᴘᴇᴏᴘʟᴇ. ᴠᴇʀʏ ᴀᴄᴛɪᴠᴇ ᴏɴ ᴡʜᴀᴛsᴀᴘᴘ ʙᴜsɪɴᴇssᴇs.",
  summary:
    "At the end of 2026, continue building code for WhatsApp bot. [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Owner name",
      href: "https://atomic.finance",
      badges: [],
      location: "Botswana",
      title: "My name is njabulo",
      logoUrl: "/atomic.png",
      start: "age 20",
      end: "date Oct 20o5",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "school high",
      badges: [],
      href: "https://shopify.com",
      location: "Botswana",
      title: "Software Engineer school",
      logoUrl: "/shopify.png",
      start: "January 2010",
      end: "December 2018",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "My work",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2024",
      end: "April 2026",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "My country",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Botswana🇧🇼 and Zimbabwe🇿🇼",
      logoUrl: "/mitremedia.png",
      start: "am born in Zimbabwe",
      end: "my project in Botswana",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "welcome 🙏💃",
      href: "https://local.com/Botswana",
      degree: "only l say tanks for support my business",
      logoUrl: "/buildspace.jpg",
      start: "technology software",
      end: "2024 to updating 2026",
    },
  ],
  
  projects: [
    {
      title: "ɴᴊᴀʙᴜʟᴏ-ᴊʙ ʙᴏᴛ",
      href: "https://github.com",
      dates: "last update February 2026 version ^4.12.9¬",
      active: true,
      description:
        "Njabulo Jb' WhatsApp bot multi-device repository (NjabuloJ/Njabulo-Jb) has gained over 80 stars, showcasing its popularity among developers. This bot enables seamless WhatsApp interactions across multiple devices.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "=> qr code",
          href: "https://github.com",
          icon: <Icons.globe className="size-3" />,
        },
          {
          type: "=> deploy bot",
          href: "https://github.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "chat-collect.png",
    },
    {
      title: "ᴛᴇʟᴇɢʀᴀᴍ ʙᴏᴛ",
      href: "https://github.com",
      dates: "last update Jeanunary 2026 version ^2.0.0¬",
      active: true,
      description:
        "Get the Njabulo Jb Telegram bot - a powerful multi-device solution with over 80+ stars on GitHub.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "tbot",
          href: "https://github.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "channel",
          href: "https://github.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "ib.png",
    },
    {
      title: "ᴍʏ ᴜᴘᴅᴀᴛᴇ sᴇᴠɪᴇʀ",
      href: "https://github.com",
      dates: "follow my channel and group chats got updated",
      active: true,
      description:
        "Thanks for your support!  Join my channels and groups to get the latest updates on Njabulo JB. Stay ahead with new features and more!.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "wgroup",
          href: "https://github.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "channel",
          href: "https://github.com",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "mitremediaa.png",
    },
    {
      title: "ᴍᴇssᴀɢᴇ ᴏʀ ғᴏʟʟᴏᴡ ᴍᴇ",
      href: "https://github.com",
      dates: "my media am in tiktok & Facebook & Instagram & YouTube",
      active: true,
      description:
        "Hey, don't miss out! Follow me on Facebook, TikTok, YouTube, and Instagram for the latest updates and behind-the-scenes content!  Stay connected and let's vibe! .",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "facebook",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "instagram",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "tiktok",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "whatsapp",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
     image: "magic-ui.png", 
    },
  ],
  hackathons: [
    {
      title: "Computer software",
      dates: "November 23rd - 25th, 2024",
      location: "Botswana' Gaborone",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image: "computer-software.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "hack software",
      dates: "September 14th - 16th, 203",
      location: "Zimbabwe, bulawayo",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image: "hack-software.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Njabulo Jb",
      dates: "March 23rd - 24th, 2018",
      location: "bulawayo, Gaborone",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image: "me.png",
      links: [],
    
    },
    {
      title: "github clone",
      dates: "October 29, 2025",
      location: "Gaborone, Botswana",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image: "github-cline.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/",
        },
      ],
    },
  ],
} as const;
