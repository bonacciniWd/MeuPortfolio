import React, {Suspense} from "react";
import { styles } from "../styles";
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

import BannerHero from "../assets/herobn.png";

import "./Hero.css";




const Hero = () => {
  useEffect(() => {
    const phrases = ["Bem vindos à VRZ Estúdio", "Criamos aplicações web e mobile", "Trazemos seu projeto à vida!"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const textElement = document.getElementById("animated-text");

    

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
         
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white uppercase`}>
           O que você  <span className='text-[#915EFF] uppercase' style={{ margin: '0 10px' }}>quer criar?</span>
          </h1>
          
          

       
        <div>
          <img className="banner-hero" src={BannerHero} alt=""/>  
        </div>           
        </div>
      </div>

   
    </section>
  );
};

export default Hero;
