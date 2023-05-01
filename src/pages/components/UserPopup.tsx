import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export const UserPopup = () => {
  const { user, isLoaded } = useUser();
  const [popup, setPopup] = useState(false);

  const handlePopup = () => {
    setPopup(!popup);
  };

  return (
    <>
      <UserButton />
      {user && isLoaded && (
        <div className="relative">
          <button
            onClick={handlePopup}
            className="flex w-full items-center justify-between rounded-full p-4 hover:bg-[#e7e9ea] hover:bg-opacity-[0.1]"
          >
            <div className="flex items-center gap-4">
              <Image
                src={user.profileImageUrl}
                alt="Profile image"
                className="rounded-full"
                width={40}
                height={40}
                unoptimized={true}
              />
              <div className="text-sm">
                <p className="font-semibold">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-[#676c70]">@{user.username}</p>
              </div>
            </div>
            <span className="text-2xl">···</span>
          </button>
          {popup && (
            <motion.div
              initial={{ opacity: 0, y: "-1vh" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.1 }}
              className="absolute -top-16 left-0"
            >
              <div className="rounded-lg border bg-white p-4 shadow-lg">
                <p className="text-sm text-gray-700">Popup content here</p>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </>
  );
};
