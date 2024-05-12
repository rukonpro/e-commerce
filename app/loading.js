import React from 'react';
import LoadingIcon from "@/public/images/loading-gray-color-svgrepo-com.svg";
import Image from "next/image";
const Loading = () => {
    return (
        <div className="w-screen flex justify-center items-center">
            <div className="flex items-center gap-4 w-[300px] ">
                <Image src={LoadingIcon} height={100} width={100} alt="loading icon" className="animate-spin"/>
                <h1 className="text-3xl text-gray-600"> Loading...</h1>
            </div>
        </div>
    );
};

export default Loading;