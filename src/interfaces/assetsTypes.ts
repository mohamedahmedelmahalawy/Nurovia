import type { LucideIcon } from "lucide-react";

export interface Assets {
  logo: string;
  gradientBackground: string;
  user_group: string;
  star_icon: string;
  star_dull_icon: string;
  profile_img_1: string;
  arrow_icon: string;
}

export interface ToolGradient {
  from: string;
  to: string;
}

export interface AiTool {
  title: string;
  description: string;
  Icon: LucideIcon;
  bg: ToolGradient;
  path: string;
}

export interface Testimonial {
  image: string;
  name: string;
  title: string;
  content: string;
  rating: number;
}

export interface Creation {
  id: number;
  user_id: string;
  prompt: string;
  content: string;
  type: "article" | "blog-title" | "image";
  publish: boolean;
  likes: string[];
  created_at: string;
  updated_at: string;
  __v?: number;
}
