import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const deleteMembership = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMutation(async (id: number) => {
    const { data } = await axios.delete(
      `/api/dashboard/membership/delete/${id}`,
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
    return data.data;
  });
};
