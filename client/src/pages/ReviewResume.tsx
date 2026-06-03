import { FileText, Sparkles } from "lucide-react";
import { useState, type FormEventHandler } from "react";

export default function ReviewResume() {
  const [input, setInput] = useState<File | null>(null);
  const onSubmitHandler = async (e: FormEventHandler<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="h-full overflow-y-scroll p-6 flex flex-wrap content-start items-start gap-4 text-slate-700">
      {/* Left Column */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#00DA83]" />
          <h1>Resume Review</h1>
        </div>
        <p className="mt-6 text-sm font-medium">upload Resume</p>
        <input
          type="file"
          onChange={(e) => setInput(e.target.files?.[0] ?? null)}
          accept="application/pdf"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600 cursor-pointer"
          required
        />
        <p className="text-xm text-gray-500 font-light mt-1">
          Supports pdf Resume only
        </p>

        <button className="w-full flex justify-center items-center gap-2 bg-linear-to-r from-[#00DA83] to-[#009BB3] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          <FileText className="w-5" />
          Remove Background
        </button>
      </form>
      {/* Right Column */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-150">
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-[#00DA83]" />
          <h1 className="text-xl font-semibold">Analysis Results</h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <FileText className="w-9 h-9" />
            <p>
              Upload an image and click “ Remove Background ” to get started
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
