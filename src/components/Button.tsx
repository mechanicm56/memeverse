import React from "react";

function Button({ icon, children }: { icon?: React.ReactNode, children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center">
      {icon}
      {children}
    </button>
  );
}

export default Button;
