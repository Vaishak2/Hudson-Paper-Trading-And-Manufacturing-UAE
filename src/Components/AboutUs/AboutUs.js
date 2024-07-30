import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function AboutUs() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.1, // Trigger when 10% of the element is in view
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <div id='about' 
          
         className="font-sans py-24 text-center tracking-tighter cursor-default">
            <h2 className="text-secondary-color text-[40px] font-bold">We</h2>
            <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0, translateY: 50 },
                visible: { opacity: 1, translateY: 0 },
            }}
            transition={{
                type: "spring",
                duration: 0.5,
                damping: 9,
                delay: 0.1,
            }}
            className="mt-4 md:text-[24px] text-[18px] max-w-4xl mx-auto font-light sm:leading-loose leading-normal sm:tracking-wider tracking-normal"
        >
            <motion.span
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0, translateY: 50 },
                    visible: { opacity: 1, translateY: 0 },
                }}
                transition={{
                    type: "spring",
                    duration: 0.5,
                    damping: 8,
                    delay: 0.3,
                }}
                className='text-primary-color'
            >
                We are a solutions-focused company with a passion for catering
            </motion.span>
            <motion.span
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0, translateY: 50 },
                    visible: { opacity: 1, translateY: 0 },
                }}
                transition={{
                    type: "spring",
                    duration: 0.5,
                    damping: 8,
                    delay: 0.5,
                }}
                className='text-primary-color hover:text-primary-color transition duration-500'
            >
                <br />premium printing papers, boards, and self-adhesives, offering the <br />best solutions to our customers in commercial print, specialty <br />
            </motion.span>
            <motion.span
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0, translateY: 50 },
                    visible: { opacity: 1, translateY: 0 },
                }}
                transition={{
                    type: "spring",
                    duration: 0.5,
                    damping: 8,
                    delay: 0.7,
                }}
                className='text-primary-color'
            >
                packaging, and labelling.
            </motion.span>
        </motion.div>

        </div>
    );
}

export default AboutUs;
