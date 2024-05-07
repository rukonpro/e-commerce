"use client"
import Link from 'next/link';
import {profileMenu} from "@/app/components/navbar/profileDrawer";
import Image from "next/image";
import profilePhoto from "@/public/images/profile-photo-1.webp";
import CoverPhoto from "@/public/images/cloth-image-1.jpg";
import React from "react";
import SingInIcon from "@/public/images/sign-in-alt-svgrepo-com.svg";
import SingOut from "@/public/images/sign-out-svgrepo-com.svg";

const Sidebar = () => {

    const isLogin=false;
    return (
        <div
            className={`h-full bg-white text-gray-600 transition-transform duration-300 ease-in-out transform rounded-lg overflow-hidden`}
        >
            <div className="relative w-full">
                <div className=" mb-6  py-2 px-3 h-36 absolute w-full bg-blue-800/50"
                >
                    <div>
                        <h2 className="text-xl font-bold text-white py-2">My Profile</h2>
                        <div className="flex items-center gap-2">
                            <Image src={profilePhoto} alt="Prfile photo"
                                   className="h-16 w-16 rounded-full border-2 border-white"
                            />

                            <div>
                                <h1 className="text-sm font-bold text-white">Rukon Uddin</h1>
                                <p className="text-xs text-gray-100">rukon.pro@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                <Image
                        src={CoverPhoto}
                        alt="Cover Photo"
                        className="w-full h-36 object-fill"
                    />
                </div>
            </div>
            <ul className="p-4">
                {
                    profileMenu.map((menu, index) => {
                        return (
                            <li
                                key={index}
                                className="mb-2">
                                <Link href={menu.path}>
                                    <button className="flex items-center gap-2">
                                        <Image height={20} width={20} src={menu.icon} alt={menu.title}/>
                                        <p className="hover:text-blue-500 hidden md:block">{menu.title}</p>
                                    </button>
                                </Link>
                            </li>
                        )
                    })
                }

                {!isLogin?<li>
                        <Link href="/login" >
                            <button type="button"
                                    className="flex items-center gap-2"
                            >
                                <div className="flex items-center gap-4">
                                    <Image src={SingInIcon} alt='avater' height={20} width={20}/> Sign In
                                </div>
                            </button>
                        </Link>
                    </li>:
                    <li>
                        <button type="button"
                                className="flex items-center gap-2"
                        >
                            <div className="flex items-center gap-4">
                                <Image src={SingOut} alt='avater' className="h-5 w-5"/>
                                Sign Out
                            </div>

                        </button>
                    </li>}
            </ul>
        </div>
    );
};

export default Sidebar;