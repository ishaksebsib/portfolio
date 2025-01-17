import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollTo = (sectionId: string) => {
	console.log(sectionId);
  const targetSection = document.getElementById(sectionId);
  if (!targetSection) {
    return;
  }
  targetSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
