import { z } from "zod";

export const apiRequestValidator = z.object({
  name: z.string().min(3).max(255),
  address: z.string().min(3).max(255),
});

export const apiRequestResponse = z.object({
  error: z.string().optional().nullable(),
  data: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      address: z.string(),
      createdAt: z.date(),
      updatedAt: z.date().nullable(),
    })
  ),
});

export type ApiRequest = z.infer<typeof apiRequestValidator>;
