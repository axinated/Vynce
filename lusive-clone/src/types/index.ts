export type Feature = {
  title: string;
  description: string;
  icon?: string;
};

export type CTA = {
  text: string;
  link: string;
};

export type HeaderProps = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

export type FooterProps = {
  copyright: string;
  links: Array<{ label: string; href: string }>;
};