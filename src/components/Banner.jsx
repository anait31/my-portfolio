import banner_image from '../assets/me.webp'
import { FaDownload, FaDribbble, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { motion } from "motion/react"
const Banner = () => {
    return (
        <div className=''>
            <div className="hero py-8">
                <div className="hero-content  flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <motion.img whileHover={{ rotate: -1, borderColor: '#8750f7' }} // Scale up by 10% on hover
                            transition={{ duration: 0.6 }} // Smooth transition
                            style={{
                                borderColor: '#7147c530'
                            }} className='border-2 rounded-3xl rotate-12' src={banner_image} alt="" />
                    </div>
                    <div className="text-center lg:text-left">
                        <h3 className="text-2xl font-bold">I am Anaitullah</h3>
                        <h1
                            style={{
                                backgroundImage: 'linear-gradient(90deg, #8750f7, #fff 100%)',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                color: 'transparent',
                            }}
                            className="text-7xl font-bold"
                        >
                            Next-Level Web <span className="block">Developer.</span>
                        </h1>
                        <p className="py-6 text-2xl font-light w-9/12">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                        <div className='flex gap-8 items-center'>
                            <a className='border py-2 px-4 rounded-lg' href="">Download CV <FaDownload className='inline'></FaDownload></a>
                            <ul className='flex gap-4'>
                                <li className='border-2 p-2 rounded-full'><a href=""><FaDribbble></FaDribbble></a></li>
                                <li className='border-2 p-2 rounded-full'><a href=""><FaGithub></FaGithub></a></li>
                                <li className='border-2 p-2 rounded-full'><a href=""><FaLinkedin></FaLinkedin></a></li>
                                <li className='border-2 p-2 rounded-full'><a href=""><FaTwitter></FaTwitter></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stats shadow w-full mt-6 mb-16">
                <div className="stat flex items-center">
                    <div className="stat-value text-7xl font-normal">10</div>
                    <h2>Years of <span className='block'>Experience</span></h2>
                </div>
                <div className="stat flex items-center">
                    <div className="stat-value text-7xl font-normal">50+</div>
                    <h2>Project <span className='block'>Completed</span></h2>
                </div>
                <div className="stat flex items-center">
                    <div className="stat-value text-7xl font-normal">1.5K</div>
                    <h2>Happy <span className='block'>Clients</span></h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;