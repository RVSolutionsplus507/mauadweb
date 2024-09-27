
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';


const attorneys = [
    {
        name: "Jane Doe",
        specialization: "Corporate Law",
        image: "/assets/Attorneys/a1.png",
        bio: "With over 15 years of experience in corporate law, Jane has successfully handled mergers and acquisitions for Fortune 500 companies."
    },
    {
        name: "John Smith",
        specialization: "Criminal Defense",
        image: "/assets/Attorneys/a2.png",
        bio: "John is a seasoned criminal defense attorney with a track record of winning high-profile cases and protecting clients' rights."
    },
    {
        name: "Emily Johnson",
        specialization: "Family Law",
        image: "/assets/Attorneys/a3.png",
        bio: "Emily specializes in complex divorce cases and child custody disputes, always putting the well-being of families first."
    },
    {
        name: "Michael Brown",
        specialization: "Intellectual Property",
        image: "/placeholder.svg?height=400&width=300",
        bio: "Michael is an expert in patent law and has helped numerous tech startups protect their innovations and intellectual property."
    }
];

const AttorneyCard = ({ name, specialization, image, bio }) => (
    <motion.div
        className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <img src={image} alt={name} className="w-full h-64 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-semibold text-amber-300">{name}</h3>
            <p className="text-sm text-white mb-4">{specialization}</p>
            <p className="text-white">{bio}</p>
        </div>
    </motion.div>
);
AttorneyCard.propTypes = {
    name: PropTypes.string.isRequired,
    specialization: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
};

export default function OurAttorneys() {
    return (
        <section className="bg-zinc-800 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Attorneys</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {attorneys.map((attorney, index) => (
                        <motion.div
                            key={attorney.name}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <AttorneyCard {...attorney} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}