// import React, { useState } from "react";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet";
// import { ArrowRight, ArrowLeft } from "lucide-react";

// const AboutAdmin = ({
//   open,
//   setOpen,
//   productDetails,
//   goToPreviousAdmin,
//   goToNextAdmin,
// }) => {
//   return (
//     <Sheet open={open} onOpenChange={setOpen}>
//       <SheetContent className="w-full md:max-w-3xl overflow-auto flex flex-col">
//         <SheetHeader>
//           <SheetDescription className="">
//             <div className="flex flex-col md:flex-row gap-8">
//               <img
//                 src={productDetails.image.replace(/&amp;/g, "&")}
//                 alt={productDetails.name || "Product image"}
//                 className="mt-4 max-w-sm"
//               />

//               <div className="mt-6 text-secColor sm:font-medium md:font-semibold text-xl md:text-3xl lg:text-4xl uppercase">
//                 <span>{productDetails?.name}</span> <br />/
//                 <span>{productDetails?.role}</span>
//               </div>
//             </div>
//           </SheetDescription>
//         </SheetHeader>
//         <SheetDescription className="text-secColor text-3xl font-semibold mt-8">
//           {productDetails.description}
//         </SheetDescription>

//         <div className="pointer-events-auto sticky left-0 right-0 bottom-0 bg-white shadow-lg mt-auto">
//           <div className="flex justify-between items-center h-12">
//             <button onClick={goToPreviousAdmin}>
//               <ArrowLeft />
//             </button>
//             <button onClick={goToNextAdmin}>
//               <ArrowRight />
//             </button>
//           </div>
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default AboutAdmin;
