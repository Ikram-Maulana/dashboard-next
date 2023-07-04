import { z } from "zod";

export const createMembershipType = z.object({
  id: z.string(),
  name: z.string(),
  address: z.string(),
  createdAt: z.string(),
  updatedAt: z.string().nullable(),
});

export type MembershipType = z.infer<typeof createMembershipType>;
