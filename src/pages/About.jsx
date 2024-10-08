import { motion } from 'framer-motion'
import { FaBalanceScale, FaHandshake, FaGavel } from 'react-icons/fa'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import mauadabout from '../assets/mauadabout.jpg'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const attorneyImages = [
  '/path/to/attorney1.jpg',
  '/path/to/attorney2.jpg',
  '/path/to/attorney3.jpg',
  // Add more image paths as needed
]

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-zinc-800 text-white">
      <section className="container mx-auto px-4 py-12">
        <motion.section
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={fadeIn}
            >
              <h2 className="text-4xl font-bold tracking-tight text-amber-300 sm:text-6xl mb-5">
                Mauad & Mauad
              </h2>
              <p className="text-lg mb-4">
                Established in 1994, Mauad & Mauad has been dedicated to providing top-notch legal services
                to our clients. Our team of experienced attorneys is committed to upholding the principles of
                justice and integrity. We specialize in various areas of law, ensuring that we can meet the diverse
                needs of our clients.
              </p>
              <p className="text-lg">
                Our firm is built on a foundation of trust, excellence, and a relentless pursuit of justice. We
                believe in a client-centered approach, where each case is handled with the utmost care and
                professionalism. Join us as we continue to make a positive impact in the legal community.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="relative"
            >
              <img
                src={mauadabout}
                alt="Law Firm"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-50 rounded-lg"></div>
            </motion.div>
          </div>
        </motion.section>
        <motion.section
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeIn}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-semibold mb-6 text-[#ffd05a]">
                Our Mission
              </h2>
              <p className="text-lg mb-4">
                At [Law Firm Name], our mission is to provide exceptional legal services with integrity,
                dedication, and a commitment to justice. We strive to be a beacon of hope for those seeking
                legal representation, ensuring that every client receives personalized attention and
                the highest quality legal counsel.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-semibold mb-6 text-[#ffd05a]">
                Our Vision
              </h2>
              <p className="text-lg mb-4">
                We envision a future where justice is accessible to all, regardless of background or
                circumstance. Our goal is to be at the forefront of legal innovation, continuously
                adapting to the evolving needs of our clients and the legal landscape.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="mb-16"
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-semibold mb-6 text-[#ffd05a]"
          >
            Our Values
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-[#ffed84] text-[#161618] p-6 rounded-lg">
              <FaBalanceScale className="text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p>We uphold the highest ethical standards in all our dealings.</p>
            </div>
            <div className="bg-amber-300 text-[#161618] p-6 rounded-lg">
              <FaHandshake className="text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Compassion</h3>
              <p>We approach each case with empathy and understanding.</p>
            </div>
            <div className="bg-[#ffd05a] text-[#161618] p-6 rounded-lg">
              <FaGavel className="text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p>We strive for excellence in every aspect of our practice.</p>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-semibold mb-6 text-[#ffd05a]"
          >
            Meet Our Attorneys
          </motion.h2>
          <motion.div
            variants={fadeIn}
            className="bg-white text-[#161618] p-6 rounded-lg"
          >
            <Slider {...sliderSettings}>
              {attorneyImages.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Attorney ${index + 1}`} className="w-full h-auto rounded-lg" />
                </div>
              ))}
            </Slider>
          </motion.div>
        </motion.section>
      </section>
    </div>
  )
}
