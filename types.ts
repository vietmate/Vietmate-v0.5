export interface NavItem {
  id: string;
  label: string;
}

export interface Review {
  id: number;
  author: string;
  location: string;
  initials: string;
  rating: number;
  text: string;
  image: string;
}

export interface Region {
  id: number;
  title: string;
  places: string;
  description: string;
  image: string;
}

export interface SectionProps {
  id: string;
  className?: string;
}
