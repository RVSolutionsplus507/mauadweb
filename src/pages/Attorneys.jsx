import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const attorneys = [
    {
        name: 'John Doe',
        photo: 'https://via.placeholder.com/150',
        position: 'Senior Attorney',
        facebook: '#',
        twitter: '#',
        linkedin: '#',
    },
    {
        name: 'John Doe',
        photo: 'https://via.placeholder.com/150',
        position: 'Senior Attorney',
        facebook: '#',
        twitter: '#',
        linkedin: '#',
    },
    {
        name: 'John Doe',
        photo: 'https://via.placeholder.com/150',
        position: 'Senior Attorney',
        facebook: '#',
        twitter: '#',
        linkedin: '#',
    },
    {
        name: 'John Doe',
        photo: 'https://via.placeholder.com/150',
        position: 'Senior Attorney',
        facebook: '#',
        twitter: '#',
        linkedin: '#',
    },
    {
        name: 'John Doe',
        photo: 'https://via.placeholder.com/150',
        position: 'Senior Attorney',
        facebook: '#',
        twitter: '#',
        linkedin: '#',
    },
    {
        name: 'John Doe',
        photo: 'https://via.placeholder.com/150',
        position: 'Senior Attorney',
        facebook: '#',
        twitter: '#',
        linkedin: '#',
    },
    {
        name: 'John Doe',
        photo: 'https://via.placeholder.com/150',
        position: 'Senior Attorney',
        facebook: '#',
        twitter: '#',
        linkedin: '#',
    },
    {
        name: 'John Doe',
        photo: 'https://via.placeholder.com/150',
        position: 'Senior Attorney',
        facebook: '#',
        twitter: '#',
        linkedin: '#',
    },
    
];

const Attorneys = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 to-zinc-800 p-10 text-white">
            <h1 className="text-4xl font-bold text-center mb-10 ">Our Attorneys</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {attorneys.map((attorney, index) => (
                    <motion.div
                        key={index}
                        className="bg-slate-400 bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <img
                            src={attorney.photo}
                            alt={attorney.name}
                            className="w-full h-100 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-2xl font-semibold mb-2">{attorney.name}</h2>
                        <p className="text-amber-300 mb-4">{attorney.position}</p>
                        <div className="flex space-x-4">
                            <a href={attorney.facebook} className="text-white">
                                <FaFacebook size={24} />
                            </a>
                            <a href={attorney.twitter} className="text-white">
                                <FaTwitter size={24} />
                            </a>
                            <a href={attorney.linkedin} className="text-white">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Attorneys;