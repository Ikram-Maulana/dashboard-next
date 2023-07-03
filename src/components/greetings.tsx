import { currentUser } from "@clerk/nextjs";
import { FC } from "react";

const greetings: FC = async () => {
  const user = await currentUser();

  return (
    <h1 className="text-4xl font-extrabold tracking-tight text-center scroll-m-20 lg:text-5xl">
      Hi, {user?.firstName} {user?.lastName}
    </h1>
  );
};

export default greetings;
