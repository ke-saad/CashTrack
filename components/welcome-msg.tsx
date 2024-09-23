"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = () => {
    const { user, isLoaded } = useUser();
    return (
        <div className="flex flex-col items-center space-y-2 mb-4">
            <h2 className="text-2xl lg:text-4xl text-white font-medium text-center">
                Welcome {isLoaded ? ", " : " "}{user?.firstName} !
            </h2>
            <p className="text-md lg:text-base text-white text-center">
                Here is your current financial situation report.
            </p>
        </div>
    );
};
