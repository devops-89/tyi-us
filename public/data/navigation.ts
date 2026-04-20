import { ILink } from "@/utils/types";

export interface INavItem extends ILink {
  hasDropdown?: boolean;
}

export const NAV_ITEMS: INavItem[] = [
  { label: "The Challenge", href: "/challenge", hasDropdown: true },
  { label: "Submit Your Entry", href: "/submit" },
  { label: "Resources", href: "/resources", hasDropdown: true },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];
