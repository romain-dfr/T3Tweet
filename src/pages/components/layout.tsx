import { UserButton, useUser } from "@clerk/nextjs";
import type { PropsWithChildren } from "react";

const LayoutPage = (props: PropsWithChildren) => {
  const { user, isLoaded } = useUser();

  return (
    <div className="flex h-screen w-full justify-center">
      <div className="flex w-1/5 items-end p-4">
        {user && isLoaded && (
          <div className="flex w-full items-center justify-between rounded-full p-4 hover:bg-[#e7e9ea] hover:bg-opacity-[0.1]">
            <div className="flex items-center gap-4">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: {
                      width: 40,
                      height: 40,
                    },
                  },
                }}
              />
              <div className="text-sm">
                <p className="font-semibold">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-[#676c70]">@{user.username}</p>
              </div>
            </div>
            <span className="text-2xl">···</span>
          </div>
        )}
      </div>
      <div className="h-full w-3/5 overflow-auto border-x border-[#2f3336] md:max-w-2xl">
        {props.children}
      </div>
      <div className="flex w-1/5"></div>
    </div>
  );
};

export default LayoutPage;
