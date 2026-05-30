import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { ArrowRight, Loader } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/react";
export default function Navbar() {
  const navigate = useNavigate();
  const { user, isLoaded } = useUser();
  const { openSignIn } = useClerk();

  if (!isLoaded) {
    return <Loader />;
  }
  return (
    <div className="fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32 cursor-pointer">
      <img
        src={assets.logo}
        alt="logo"
        className="w-32 sm:2-44 cursor-pointer"
        onClick={() => navigate("/")}
      />
      {user ? (
        <UserButton />
      ) : (
        <button
          onClick={() => openSignIn()}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
        >
          Get Started <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
