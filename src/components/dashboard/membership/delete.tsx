/* eslint-disable react-hooks/exhaustive-deps */
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

const Delete = ({ id, name }: { id: string; name: string }) => {
  const { isSuccess, mutate, isLoading, isError } = deleteMembership();
  const { toast } = useToast();

  const onDeleteHandler = (id: number) => {
    mutate(id);
  };

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Membership deleted",
        description: `Membership ${name} deleted successfully`,
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
            This action cannot be undone. This will permanently delete your data
            from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              onDeleteHandler(parseInt(id));
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Delete;
