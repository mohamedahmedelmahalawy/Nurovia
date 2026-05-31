import { useClerk, useUser } from "@clerk/react";
import {
  Eraser,
  FileText,
  Hash,
  House,
  Image,
  Scissors,
  SquarePen,
  Users,
} from "lucide-react";
import type { NavItem } from "../interfaces/layoutNavItemsTypes";
import { NavLink } from "react-router-dom";
interface SidebarProps {
  sidebar: boolean;
  sidebarHandler: (setter: boolean) => void;
}
const navItems: NavItem[] = [
  { path: "/ai", label: "Dashnoard", Icon: House },
  { path: "/ai/write-article", label: "Write Article", Icon: SquarePen },
  { path: "/ai/blog-titles", label: "Blog Titles", Icon: Hash },
  { path: "/ai/generate-images", label: "Generate Images", Icon: Image },
  { path: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
  { path: "/ai/remove-object", label: "Remove Object", Icon: Scissors },
  { path: "/ai/review-resume", label: "Review Resume", Icon: FileText },
  { path: "/ai/community", label: "Community", Icon: Users },
];
export default function Sidebar({ sidebar, sidebarHandler }: SidebarProps) {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();
  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${sidebar ? "translate-x-0" : "max-sm:-translate-x-full"} transition-all duration-300 ease-in-out`}
    >
      <div className="my-7 w-full">
        <img
          src={user?.imageUrl}
          alt={user?.fullName ?? "User profile"}
          className="w-13 rounded-full mx-auto"
        />
        <h1 className="mt-1 text-center">{user?.fullName}</h1>
        <div className="px-6 mt-5 text-sm text-gray-600 font-medium">
          {navItems.map(({ path, label, Icon }) => (
            <NavLink
              to={path}
              key={path}
              end={path === "/ai"}
              onClick={() => sidebarHandler(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded ${isActive && "bg-linear-to-r from-[#3C81F6] to-[#9234EA] text-white"}`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-4 h-4 ${isActive && "text-white"}`} />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}
