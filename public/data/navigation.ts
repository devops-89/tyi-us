import { ILink } from "@/utils/types";

export interface INavItem extends ILink {
  hasDropdown?: boolean;
  dropdownItems?: ILink[];
}

export const NAV_ITEMS: INavItem[] = [


  {
    label: "The Challenge",
    href: "/challenge",
    hasDropdown: true,
    dropdownItems: [
      {
        label: "The Challenge",
        href: "/challenge",
      },
      {
        label: "Past Winners",
        href: "/past-winners",
      },
    ],
  },

  {
    label: "Submit Your Entry",
    href: "/submit",
  },

  {
    label: "Resources",
    href: "/resources/free-innovation-camp",
    hasDropdown: true,
    dropdownItems: [
      {
        label: "Free Innovation Camp",
        href: "/resources/free-innovation-camp",
      },
      {
        label: "Get a US Patent",
        href: "/resources/get-a-us-patent",
      },
    ],
  },

  {
    label: "About Us",
    href: "/about",
  },

  {
    label: "Contact Us",
    href: "/contact",
  },
];