import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { awards } from "@/config/aboutconfig";

const AwardsTable = () => {
  return (
    <>
      <Table className="uppercase whitespace-nowrap hidden md:table">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Organization</TableHead>
            <TableHead>Award</TableHead>
            <TableHead>Project</TableHead>
            <TableHead className="text-right">Year</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {awards.map((award, index) => (
            <TableRow key={index} className="border-b-2 border-black">
              <TableCell className="font-medium">
                {award.organization}
              </TableCell>
              <TableCell>{award.award}</TableCell>
              <TableCell>{award.project}</TableCell>
              <TableCell className="text-right">{award.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Mobile stacked layout */}
      <div className="block md:hidden space-y-4 uppercase px-4">
        {/* Mobile Header */}
        <div className="border-b-4 border-black pb-2 font-semibold text-sm">
          <div className="flex justify-between">
            <span>Organization</span>
            <span>Award</span>
          </div>
          <div className="flex justify-between">
            <span>Project</span>
            <span>Year</span>
          </div>
        </div>
        {awards.map((award, index) => (
          <div
            key={index}
            className="border-b-2 border-black pb-2 flex flex-col space-y-1"
          >
            <div className="flex justify-between">
              <span className="font-medium">{award.organization}/</span>
              <span>{award.award}/</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>{award.project}</span>
              <span>{award.year}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AwardsTable;
