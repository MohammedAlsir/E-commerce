import React from "react";

function SkeletonProductInfo() {
  return (
    <div className="animate-pulse">
      <div className="w-[200px] h-[20px] bg-slate-200 mb-2"></div>
      <div className="w-[50px] h-[20px] bg-slate-200 mb-[20px]"></div>

      <div className="w-[300px] h-[20px] bg-slate-200 mb-2"></div>
      <div className="w-[280px] h-[20px] bg-slate-200 mb-2"></div>

      <div className="w-[180px] h-[20px] text-[11px] bg-slate-200 flex gap-2 mt-2 items-center"></div>
      <div className="w-[100px] h-[20px] bg-slate-200 mt-4"></div>
      <div className="rounded-md mt-3 bg-slate-200 w-[180px] h-[50px] shadow "></div>
    </div>
  );
}

export default SkeletonProductInfo;
