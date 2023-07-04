"use client";

import Delete from "@/components/dashboard/membership/delete";
import { Button } from "@/ui/button";
import { z } from "zod";

const createActionsColumnType = z.object({
  row: z.object({
    original: z.object({
      id: z.string(),
      name: z.string(),
      address: z.string(),
      createdAt: z.string(),
      updatedAt: z.string().nullable(),
    }),
  }),
});

type ActionsColumnType = z.infer<typeof createActionsColumnType>;

export const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }: ActionsColumnType) => {
      const member = row.original;

      return (
        <div className="flex items-center space-x-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              alert(`Edit ${member.name}`);
            }}
          >
            Edit
          </Button>
          <Delete id={member.id} name={member.name} />
        </div>
      );
    },
  },
];
