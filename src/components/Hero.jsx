import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const FlashingNumber = ({ end, duration }) => {
  const controls = useAnimation();

const [count, setCount] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
        setCount((prevCount) => {
            if (prevCount < end) {
                return prevCount + 1;
            } else {
                clearInterval(interval);
                return prevCount;
            }
        });
    }, (duration * 1000) / end);

    return () => clearInterval(interval);
}, [end, duration]);

return (
    <motion.span animate={controls}>
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration }}
        >
            {count}
        </motion.span>
        {end === 99 ? '%' : '+'}
    </motion.span>
);
};

const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-[#161618] py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt="Law office interior"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ffd05a] to-[#ffed84] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ffd05a] to-[#ffed84] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        ></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:mx-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          More than <span className="text-amber-300 font-bold">40 years</span> of experience, knowledge and trust.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#ffed84]">
            Our dedicated team of attorneys is committed to fighting for your
            rights and delivering justice. With years of experience and a proven
            track record, we are here to provide you with the highest quality
            legal representation.
          </p>
        </motion.div>
        <motion.div
          className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <a
              href="#practice-areas"
              className="flex items-center hover:text-[#ffd05a] transition-colors"
            >
              Practice Areas <FaArrowRight className="ml-2" />
            </a>
            <a
              href="#our-attorneys"
              className="flex items-center hover:text-[#ffd05a] transition-colors"
            >
              Our Attorneys <FaArrowRight className="ml-2" />
            </a>
            <a
              href="#case-results"
              className="flex items-center hover:text-[#ffd05a] transition-colors"
            >
              Case Results <FaArrowRight className="ml-2" />
            </a>
            <a
              href="#contact"
              className="flex items-center hover:text-[#ffd05a] transition-colors"
            >
              Free Consultation <FaArrowRight className="ml-2" />
            </a>
          </div>
          <motion.dl
            className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 place-items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-[#ffed84]">
                Years of Experience
              </dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                <FlashingNumber end={25} duration={2} />
              </dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-[#ffed84]">
                Successful Cases
              </dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                <FlashingNumber end={1000} duration={2} />
              </dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-[#ffed84]">
                Practice Areas
              </dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
              <FlashingNumber end={15} duration={2} />
              </dd>
            </div>
            <div className="flex flex-col-reverse">
              <dt className="text-base leading-7 text-[#ffed84]">
                Client Satisfaction
              </dt>
              <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
              <FlashingNumber end={99} duration={2} />
              </dd>
            </div>
          </motion.dl>
        </motion.div>
      </div>
    </div>
  );
};

FlashingNumber.propTypes = {
  end: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

export default Hero;
