// import React from 'react'
import { referenceSubtitle, referenceTitle } from "../data";

import imagesOne from '../assets/image-threee.jpg';
import imagesTwo from '../assets/image-twwoo.jpg';
import imagesThree from '../assets/imgg-three.jpg';

import FadeIn from "../components/FadeIn";

const Reference = () => {
    return (
        <div id="reference" className="mb-[160px] px-10 max-w-[1490px] mx-auto">
         <FadeIn delay={0.2} direction='down'>
            <h1 className=" text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
                {referenceTitle}
            </h1>
         </FadeIn>
         <FadeIn delay={0.2} direction='down'>
            <h5 className=" text-lg text-[#4F4F4F] mb-12 text-center xs:text-xl">
                {referenceSubtitle}
            </h5>
         </FadeIn>

        <div className=" flex flex-col md:flex-row gap-8 md:justify-center">
            <FadeIn delay={0.2} direction='right'>
                <div className=" flex flex-col gap-4 w-full">
                    <img src={imagesOne} className="rounded-3xl" alt="" />
                    <img src={imagesTwo} className="rounded-3xl h-[510px] object-cover object-center" alt="" />
                    {/* <img src={imagesThree} className=" w-full lg:w-[50%] rounded-3xl" alt="" /> */}
                </div>
            </FadeIn>
            <FadeIn delay={0.2} direction= 'left'>
                <div className="">
                    <img src={imagesThree} className="rounded-3xl" alt="" />
                </div>
            </FadeIn>
        </div>

        </div>
      );
    };
export default Reference