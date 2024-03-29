import React from 'react';
import OfferCard from './OfferCard';
import OfferTiming from './OfferTiming';

const Offers = () => {
    const products=[
        {
            title:"Smart watches",
            discount:50,
            image:""
        },
        {
            title:"Smart watches",
            discount:50,
            image:""
        },
        {
            title:"Smart watches",
            discount:50,
            image:""
        },
        {
            title:"Smart watches",
            discount:50,
            image:""
        },
        {
            title:"Smart watches",
            discount:50,
            image:""
        },
        {
            title:"Smart watches",
            discount:50,
            image:""
        },
        {
            title:"Smart watches",
            discount:50,
            image:""
        },
    ]
    return (
        <div className="sm:px-3">
            <div className='max-w-[1200px] mx-auto mt-5 '>
                <div className='grid grid-cols-12 gap-[2px]  sm:rounded-lg  bg-gray-200 border-2 border-gray-200 overflow-hidden'>
                    <div className="md:col-span-3 col-span-12  bg-white overflow-hidden  ">
                        <OfferTiming/>
                    </div>
                    <ul className=' md:col-span-9 col-span-12 flex gap-0.5  w-full overflow-x-auto overscroll-x-none overflow-visible   touch-pan-x '>
                        {
                            products?.map((product,index)=>{
                                return (
                                    <li key={index} className='p-2  bg-white cursor-pointer  '>
                                        <OfferCard/>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Offers;