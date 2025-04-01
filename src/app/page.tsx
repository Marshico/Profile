'use client'

import { useState } from "react";
import Nav from './components/Nav';
import CursorEffect from './components/CursorEffect';
import './styles.css';
import Experience from "./components/Experience";
import { TypeAnimation } from 'react-type-animation';
import { FaGraduationCap, FaUniversity, FaCertificate, FaAward, FaLaptopCode, FaChartLine, FaDatabase, FaCode, FaRocket, FaLightbulb, FaShieldAlt, FaSearch, FaWordpress, FaReact, FaNodeJs, FaAws, FaCloud } from 'react-icons/fa';
import { SiFigma, SiRedux, SiNextdotjs, SiNuxtdotjs, SiExpress, SiGraphql, SiApollographql, SiPrisma, SiChakraui, SiTailwindcss, SiPostgresql, SiMongodb, SiSupabase } from 'react-icons/si';

export default function Home() {
  const [backgroundOpacity, setBackgroundOpacity] = useState(0.7);

  return (
    <div className="relative min-h-screen bg-white font-['Arial']">
      <Nav />
      <CursorEffect setBackgroundOpacity={setBackgroundOpacity} />
      <main className="relative mt-20 flex flex-col gap-[32px] items-center z-10 text-gray-900 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="gradient-border rounded-full">
          <img
            src="https://wattshare-images.s3.us-east-1.amazonaws.com/IMG_20230428_220636_803.jpg"
            alt="Profile Picture"
            className="rounded-full profile-image w-100 h-100 border-2"
          />
        </div>
        <h1 className="text-5xl font-bold mr-4 text-gray-900">Reza Boostani</h1>

        <div className="flex flex-col items-center">
          <div className="hidden mt-4 bg-transparent sm:contents lg:relative lg:block lg:flex-1 flex justify-center items-center">
            <TypeAnimation
              className="items-center font-bold text-gray-900 p-4"
              sequence={[
                'Transforming ideas into impactful products that drive business growth and deliver exceptional user experiences.',
                2000,
                'A full stack developer',
                2000,
                'Also consider myself as an',
                2000,
                'Entrepreneur',
                () => {
                  console.log('Sequence completed');
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1.5em', display: 'inline-block' }}
            />
          </div>
        </div>

        <p className="text-gray-900">Toronto, Canada | +1 (416) 678-8015 | <a href="https://www.linkedin.com/in/rezaboostani" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900">LinkedIn</a> | <a href="mailto:r.boostani.93@gmail.com" className="text-blue-800 hover:text-blue-900">Email</a> | <a href="https://github.com/Marshico" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900">GitHub</a></p>

        {/* Product Management Journey Section */}
        <section id="experience" className="w-full mt-12 mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Professional Journey</h2>
          <div className="flex flex-col gap-16 relative">
            {/* Timeline Container */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200" />

            {/* Experience Items */}
            <div className="relative z-10">
              {/* McMaster University Experience */}
              <Experience 
                images={[
                  "https://wattshare-images.s3.us-east-1.amazonaws.com/Pp/Picture5.jpg",
                  "https://wattshare-images.s3.us-east-1.amazonaws.com/Pp/Picture6.jpg",
                  "https://wattshare-images.s3.us-east-1.amazonaws.com/Pp/Picture7.jpg"
                ]}
                title="McMaster University"
                role="Master of Technology, Entrepreneurship and Innovation (MTEI)"
                period="Class of 2023"
                description="Advanced education in technology entrepreneurship and innovation"
                type="education"
                achievements={[
                  "The Forge Startup Survival Program Certification",
                  "Product Analytics Certification from Pendo.io",
                  "Professional Scrum Product Owner™ I (PSPOI) from Scrum.org"
                ]}
                isReversed={true}
              />

              {/* Watt Share Experience */}
              <Experience 
                images={[
                  "https://wattshare-images.s3.us-east-1.amazonaws.com/Pp/Watt+Share+(1).png",
                ]}
                title="Watt Share Inc."
                role="Product Manager"
                period="Feb 2024 - Present"
                description="Leading the development of a B2C2C/B2C SaaS platform for EV charging solutions"
                achievements={[
                  "Successfully conducted in-depth market research and validated product-market fit",
                  "Led full-cycle product development from ideation to MMP",
                  "Developed and executed comprehensive action plan and go-to-market strategy",
                  "Designed detailed financial and business plans for company growth"
                ]}
                businessResults={[
                  "Drove 40% reduction in operational costs",
                  "Secured early-stage funding, resulting in 60% increase in available capital"
                ]}
                isReversed={false}
                website="https://wattshare.ca"
              />

              {/* Ivy Charging Experience */}
              <Experience 
                images={[
                  "https://wattshare-images.s3.us-east-1.amazonaws.com/Pp/Ivy-AutoShow2024-1386x800-01-325x340.webp",
                  "https://wattshare-images.s3.us-east-1.amazonaws.com/Pp/IvyChargeLaunch-scaled.jpg",
                  "https://wattshare-images.s3.us-east-1.amazonaws.com/Pp/unnamed.webp"
                ]}
                title="Ivy Charging Network"
                role="Associate Product Manager"
                period="Jul 2023 - Oct 2023"
                description="Physical Product, Web App, Mobile App – B2B2C/B2C"
                achievements={[
                  "Improved marketing/product performance through customer research",
                  "Streamlined product workflows by eliminating unnecessary process steps",
                  "Launched and tested new online store and subscription-based options"
                ]}
                businessResults={[
                  "Improved user satisfaction by 60%",
                  "Increased sales by 50% through new subscription option"
                ]}
                isReversed={true}
              />

              {/* ThunderVolt Experience */}
              <Experience 
                images={[
                  "https://wattshare-images.s3.us-east-1.amazonaws.com/Pp/Picture2.png",
                  "https://wattshare-images.s3.us-east-1.amazonaws.com/Pp/Picture3.png",
                  "https://wattshare-images.s3.us-east-1.amazonaws.com/Pp/Picture4.jpg"
                ]}
                title="ThunderVolt"
                role="Product Manager"
                period="Oct 2021 - May 2023"
                description="Electric Vehicle Charging Solution (Physical Product, Web App, Mobile App – B2B/B2C)"
                achievements={[
                  "Defined and managed product requirements/backlog, including KPIs and OKRs",
                  "Conducted customer discovery with 300+ users",
                  "Led end-to-end product development and A/B testing",
                  "Performed competitive and feasibility analysis"
                ]}
                businessResults={[
                  "Secured $50,000 in funding through Forge Startup incubator",
                  "Standardized user feedback collection methods"
                ]}
                isReversed={false}
                isLast={true}
              />
            </div>
          </div>
        </section>

        {/* Skills and Expertise Section */}
        <section id="skills" className="w-full py-20">
          <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Core Competencies</h2>
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>
              
              {/* Horizontal connecting line */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200"></div>

              {/* Grid container with connected cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                {/* Product Strategy Card */}
                <div className="relative">
                  <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:border-blue-800 transition-all duration-300">
                    <div className="absolute -right-4 top-1/2 w-8 h-0.5 bg-gray-200 md:block hidden"></div>
                    <div className="absolute -left-4 top-1/2 w-8 h-0.5 bg-gray-200 lg:hidden md:block hidden"></div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Product Strategy</h3>
                    <ul className="space-y-2 text-gray-900">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-2"></span>
                        Market Research & Analysis
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-2"></span>
                        Product Vision & Roadmapping
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-2"></span>
                        Strategic Planning
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Technical Skills Card */}
                <div className="relative">
                  <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:border-blue-800 transition-all duration-300">
                    <div className="absolute -right-4 top-1/2 w-8 h-0.5 bg-gray-200 md:block hidden"></div>
                    <div className="absolute -left-4 top-1/2 w-8 h-0.5 bg-gray-200 lg:hidden md:block hidden"></div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Technical Skills</h3>
                    <ul className="space-y-2 text-gray-900">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-2"></span>
                        Full-stack Development
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-2"></span>
                        React, Next.js, Node.js
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-2"></span>
                        Agile/Scrum
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Leadership Card */}
                <div className="relative">
                  <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:border-blue-800 transition-all duration-300">
                    <div className="absolute -left-4 top-1/2 w-8 h-0.5 bg-gray-200 lg:block hidden"></div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Leadership</h3>
                    <ul className="space-y-2 text-gray-900">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-2"></span>
                        Cross-functional Teams
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-2"></span>
                        Stakeholder Management
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-2"></span>
                        Project Leadership
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="w-full py-20">
          <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Education, Courses & Certifications</h2>
            
            <div className="relative">
              {/* Grid container with connected cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                {/* Vertical connecting lines with gradient */}
                <div className="absolute left-1/3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-500 to-gray-100 -z-10"></div>
                <div className="absolute left-2/3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-500 to-gray-100 -z-10"></div>
                
                {/* Horizontal connecting line with gradient */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-500 to-gray-100 -z-10"></div>
                
                {/* Education Cards */}
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-800">
                  <div className="flex items-center gap-4 mb-4">
                    <FaUniversity size={24} color="#1e40af" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        <a href="https://www.mcmaster.ca/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-900">
                          McMaster University
                        </a>
                      </h3>
                      <p className="text-gray-900">Master of Technology, Entrepreneurship and Innovation (MTEI)</p>
                    </div>
                  </div>
                  <p className="text-gray-900">Class of 2023</p>
                </div>

                {/* Certifications */}
                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-800">
                  <div className="flex items-center gap-4 mb-4">
                    <FaCertificate size={24} color="#1e40af" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        <a href="https://theforge.mcmaster.ca/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-900">
                          The Forge McMaster
                        </a>
                      </h3>
                      <p className="text-gray-900">The Forge Startup Survival Program Certification</p>
                    </div>
                  </div>
                  <p className="text-gray-900">2022</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-800">
                  <div className="flex items-center gap-4 mb-4">
                    <FaChartLine size={24} color="#1e40af" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Pendo.io</h3>
                      <ul className="text-gray-900 space-y-1">
                        <li>
                          <a href="https://www.credly.com/badges/79b51957-6446-4649-b9f7-88c4d054db19" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-900">
                            AI for Product Management
                          </a>
                        </li>
                        <li>
                          <a href="https://www.credly.com/badges/fcb186a3-a7f8-4442-9d66-23eb488f566c" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-900">
                            Product Analytics Certification
                          </a>
                        </li>
                        <li>
                          <a href="https://www.credly.com/badges/891caf46-2819-4241-bced-ccc243998223" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-900">
                            Product-led Certification
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-900">2023</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-800">
                  <div className="flex items-center gap-4 mb-4">
                    <FaDatabase size={24} color="#1e40af" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Microsoft</h3>
                      <ul className="text-gray-900 space-y-1">
                        <li>
                          <a href="https://www.coursera.org/account/accomplishments/verify/K39KCBN3TG5R" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-900">
                            Artificial Intelligence on Microsoft Azure
                          </a>
                        </li>
                        <li>
                          <a href="https://www.credly.com/badges/1b17f5d4-81b3-4e7f-bf8d-b3232a6b14cd" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-900">
                            Microsoft Certified: Azure Fundamentals
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-900">2023</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-800">
                  <div className="flex items-center gap-4 mb-4">
                    <FaCode size={24} color="#1e40af" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Scrum.org</h3>
                      <p className="text-gray-900">
                        <a href="https://www.credly.com/badges/3571da53-9a84-4da2-91ff-23a02dfa7d4b" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-900">
                          Professional Scrum Product Owner™ I (PSPOI)
                        </a>
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-900">2023</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-800">
                  <div className="flex items-center gap-4 mb-4">
                    <FaRocket size={24} color="#1e40af" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">University of Michigan</h3>
                      <p className="text-gray-900">
                        <a href="https://www.coursera.org/account/accomplishments/certificate/N75TKL62MEZX" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-900">
                          The Future of Payment Technologies Course
                        </a>
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-900">2024</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-800">
                  <div className="flex items-center gap-4 mb-4">
                    <FaLightbulb size={24} color="#1e40af" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Google</h3>
                      <ul className="text-gray-900 space-y-1">
                        <li>
                          <a href="https://skillshop.credential.net/f6c43e54-8661-43d1-835f-7bf0c21860e4" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-900">
                            AI-Powered Performance Ads Certification
                          </a>
                        </li>
                        <li>
                          <a href="https://skillshop.credential.net/39e1c29c-90c5-4ac7-a298-6e4339aa9106" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-900">
                            Google Analytics Certification
                          </a>
                        </li>
                        <li>
                          <a href="https://skillshop.credential.net/acece199-197f-4e7a-8541-a31c2bccdc9b" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-900">
                            Google Ads Creative Certification
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-900">2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="w-full py-20">
          <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Tech Stack</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Frontend */}
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-800">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Frontend</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <FaWordpress size={24} color="#1e40af" />
                    <span className="text-gray-900">WordPress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiFigma size={24} color="#1e40af" />
                    <span className="text-gray-900">Figma</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaReact size={24} color="#1e40af" />
                    <span className="text-gray-900">React</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiRedux size={24} color="#1e40af" />
                    <span className="text-gray-900">Redux</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiNextdotjs size={24} color="#1e40af" />
                    <span className="text-gray-900">Next.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiNuxtdotjs size={24} color="#1e40af" />
                    <span className="text-gray-900">Nuxt.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiChakraui size={24} color="#1e40af" />
                    <span className="text-gray-900">Chakra</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiTailwindcss size={24} color="#1e40af" />
                    <span className="text-gray-900">Tailwind</span>
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-800">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Backend</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <FaNodeJs size={24} color="#1e40af" />
                    <span className="text-gray-900">Node.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiExpress size={24} color="#1e40af" />
                    <span className="text-gray-900">Express.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiGraphql size={24} color="#1e40af" />
                    <span className="text-gray-900">GraphQL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiApollographql size={24} color="#1e40af" />
                    <span className="text-gray-900">Apollo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiPrisma size={24} color="#1e40af" />
                    <span className="text-gray-900">Prisma</span>
                  </div>
                </div>
              </div>

              {/* Databases */}
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-800">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Databases</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <SiPostgresql size={24} color="#1e40af" />
                    <span className="text-gray-900">PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiMongodb size={24} color="#1e40af" />
                    <span className="text-gray-900">MongoDB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiSupabase size={24} color="#1e40af" />
                    <span className="text-gray-900">Supabase</span>
                  </div>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-800">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Cloud & DevOps</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <FaAws size={24} color="#1e40af" />
                    <span className="text-gray-900">AWS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCloud size={24} color="#1e40af" />
                    <span className="text-gray-900">Azure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
