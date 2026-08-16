import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react"
import './Hero.css'
import { MdSlowMotionVideo } from "react-icons/md";
import { RxVideo } from "react-icons/rx";
import { GrDocumentTest } from "react-icons/gr";
import { PiMouseBold } from "react-icons/pi";
import { MdArrowForward } from "react-icons/md";
import { IoShieldCheckmark } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";
import { MdOutlineVerified } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { PiBuildingOfficeLight } from "react-icons/pi";

import Logo from '../../img/Logo.png'
import img1 from '../../img/img1.jpg'
import img3 from '../../img/img-sec3.jpg'
import img33 from '../../img/img-sec33.jpg'
import img4 from '../../img/img-sec4.jpg'
import img44 from '../../img/img-sec44.jpg'
import img444 from '../../img/img-sec444.jpg'

import img5 from '../../img/img-sec5.jpg'
import img51 from '../../img/img51.png'
import img52 from '../../img/img52.png'
import img53 from '../../img/img53.png'
import img54 from '../../img/img54.png'
import img55 from '../../img/img55.png'

import img6 from '../../img/heart.png'
import img66 from '../../img/Oncology.png'
import img666 from '../../img/derm.png'
import img61 from '../../img/diabetes.png'
import img62 from '../../img/Anti.png'
import img63 from '../../img/neurology.png'
import map from '../../img/map.jpg'

export default function Hero() {
  const heroContainerRef = useRef(null);

  // تتبع السكرول الخاص بالهيرو
  const { scrollYProgress } = useScroll({
    target: heroContainerRef,
    offset: ["start start", "end end"]
  });
const hideOnScroll = useTransform(scrollYProgress, [0, 0], [1, 0]);


  const imageScale = useTransform(scrollYProgress, [0, 3], [1, 7]); // تكبير الصورة 4 أضعاف
  const imageTranslateX = useTransform(scrollYProgress, [0, 0.6], ["0%", "-25vw"]); // سحب الصورة للنص
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]); // إخفاء باقي العناصر

  const steps = [
    {
      id: "01",
      title: "Research",
      desc: "Synthesizing innovative compounds for unmet medical needs.",
      img: img5
    },
    {
      id: "02",
      title: "Raw Materials",
      desc: "Ethical sourcing of high-purity active pharmaceutical ingredients.",
      img: img51
    },
    {
      id: "03",
      title: "Manufacturing",
      desc: "Advanced synthesis and formulation under sterile conditions.",
      img: img52
    },
    {
      id: "04",
      title: "Quality Control",
      desc: "Multi-tier testing for purity, stability, and efficacy.",
      img: img53
    },
    {
      id: "05",
      title: "Packaging",
      desc: "Multi-tier testing for purity, stability, and efficacy.",
      img: img54
    },
    {
      id: "06",
      title: "Distribution",
      desc: "Multi-tier testing for purity, stability, and efficacy.",
      img: img55
    }
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full bg-white">
      
      {/* 1. قسم الهيرو والتكبير مع السكرول */}
      <div ref={heroContainerRef} className="relative h-[250vh] w-full">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden bg-white">
          
          {/* الكلاسات الأصلية بتاعتك هنا بدون تعديل */}
          <div className='container flex z-0 relative'>
            
            <motion.div 
              style={{ opacity: contentOpacity }}
              className='tit-hero py-15'
            >
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <p className='p1'>SINCE 1996</p>
                <h1>Every Great Medicine Begins With <br/><span>One Vision.</span></h1>
                <p className='p2'>For nearly three decades, Marcyrl has transformed scientific research into trusted pharmaceutical solutions that improve millions of lives across local and international markets.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                className="flex items-center gap-4 my-6"
              >
                <button className='btn1'>Explore Our Story</button>
                <button className='btn2 flex items-center my-5'>
                  <MdSlowMotionVideo className='icon-hero -mx-5'/>Watch Manufacturing
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              >
                <p className='line'></p>
                <div className="stat-hero">
                  <div className="stat-item">
                    <span className='sp1'>30+</span><br />
                    <span className='sp11'>YEARS</span>
                  </div>
                  <div className="stat-item">
                    <span className='sp1'>120+</span><br />
                    <span className='sp11'>PRODUCTS</span>
                  </div>
                  <div className="stat-item">
                    <span className='sp1'>40+</span><br />
                    <span className='sp11'>MARKETS</span>
                  </div>
                  <div className="stat-item">
                    <span className='sp1'>EU GMP</span><br />
                    <span className='sp11'>CERTIFIED</span>
                  </div>   
                </div>
              </motion.div>
            </motion.div>

            {/* الحاوية الأصلية بتاعتك بدون تغيير أبعاد */}
            <motion.div 
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="img-hero"
            >
              {/* الصورة هتأخد الكلاس بتاعك img1-hero وهيطبق عليها الـ Scale من Motion */}
              <motion.img 
                style={{ 
                  scale: imageScale,
                  x: imageTranslateX,
                  originX: 0.5,
                  originY: 0.5
                }}
                src={img1} 
                alt="" 
                className='img1-hero'
              />

              <motion.div style={{ opacity: hideOnScroll }} className="info-img">
                <p className="icon-info-img"><GrDocumentTest className='icon-img'/></p>
                <h4>Scientific Excellence</h4>
                <p className='p2'>Validated clinical research since inception. </p>
              </motion.div>        
            </motion.div>

            {/* زر الـ Scroll في مكانه الطبيعي */}
            <motion.div style={{ opacity: hideOnScroll }} className="scroll">
              <p className="tit-scroll ">SCROLL TO DISCOVER</p>
              <PiMouseBold className='icon-scroll'/>
            </motion.div> 

          </div>
        </div>
      </div>

      <div className="all-sec relative z-20 bg-white my-35">
        <div className='container flex py-16'>
          <div className="section grid grid-flow-col grid-rows-3 gap-4 z-1 ">
            <div className="info-bulding row-span-3">
              <p className="p-bulding text-[16px]">WHO WE ARE</p>
              <h2>Building Trust <br /> through Science.</h2>
              <p className='p11-bulding'>
                At Marcyrl, our legacy is built on the rigorous pursuit of
                quality. We believe that pharmaceutical manufacturing is
                more than a process—it is a responsibility to the patients
                who rely on our treatments every day. Our leadership
                continues to invest in the latest technologies to ensure
                global standards are met at every stage.
              </p>

              <motion.div 
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex items-center gap-2 cursor-pointer w-fit"
              >
                <p className='p111-bulding'>Discover Our Journey</p>
                <MdArrowForward className='icon-bulding'/>
              </motion.div>
            </div>

            <div className="section-img flex gap-4 mx-25">
              <motion.img 
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                src={img3} 
                alt="" 
                className='img3'
              />

              <div className="flex flex-col gap-4">
                <motion.img 
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                  src={img33} 
                  alt="" 
                  className='img33'
                />

                <motion.div 
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                  className="border-img"
                >
                  <IoShieldCheckmark className='icon-Checkmark'/>
                  <h4>Quality First</h4>
                  <p>Rigorous testing protocol sexceeding international standards.</p>
                </motion.div>
              </div>
            </div> 
          </div>
        </div>

        <div className='relative'>
          <div className="section4">
            <div className="container relative">
              <div className="tit-sec4">
                <h2>Every journey has a <br /> beginning.</h2>
                <p>A legacy forged in precision, charting the path of healthcare evolution.</p>
              </div>
              <div className="img-left">
                <div className="info-img-left">
                  <p className="num-year">1996</p>
                  <h4>Foundation</h4>
                  <p className='p-info-img'>Marcyrl is established with a vision to revolutionize the regional pharmaceutical supply chain, focusing on high-need therapeutic categories.</p>
                  <img src={img4} alt="" className='img-sec4 h-[279px] w-[540px] ' draggable='false'/>
                </div>
                <div className="info2-img-left">
                  <p className="num-year">Today</p>
                  <h4>Global Reach</h4>
                  <p className='p2-info-img'>Operating across 40+ markets with EU GMP certifications,Marcyrl stands as a beacon of excellence in the international healthcare ecosystem.</p>

                  <div className="line-sec4 absolute"></div>
                  <div className="img-right">
                    <img src={img44} alt="" className='img-sec4 w-[540px] h-[279px]'/>
                    <p className="num2-year">2013</p>
                    <h4 className='mx-75 my-15 w-100'>R&D Acceleration</h4>
                    <p className="p-right">
                      Massive investment in specialized research centers leads to the first portfolio of proprietary complex generics and hormonal therapies.
                    </p>
                    <img src={img444} alt="" className='img4-sec4 w-[540px] h-[279px]'/>
                  </div>
                </div>
              </div>  
            </div>
          </div>

          <motion.div className="section5 bg-[#030320] w-[100%] h-[1000px]">
            <div className="container">
              <div className="info-sec5">
                <p className='text-[white] tracking-[1.4px] py-20'>PROCESS INNOVATION</p>
                <div className='flex justify-between'>
                  <h2 className='text-[48px] text-[#FFFFFF] my-[-80px] tracking-[-1.44px]'>Precision in Every Step.</h2> 
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='rounded-[999px] w-[193px] h-[40px] border border-[#FFFFFF] text-[#FFFFFF] my-[-50px] cursor-pointer'
                  >
                    Tour Our Facilities
                  </motion.button>
                </div>

                <div className="relative w-[100%] h-[500px] my-20 rounded-[40px] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={activeStep}
                      src={steps[activeStep].img} 
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className='w-full h-full object-cover absolute inset-0' 
                    />
                  </AnimatePresence>
                </div>
              </div>

              <div className="stat-sec5 text-[#ffff] flex justify-between gap-4">
                {steps.map((step, index) => (
                  <motion.div 
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    className={`stat-item-sec5 cursor-pointer relative pb-4 transition-opacity duration-300 ${
                      activeStep === index ? 'opacity-100' : 'opacity-40 hover:opacity-80'
                    }`}
                  >
                    <span className='sp-sec5'>{step.id}</span><br />
                    <span className='sp-sec55 text-[24px]'>{step.title}</span><br />
                    <span className="sp-sec555 text-[12px] leading-[16.8px]">{step.desc}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="section6 py-[100px] bg-[#0001]">
            <div className="container">
                <div className="head-sec6 text-center py-20">
                    <h2 className='text-[48px] text-[#2D2E80]'>Expertise Across Horizons.</h2>
                    <p className='w-[672px] mx-auto text-[16px] text-[#575E70]'>From chronic management to acute care, our therapeutic portfolio is designed to improve quality of life across diverse medical specialities.</p>
                </div>
                <div className="content-sec6 my-4 flex gap-4">
                    <div className="info-content w-[392px] h-[350px] bg-[#ffff] rounded-[40px] transition duration-150 hover:scale-105 hover:shadow-xl/30">
                        <img src={img6} alt="" className='img-sec6 w-[64px] h-[64px]'/>  
                        <h4 className='h4-content text-[24px] text-[#2D2E80]'>Cardiology</h4>
                        <p className='p-content w-[311px] h-[111px]'>Advancing heart health through precision management of hypertension and chronic coronary conditions.</p>
                        <p className='p2-content text-[14px] text-[#2D2E80] relative cursor-pointer'>View Portfolio <MdOutlineArrowOutward className='absolute top-1 left-22'/></p>
                    </div>

                    <div className="info-content w-[392px] h-[350px] bg-[#ffff] rounded-[40px] transition duration-150 hover:scale-105 hover:shadow-xl/30">
                        <img src={img66} alt="" className='img-sec6 w-[64px] h-[64px]'/>  
                        <h4 className='h4-content text-[24px] text-[#2D2E80]'>Oncology</h4>
                        <p className='p-content w-[311px] h-[111px]'>Targeted therapies designed to disrupt cancer progression while preserving patient well-being.</p>
                        <p className='p2-content text-[14px] text-[#2D2E80] relative cursor-pointer'>View Portfolio <MdOutlineArrowOutward className='absolute top-1 left-22'/></p>
                    </div>

                    <div className="info-content w-[392px] h-[350px] bg-[#ffff] rounded-[40px] transition duration-150 hover:scale-105 hover:shadow-xl/30">
                        <img src={img666} alt="" className='img-sec6 w-[64px] h-[64px]'/>  
                        <h4 className='h4-content text-[24px] text-[#2D2E80]'>Dermatology</h4>
                        <p className='p-content w-[311px] h-[111px]'>Innovative topical and systemic solutions for complex dermatological disorders and skin health.</p>
                        <p className='p2-content text-[14px] text-[#2D2E80] relative cursor-pointer'>View Portfolio <MdOutlineArrowOutward className='absolute top-1 left-22'/></p>
                    </div>  
                </div>
                <div className="content-sec6 flex gap-4">
                    <div className="info-content w-[392px] h-[350px] bg-[#ffff] rounded-[40px] transition duration-150 hover:scale-105 hover:shadow-xl/30">
                        <img src={img61} alt="" className='img-sec6 w-[64px] h-[64px]'/>  
                        <h4 className='h4-content text-[24px] text-[#2D2E80]'>Diabetes</h4>
                        <p className='p-content w-[311px] h-[111px]'>Holistic glycemic control solutions ranging from oral hypoglycemics to insulin management tools.</p>
                        <p className='p2-content text-[14px] text-[#2D2E80] relative cursor-pointer'>View Portfolio <MdOutlineArrowOutward className='absolute top-1 left-22'/></p>
                    </div>

                    <div className="info-content w-[392px] h-[350px] bg-[#ffff] rounded-[40px] transition duration-150 hover:scale-105 hover:shadow-xl/30">
                        <img src={img62} alt="" className='img-sec6 w-[64px] h-[64px]'/>  
                        <h4 className='h4-content text-[24px] text-[#2D2E80]'>Anti-Infectives</h4>
                        <p className='p-content w-[311px] h-[111px]'>Combating global resistance with high-potency antibiotics and broad-spectrum antivirals.</p>
                        <p className='p2-content text-[14px] text-[#2D2E80] relative cursor-pointer'>View Portfolio <MdOutlineArrowOutward className='absolute top-1 left-22'/></p>
                    </div>

                    <div className="info-content w-[392px] h-[350px] bg-[#ffff] rounded-[40px] transition duration-150 hover:scale-105 hover:shadow-xl/30">
                        <img src={img63} alt="" className='img-sec6 w-[64px] h-[64px]'/>  
                        <h4 className='h4-content text-[24px] text-[#2D2E80]'>Neurology</h4>
                        <p className='p-content w-[311px] h-[111px]'>Pioneering treatments for neurological disorders, enhancing cognitive health and motor function.</p>
                        <p className='p2-content text-[14px] text-[#2D2E80] relative cursor-pointer'>View Portfolio <MdOutlineArrowOutward className='absolute top-1 left-22'/></p>
                    </div>
                </div>
            </div>
          </div>

          <div className="section7 bg-[#E2E3E1] w-[100%] h-[740px]">
            <div className="container flex">
                <div className="content-sec7 w-[50%] h-[100%] relative">
                    <h2 className='text-[48px] text-[#2D2E80] font-(family-name:--inter) my-25 w-[350px] h-[166px] leading-[55.2px]'>Quality Is Not A Step. It Is Our Standard.</h2>
                    <p className='w-[498px] h-[103px] text-[16px] text-[#575E70]'>Our facilities are certified under the most stringent international regulations, including EU GMP and ISO standards. This dedication ensures that every product leaving Marcyrl is a promise of quality kept.</p>
                    <MdOutlineVerified className='w-[22px] h-[21px] text-[#2D2E80]'/> <p className='absolute top-[465px] left-[35px] text-[14px] text-[#2D2E80]'>EU GMP Certified</p>
                    <p className='absolute top-[483px] left-[35px] text-[12px]'>Meeting European standards for manufacturing excellence.</p>
                  
                    <FaGlobeAmericas className='w-[20px] h-[20px] text-[#2D2E80] my-[40px]'/> <p className='absolute top-[528px] left-[35px] text-[14px] text-[#2D2E80]'>40+ Global Markets </p>
                    <p className='absolute top-[545px] left-[35px] text-[12px]'>Exporting health solutions to three continents.</p>    
                </div>
                <div className="border-img-sec7 my-25 w-[707px] h-[495px] bg-white rounded-[24px] relative">
                    <img src={map} alt="" className="w-[90%] h-[90%] border-0 my-[4%] mx-auto hover:grayscale-500"/>
                    <p className='absolute top-[250px] left-[175px] text-[#2D2E80] text-[14px]'>Network across Middle East, Africa, and Europe</p>
                </div>
            </div>
          </div>

          <div className="section-8 bg-[#030320] w-[100%] h-[545px]">
            <div className="container relative w-full h-[545px]">
                <div className="info-sec8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <h2 className='text-[48px] w-[780px] text-[#FFFFFF] text-center'>Partner With A Trusted Healthcare Leader.</h2>
                  <p className='w-[736px] text-[#B1B7B7] text-center my-3'>Whether you are a healthcare provider, research partner, or prospective team member,join us in our mission to humanize science.</p>
                  <div className="btn-sec8 flex items-center justify-center gap-4 mt-10">
                    <button className='w-[206px] h-[54px] rounded-[999px] bg-[#E2E3F0] text-[#2D2E80] text-[14px]'>Global Inquiries</button>
                    <button className='w-[206px] h-[54px] rounded-[999px] border border-[#E2E3F0] text-white text-[14px]'>Join Our Team</button>
                  </div>
                </div>
            </div>
          </div>

          <div className="section-9 h-[400px] py-15 bg-white">
            <div className="container">
                <div className='flex justify-between'>
                    <div className="info-sec9">
                      <img src={Logo} alt="" className='w-[132px] h-[93px]'/>
                      <p className='w-[352px] h-[77px] text-[16px] text-[#3F4948]'>Excellence in healthcare through innovative research and world-class manufacturing since 1996.</p>
                      <div className="icon-sec9 flex gap-4 my-6">
                        <CiShare2 className='w-[18px] h-[20px] text-[#575E70]' />
                        <MdOutlineEmail className='w-[18px] h-[20px] text-[#575E70]' />
                        <PiBuildingOfficeLight className='w-[18px] h-[20px] text-[#575E70]' />
                      </div>
                    </div>
                    <div className="info2-sec9 flex gap-15">
                        <div className="col1-sec9 space-y-5">
                            <p className='text-[14px] text-[#575E70] font-semibold'>RESOURCES</p>
                            <p className='text-[16px] text-[#3F4948]'>Privacy Policy</p>
                            <p className='text-[16px] text-[#3F4948]'>Terms of Service</p>
                            <p className='text-[16px] text-[#3F4948]'>Compliance</p>
                        </div>
                        <div className="col2-sec9 space-y-5">
                            <p className='text-[14px] text-[#575E70] font-semibold'>SUPPORT</p>
                            <p className='text-[16px] text-[#3F4948]'>Pharmacovigilance</p>
                            <p className='text-[16px] text-[#3F4948]'>Global Offices</p>
                            <p className='text-[16px] text-[#3F4948]'>Contact</p>
                        </div>
                    </div>
                </div>
                    <div className="w-[100%] h-[1px] border border-[#BFC8C833] my-40 "></div>
                    <p className='text-center text-[#3F4948] text-[12px] -my-30'>© 2024 Marcyrl Pharmaceutical Industries. Excellence in Healthcare.</p>
                
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}