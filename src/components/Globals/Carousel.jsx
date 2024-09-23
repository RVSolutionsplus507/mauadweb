import { useState } from "react";

import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';

const image1 = "https://via.placeholder.com/300x200.png?text=Image+1";
const image2 = "https://via.placeholder.com/300x200.png?text=Image+2";
const image3 = "https://via.placeholder.com/300x200.png?text=Image+3";
const image4 = "https://via.placeholder.com/300x200.png?text=Image+4";


const Carousel = () => {
    // the focus element would be the array index of the image currently at focus
    const [focusElement, setFocusElement] = useState(0);

    const images = [image1, image2, image3, image4];
    const info = ['Corporate Law', 'Family Law', 'Criminal Defense', 'Real Estate Law'];
    const descriptions = [
        "Expert guidance in business transactions, mergers, and corporate governance.",
        "Compassionate support for divorce, child custody, and family-related legal matters.",
        "Skilled defense against criminal charges, protecting your rights and freedom.",
        "Comprehensive legal services for property transactions, leases, and disputes."
    ];

    return (
        <div className="flex flex-col lg:flex-row ">
            <div className="w-full lg:w-auto">
                <FancyCarousel
                    images={images}
                    carouselRadius={window.innerWidth < 640 ? 100 : 350}
                    peripheralImageRadius={window.innerWidth < 640 ? 50 : 80}
                    centralImageRadius={window.innerWidth < 640 ? 50 : 150}
                    focusElementStyling={{ border: '2px solid #ba4949' }}
                    autoRotateTime={10}
                    borderWidth={4}
                    borderHexColor={'1c364f'}
                    setFocusElement={setFocusElement}
                />
            </div>
            <div className="info-box-wrapper lg:ml-32 w-full lg:w-64 flex justify-end items-center lg:justify-end">
                <div className="card bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold mb-2 text-white">{info[focusElement]}</h2>
                    <p className="text-gray-200 text-sm">{descriptions[focusElement]}</p>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
