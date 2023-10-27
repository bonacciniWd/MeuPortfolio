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

    function typeText() {
      const currentPhrase = phrases[phraseIndex];
      const currentText = currentPhrase.substring(0, charIndex + 1);
      textElement.textContent = currentText;

      if (!isDeleting) {
        charIndex++;
      } else {
        charIndex--;
      }

      if (isDeleting && charIndex === -1) {
        isDeleting = false;

        // Aguarde 3 segundos antes de iniciar a próxima frase
        setTimeout(() => {
          phraseIndex = (phraseIndex + 1) % phrases.length;
          charIndex = 0;
          typeText();
        }, 200);
        return;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
      }

      const speed = isDeleting ? 120 : 210; // Ajuste a velocidade de digitação e exclusão conforme necessário

      setTimeout(typeText, speed);
    }

    typeText();
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
         
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white uppercase`}>
           O que você  <span className='text-[#915EFF] uppercase' style={{ margin: '0 10px' }}>quer criar?</span>
          </h1>
          
          <div className="console">
            <pre>
              <code id="animated-text"></code>
            </pre>
          </div>

        <div style={{marginTop:"12dvh", marginRight:"0%"}}>
          <Canvas>
                   <Suspense fallback={null}>
                       <OrbitControls enableZoom={false} />
                      <ambientLight intensity={0.5} />
                       <directionalLight position={[3, 2, 1]} />
                      <Sphere args={[1, 100, 200]} scale={2.4}>
                           <MeshDistortMaterial
                           color="rgb(10, 244, 80)"
                          attach="material"
                           distort={0.5}
                       speed={3}
                       transparent={true}
                       opacity={0.7}
                    />
                 </Sphere>
              </Suspense>
          </Canvas>
        </div> 
        <div>
          <img className="banner-hero" src={BannerHero} alt=""/>  
        </div>           
        </div>
      </div>

   
    </section>
  );
};

export default Hero;
