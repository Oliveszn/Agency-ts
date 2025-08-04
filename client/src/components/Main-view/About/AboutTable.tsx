import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AwardsTable = () => {
  const awards = [
    {
      organization: "Css awards",
      award: "site of the day",
      project: "luminar",
      year: "2023",
    },
    {
      organization: "Webby Awards",
      award: "Agency of the Year",
      project: "",
      year: "2023",
    },
    {
      organization: "Webby Awards",
      award: "Honoree",
      project: "Vizio",
      year: "2023",
    },
    {
      organization: "Webby Awards",
      award: "Honoree",
      project: "Vizio",
      year: "2023",
    },
    {
      organization: "Webby Awards",
      award: "Honoree",
      project: "google store",
      year: "2023",
    },
    {
      organization: "Webby Awards",
      award: "Honoree",
      project: "kfc",
      year: "2023",
    },
    {
      organization: "Webby Awards",
      award: "Honoree",
      project: "design with reach",
      year: "2023",
    },
    {
      organization: "Webby Awards",
      award: "Honoree",
      project: "lulumelon studio",
      year: "2023",
    },
    {
      organization: "Webby Awards",
      award: "nominee",
      project: "webex",
      year: "2023",
    },
    {
      organization: "Webby Awards",
      award: "nominee",
      project: "crafted",
      year: "2023",
    },
    {
      organization: "One show",
      award: "merit award",
      project: "moves",
      year: "2022",
    },
    {
      organization: "D&AD",
      award: "Shortlist",
      project: "culture manual",
      year: "2021",
    },
    {
      organization: "comm arts",
      award: "winner",
      project: "crafted",
      year: "2022",
    },
    {
      organization: "the fwa",
      award: "site of the day",
      project: "moves",
      year: "2022",
    },
    {
      organization: "the fwa",
      award: "site of the year",
      project: "nixon",
      year: "2021",
    },
    {
      organization: "W3 Awards",
      award: "best of show",
      project: "google awards",
      year: "2020",
    },
    {
      organization: "W3 Awards",
      award: "gold",
      project: "google awards",
      year: "2020",
    },
    {
      organization: "W3 Awards",
      award: "silver",
      project: "google awards",
      year: "2020",
    },
  ];
  return (
    <Table className="uppercase whitespace-nowrap">
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
            <TableCell className="font-medium">{award.organization}</TableCell>
            <TableCell>{award.award}</TableCell>
            <TableCell>{award.project}</TableCell>
            <TableCell className="text-right">{award.year}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AwardsTable;
