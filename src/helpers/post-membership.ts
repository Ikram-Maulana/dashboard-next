import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters" })
    .max(255, { message: "Name must be at most 255 characters" }),
  address: z.string().nonempty({ message: "Address is required" }),
});

export const postMembership = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMutation(async (newData: z.infer<typeof formSchema>) => {
    const { data } = await axios.post(
      "/api/dashboard/membership/store",
      newData,
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
    return data.data;
  });
};
