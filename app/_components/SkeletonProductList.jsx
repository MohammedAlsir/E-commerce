import React from "react";

function SkeletonProductList() {
  return (
    <div className="animate-pulse">
      <p className="bg-slate-200 w-[200px] h-[30px] mx-[80px] my-[10px]"></p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 px-10 md:px-20">
        <div className="w-[286px] h-[250px] bg-slate-200 rounded-md"></div>
        <div className="w-[286px] h-[250px] bg-slate-200 rounded-md"></div>
        <div className="w-[286px] h-[250px] bg-slate-200 rounded-md"></div>
        <div className="w-[286px] h-[250px] bg-slate-200 rounded-md"></div>
        <div className="w-[286px] h-[250px] bg-slate-200 rounded-md"></div>
        <div className="w-[286px] h-[250px] bg-slate-200 rounded-md"></div>
        <div className="w-[286px] h-[250px] bg-slate-200 rounded-md"></div>
        <div className="w-[286px] h-[250px] bg-slate-200 rounded-md"></div>
      </div>
    </div>
  );
}

export default SkeletonProductList;
