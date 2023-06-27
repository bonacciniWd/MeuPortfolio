import { motion } from "framer-motion";
import { styles } from "../styles";
import Tilt from "react-tilt";

import heroImage from "../images/D..png";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-40 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Olá, sou <span className='text-[#32cd32]'>Denis Bonaccini</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Eu desenvolvo objetos em 3D, Interfaces <br className='sm:block hidden' />
            de usuário e aplicações web.
          </p>
<<<<<<< HEAD
          <Tilt>
          <img src={heroImage} alt="Hero Image" className="mt-2" style={{width:"300px", height:"auto", marginLeft:'380px', borderRadius:'20px', marginTop:'30px'}} />
          </Tilt>

        </div>
      </div>

      

=======
          <p>
          
          </p>
        </div>
      </div>

>>>>>>> 58ee606f91d565849147cb479e57485b41582bb8
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
