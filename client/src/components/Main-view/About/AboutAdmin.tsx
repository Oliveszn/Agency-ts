import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ArrowRight, ArrowLeft } from "lucide-react";
import type { Admins } from "@/utils/types";
import { PortableText } from "@portabletext/react";
import { useNavigate } from "react-router-dom";

interface AboutAdminProps {
  admin: Admins;
  open: boolean;
  setOpen: (open: boolean) => void;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  admins: Admins[];
}

const AboutAdmin = ({
  admin,
  open,
  setOpen,
  currentIndex,
  setCurrentIndex,
  admins,
}: AboutAdminProps) => {
  const navigate = useNavigate();

  const goToNextAdmin = () => {
    ///notice the hash, yeah hash based routing
    const nextIndex = (currentIndex + 1) % admins.length;
    setCurrentIndex(nextIndex);
    navigate(`/about#${admins[nextIndex].slug.current}`, { replace: true });
  };

  const goToPreviousAdmin = () => {
    const prevIndex = (currentIndex - 1 + admins.length) % admins.length;
    setCurrentIndex(prevIndex);
    navigate(`/about#${admins[prevIndex].slug.current}`, { replace: true });
  };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-full md:max-w-3xl overflow-auto flex flex-col p-6">
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <div className="">
          <div className="flex flex-col md:flex-row gap-8">
            {admin.images?.[0] && (
              <img
                src={admin.images[0].asset.url.replace(/&amp;/g, "&")}
                alt={admin.name || "Admin image"}
                className="mt-4 max-w-sm"
              />
            )}

            <div className="mt-6 text-secColor sm:font-medium md:font-semibold text-xl md:text-3xl lg:text-4xl uppercase">
              <span>{admin?.name}</span> <br />/<span>{admin?.role}</span>
            </div>
          </div>
        </div>

        <div className="text-secColor text-3xl font-semibold mt-8">
          <PortableText value={admin.bio} />
        </div>

        <div className="pointer-events-auto sticky left-0 right-0 bottom-0 bg-white shadow-lg mt-auto">
          <div className="flex justify-between items-center h-12">
            <button onClick={goToPreviousAdmin} className="cursor-pointer">
              <ArrowLeft />
            </button>
            <button onClick={goToNextAdmin} className="cursor-pointer">
              <ArrowRight />
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AboutAdmin;
