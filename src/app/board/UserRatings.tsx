"use client";

import { useUserRatings } from "@/api/user.services";
import { Loading } from "@/components/loading";
import UserCard from "@/components/UserCard";
import { UserType } from "@/types/user";
import React, { useMemo } from "react";

function UserRatings() {
  const { data, isLoading, isError } = useUserRatings();
  const USER_RATINGS = useMemo(() => {
    if (!isLoading && !isError && data) {
      return data?.users;
    }
    return [];
  }, [data, isLoading, isError]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return "Something Went Wrong!";
  }

  return (
    <>
      {USER_RATINGS.map((usr: UserType) => (
        <UserCard
          key={usr?._id}
          name={usr?.name}
          avatar={usr?.avatar}
          rating={usr?.rating}
        />
      ))}
    </>
  );
}

export default React.memo(UserRatings);
