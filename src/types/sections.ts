import { Variants } from "motion";

export interface ISectionProps {
  name: string;
  img?: string;
  isLanding: boolean;
  children?: React.ReactNode;
}

export interface IHeaderProps {
  title: string;
  subTitle?: string;
}
export interface SubItem {
  label: string;
  href: string;
}
export interface NavItemType {
  label: string;
  href: string;
  subItems?: SubItem[]; // Optional array of sub-items
}
export interface SubItem {
  label: string;
  href: string;
}
export interface NavItemProps {
  item: NavItemType;
  // Framer Motion variants are complex, so we import the official type
  submenuVariants: Variants;
}
