"use client";

import { getMembership } from "@/helpers/get-membership";
import { FC } from "react";
import { DataTable } from "@/components/data-table";
import { columns } from "@/app/(dashboard)/dashboard/member/columns";

const Membership: FC = () => {
  const { data, isLoading, error } = getMembership();

  if (isLoading) {
    return <p className="leading-7 text-center">Loading...</p>;
  }

  if (error) {
    return <p className="leading-7 text-center">Error, data not found</p>;
  }

  return <>{data && <DataTable columns={columns} data={data} />}</>;
};

export default Membership;
