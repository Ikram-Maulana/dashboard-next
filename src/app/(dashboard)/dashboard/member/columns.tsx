/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { deleteMembership } from "@/helpers/delete-membership";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/ui/alert-dialog";
import { Button } from "@/ui/button";
import { useToast } from "@/ui/use-toast";
import { LoaderIcon } from "lucide-react";
import { useEffect } from "react";
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
      const { isSuccess, mutate, isLoading, isError } = deleteMembership();
      const { toast } = useToast();

      const onDeleteHandler = (id: number) => {
        mutate(id);
      };

      useEffect(() => {
        if (isSuccess) {
          toast({
            title: "Membership deleted",
            description: `Membership ${member.name} deleted successfully`,
          });
        }

        if (isError) {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Something went wrong",
          });
        }
      }, [isSuccess, isError, toast]);

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
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size="sm" variant="outline">
                {isLoading ? (
                  <LoaderIcon className="w-4 h-4 mr-2 animate-spin" />
                ) : null}
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    onDeleteHandler(parseInt(member.id));
                  }}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
