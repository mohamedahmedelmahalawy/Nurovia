import { useState } from "react";
import type { Creation } from "../interfaces/assetsTypes";
import Markdown from "react-markdown";

interface CreationItemProps {
  item: Creation;
}

export default function CreationItem({ item }: CreationItemProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer">
      <div
        className="flex justify-beteween items-center gap-4"
        onClick={() => setExpanded(!expanded)}
      >
        <div>
          <h2>{item.prompt}</h2>
          <p className="text-gray-500">
            {item.type} - {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>
        <button className="bg-[#EFF6FF] border border-[#BFDBFE] px-4 py-1 rounded-full">
          {item.type}
        </button>
      </div>
      {expanded && (
        <div>
          {item.type === "image" ? (
            <div>
              <img src={item.content} alt="image" className="w-full max0w-md" />
            </div>
          ) : (
            <div className="mt-3 h-full overflow-y-scroll text-sm text-slate-700">
              <div className="reset-tw">
                <Markdown>{item.content}</Markdown>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
