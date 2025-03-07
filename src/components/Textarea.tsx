import { TextareaHTMLAttributes } from "react";

export default function Textarea({ children, ...props }: { children?: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className="w-full max-w-200 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
      rows={5}
      placeholder="Enter your text here..."
      { ...props }
    >
        {children}
    </textarea>
  );
}
