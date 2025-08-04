import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import AwardsTable from "./AboutTable";

type AboutAwardsProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const AboutAwards = ({ open, setOpen }: AboutAwardsProps) => {
  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="w-full h-full sm:max-w-[80%] sm:h-auto overflow-auto">
          <SheetHeader>
            <SheetTitle>
              <div>
                <figure className="bg-secColor h-1 p-0 m-0 align-baseline border-0 mt-6"></figure>
              </div>
              <div className="my-20 flex justify-end">
                <h1 className="uppercase text-4xl font-bold">
                  B®/Awrds.10 - 24©
                </h1>
              </div>
            </SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <AwardsTable />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AboutAwards;
