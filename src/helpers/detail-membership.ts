import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const detailMembership = (id: string, isClicked: boolean) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useQuery(
    ["detail-membership", id],
    async () => {
      const { data } = await axios.get(
        `/api/dashboard/membership/detail/${id}`,
        {
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
      return data.data;
    },
    {
      enabled: isClicked,
    }
  );
};
