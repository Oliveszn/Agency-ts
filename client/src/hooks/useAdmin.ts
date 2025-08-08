import client from "@/lib/sanityclient";
import { getAllAdmins } from "@/lib/sanityqueries";
import type { Admins } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

export const useAdmins = () => {
  const fetchAdmins = async () => {
    const data = await client.fetch(getAllAdmins);
    return data;
  };

  return useQuery<Admins[]>({
    queryKey: ["admins"],
    queryFn: fetchAdmins,
    staleTime: 1000 * 60 * 5, ///tis keeps data fresh for 5 mins
    retry: 2,
  });
};
