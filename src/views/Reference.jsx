// import React from 'react'
import { referenceSubtitle, referenceTitle } from "../data";

import imagesOne from '../assets/image-one.svg';
import imagesTwo from '../assets/image-two.svg';
import imagesThree from '../assets/image-three.svg';

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
                <div className=" flex flex-col gap-8">
                    <img src={imagesOne} alt="" />
                    <img src={imagesTwo} alt="" />
                </div>
            </FadeIn>
            <FadeIn delay={0.2} direction= 'left'>
                <div>
                    <img src={imagesThree} alt="" />
                </div>
            </FadeIn>
        </div>

        </div>
      );
    };
export default Reference