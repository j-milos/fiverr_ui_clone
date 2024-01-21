import { MenuItemElement } from "../MenuItem/MenuItem";

interface SideMenuDataType {
  title: string;
  link: string;
  submenu?: MenuItemElement[];
}
interface SideMenuBottomType {
  title: string;
  link: string;
  submenu?: MenuItemElement[];
}

interface FooterItemType {
  title: string;
  link: string;
  submenu?: MenuItemElement[];
}

export const sideMenuData: SideMenuDataType[] = [
  {
    title: "Sing In",
    link: "/",
  },
  {
    title: "Browse categories",
    link: "/",
    submenu: [
      {
        title: " Graphics & Design",
        link: "/",
      },
      {
        title: " Digital Marketing",
        link: "/",
      },
      {
        title: " Writing & Translation",
        link: "/",
      },
      {
        title: " Video & Animation",
        link: "/",
      },
    ],
  },
  {
    title: "Explore",
    link: "/",
    submenu: [
      {
        title: "Discover",
        link: "/",
      },
      {
        title: "Guides",
        link: "/",
      },
      {
        title: " Learn",
        link: "/",
      },
      {
        title: " Logo Maker",
        link: "/",
      },
    ],
  },
  {
    title: "Business solutions",
    link: "/",
    submenu: [
      {
        title: "Fiverr Pro",
        link: "/",
      },
      {
        title: "Fiverr Certified",
        link: "/",
      },
      {
        title: " Fiverr Enterprise",
        link: "/",
      },
    ],
  },
];
export const sideMenuBottom: SideMenuBottomType[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "English",
    link: "/",
    submenu: [
      {
        title: " Deutch",
        link: "/",
      },
      {
        title: " Espanol",
        link: "/",
      },
      {
        title: " Italiano",
        link: "/",
      },
      {
        title: " Franacais",
        link: "/",
      },
    ],
  },
  {
    title: "€ EUR",
    link: "/",
    submenu: [
      {
        title: "USD",
        link: "/",
      },
      {
        title: "GBP",
        link: "/",
      },
      {
        title: " AUD",
        link: "/",
      },
      {
        title: " CAD",
        link: "/",
      },
    ],
  },
];
export const footerItem: FooterItemType[] = [
  {
    title: "Categories",
    link: "/",
    submenu: [
      {
        title: " Graphics & Design",
        link: "/",
      },
      {
        title: " Digital Marketing",
        link: "/",
      },
      {
        title: " Music & Audio",
        link: "/",
      },
      {
        title: " Fiverr Logo Maker",
        link: "/",
      },
      {
        title: " Programming & Tech",
        link: "/",
      },
      {
        title: " Data",
        link: "/",
      },
      {
        title: " Business",
        link: "/",
      },
      {
        title: " Lifestyle",
        link: "/",
      },
      {
        title: " Photography",
        link: "/",
      },
      {
        title: " End-to-End Projects",
        link: "/",
      },
      {
        title: " Sitemap",
        link: "/",
      },
    ],
  },
  {
    title: "About",
    link: "/",
    submenu: [
      {
        title: "Careers",
        link: "/",
      },
      {
        title: "Press & News",
        link: "/",
      },
      {
        title: " Partnerships",
        link: "/",
      },
      {
        title: " Privacy Policy",
        link: "/",
      },
      {
        title: " Terms of Service",
        link: "/",
      },
      {
        title: " Intellectual Property Claims",
        link: "/",
      },
      {
        title: " Investor Relations",
        link: "/",
      },
    ],
  },
  {
    title: "Community",
    link: "/",
    submenu: [
      {
        title: "Customer Success Stories",
        link: "/",
      },
      {
        title: "Community Hub",
        link: "/",
      },
      {
        title: " Forum",
        link: "/",
      },
      {
        title: "Events",
        link: "/",
      },
      {
        title: " Blog",
        link: "/",
      },
      {
        title: " Influencers",
        link: "/",
      },
      {
        title: " Affiliates",
        link: "/",
      },
      {
        title: " Podcast",
        link: "/",
      },
      {
        title: " Invite a Friend",
        link: "/",
      },
      {
        title: " Become a Seller",
        link: "/",
      },
    ],
  },
  {
    title: "Support and Education",
    link: "/",
    submenu: [
      {
        title: "Help & Support",
        link: "/",
      },
      {
        title: "Trust & Safety",
        link: "/",
      },
      {
        title: " Selling on Fiverr",
        link: "/",
      },
      {
        title: " Buying on Fiverr",
        link: "/",
      },
      {
        title: " Fiverr Guides",
        link: "/",
      },
      {
        title: " Learn",
        link: "/",
      },
    ],
  },
  {
    title: "Business Solutions",
    link: "/",
    submenu: [
      {
        title: "About Business Solutions",
        link: "/",
      },
      {
        title: "Fiverr Pro",
        link: "/",
      },
      {
        title: " Fiverr Certified",
        link: "/",
      },
      {
        title: " ClearVoice",
        link: "/",
      },
      {
        title: " Working Not Working",
        link: "/",
      },
      {
        title: " Contact Sales",
        link: "/",
      },
    ],
  },
];
