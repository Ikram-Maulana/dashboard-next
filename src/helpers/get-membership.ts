import { MembershipType } from "@/lib/validator/dashboard/membership/membership";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getMembership = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery<MembershipType[], Error>({
    queryKey: ["membership"],
    queryFn: async () => {
      const { data } = await axios.get("/api/dashboard/membership", {
        headers: {
          "Cache-Control": "no-store",
        },
      });
      return data.data;
    },
  });
};
