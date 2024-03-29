import React from 'react';
import Image from 'next/image'
import Logo from "@/public/images/logo-colored.png";
import Avater from "@/public/images/avater.png";
import Love from "@/public/images/love.png";
import Chat from "@/public/images/chat.png";
import Cart from "@/public/images/cart.png";
import Search from "@/app/components/Search/Search";
import MenuIcon from "@/public/images/menu.png"
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className='bg-white px-3 py-3'>
            <div className="grid grid-cols-12 max-w-[1200px] mx-auto py-8 items-center gap-4">
                <div className="h-[46px] w-[150px] md:col-span-2 col-span-6 ">
                  <div className="grid grid-cols-4 items-center">
                     <div className="col-span-1 md:hidden block">
                        <button type="button">
                            <Image src={MenuIcon} alt=""/>
                        </button>
                     </div>
                    <div className="md:col-span-4 col-span-3">
                       <Link href="/">
                           <Image src={Logo} alt="Logo"/>
                       </Link>
                    </div>
                  </div>
                </div>
                <div className="col-span-6 md:block hidden">
                    <Search/>
                </div>

                <div className="grid grid-cols-4 items-center md:col-span-4 col-span-6">

                    <div>
                        <Link href="/">
                            <div className="flex justify-center">
                                <div className="flex justify-center">
                                    <Image src={Chat} alt=''/>
                                </div>
                            </div>
                            <p className="text-sm text-center sm:block hidden">Massage</p>
                        </Link>
                    </div>
                    <div>
                        <Link href="">
                            <div className="flex justify-center">
                                <Image src={Love} alt=''/>
                            </div>
                            <p className="text-sm text-center sm:block hidden">Orders</p>
                        </Link>
                    </div>
                    <div>
                        <Link href="/">
                            <div className="flex justify-center">
                                <Image src={Cart} alt=''/>
                            </div>
                            <p className="text-sm text-center sm:block hidden">My Cart</p>
                        </Link>
                    </div>
                    <div>
                        <Link href="/">
                            <div className="flex justify-center">
                                <Image src={Avater} alt=''/>
                            </div>
                            <p className="text-sm text-center sm:block hidden">Profile</p>
                        </Link>
                    </div>
                </div>

            </div>
            <div className=" md:hidden block ">
                <Search/>
            </div>
        </nav>
    );
};

export default Navbar;