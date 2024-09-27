import Slider from 'react-infinite-logo-slider'
import cert3 from "../../assets/cert3.png"

const Brands = () => {

    return (
        <>
            <h2 className='text-center text-white text-2xl font-bold bg-slate-900'>Our Certifications</h2>
            <div className='py-10 bg-slate-900'>

            <Slider
                width="250px"
                duration={40}
                pauseOnHover={true}
                blurBorders={false}
                blurBoderColor={'#fff'}
            >
                <Slider.Slide>
                    <img src={cert3} alt="Certification 1" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={cert3} alt="Certification 2" className='w-36' />
                </Slider.Slide>
                <Slider.Slide>
                    <img src={cert3} alt="Certification 3" className='w-36' />
                </Slider.Slide>

            </Slider>
            </div>
        </>
    )
}

export default Brands