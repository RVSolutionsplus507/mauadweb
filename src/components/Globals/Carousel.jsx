import { useState, useEffect } from "react";
import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';

import image1 from "../../assets/CarouselImages/image1.jpeg";
import image2 from "../../assets/CarouselImages/image2.jpg";
import image3 from "../../assets/CarouselImages/image3.jpeg";
import image4 from "../../assets/CarouselImages/images4.jpeg";
import image5 from "../../assets/CarouselImages/images5.webp";
import image6 from "../../assets/CarouselImages/image6.jpg";
import image7 from "../../assets/CarouselImages/image7.jpg";
import image8 from "../../assets/CarouselImages/image8.jpeg";


const Carousel = () => {
    const [focusElement, setFocusElement] = useState(0);
    const [carouselRadius, setCarouselRadius] = useState(350);
    const [peripheralImageRadius, setPeripheralImageRadius] = useState(80);
    const [centralImageRadius, setCentralImageRadius] = useState(150);

    const images = [image1, image2, image3, image4, image5, image6, image7, image8];
    const info = [
        'Corporate Law', 
        'Family Law', 
        'Criminal Defense', 
        'Real Estate Law', 
        'Intellectual Property', 
        'Employment Law', 
        'Immigration Law', 
        'Environmental Law'
    ];
    const descriptions = [
        "Expert guidance in business transactions, mergers, and corporate governance.",
        "Compassionate support for divorce, child custody, and family-related legal matters.",
        "Skilled defense against criminal charges, protecting your rights and freedom.",
        "Comprehensive legal services for property transactions, leases, and disputes.",
        "Protecting your innovations and intellectual property rights.",
        "Advising on employment contracts, disputes, and workplace regulations.",
        "Assisting with visas, residency, and citizenship applications.",
        "Guidance on environmental regulations and compliance."
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCarouselRadius(100);
                setPeripheralImageRadius(90);
                setCentralImageRadius(50);
            } else {
                setCarouselRadius(350);
                setPeripheralImageRadius(90);
                setCentralImageRadius(150);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="flex justify-around items-center">
            <div className="w-full lg:w-auto">
                <FancyCarousel
                    images={images}
                    carouselRadius={carouselRadius}
                    peripheralImageRadius={peripheralImageRadius}
                    centralImageRadius={centralImageRadius}
                    focusElementStyling={{ border: '2px solid #27272a' }}
                    autoRotateTime={3}
                    borderWidth={4}
                    borderHexColor={'d97706'}
                    setFocusElement={setFocusElement}
                />
            </div>
            <div className="w-full lg:w-96 flex justify-end items-center lg:justify-end">
                <div className="card bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-bold mb-2 text-white">{info[focusElement]}</h2>
                    <p className="text-gray-200 text-sm">{descriptions[focusElement]}</p>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
