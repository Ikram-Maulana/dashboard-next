"use client";

import { useToast } from "@/ui/use-toast";
import { detailMembership } from "@/helpers/detail-membership";
import { updateMembership } from "@/helpers/update-membership";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { Input } from "@/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .nonempty({ message: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters" })
    .max(255, { message: "Name must be at most 255 characters" }),
  address: z.string().nonempty({ message: "Address is required" }),
});

export default function DetailMembership({ id }: { id: string }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
    },
  });
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, error } = detailMembership(id, isOpen);
  const {
    isSuccess: isUpdateSuccess,
    mutate: updateMutate,
    isLoading: isUpdateLoading,
    isError: isUpdateError,
  } = updateMembership();
  const { toast } = useToast();

  const onUpdateHandler = (values: z.infer<typeof formSchema>) => {
    updateMutate({ id, ...values });
  };

  useEffect(() => {
    if (data) {
      form.setValue("name", data.name);
      form.setValue("address", data.address);
    }

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong",
      });
      form.reset();
      setIsOpen(false);
    }
  }, [data, error, form, toast]);

  useEffect(() => {
    if (isUpdateSuccess) {
      toast({
        title: "Success",
        description: "Membership updated successfully",
      });
      setIsOpen(false);
    }

    if (isUpdateError) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong",
      });
    }
  }, [isUpdateSuccess, isUpdateError, toast]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] dark:text-slate-50">
        <DialogHeader>
          <DialogTitle>Edit Membership</DialogTitle>
          <DialogDescription>
            This is non sensitive dashboard page for edit membership
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onUpdateHandler)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Jl. Jendral Sudirman No. 1"
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={isLoading || isUpdateLoading}>
                {isLoading || isUpdateLoading ? (
                  <LoaderIcon className="w-4 h-4 mr-2 animate-spin" />
                ) : null}
                Update
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
