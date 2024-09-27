
import { useForm } from "react-hook-form";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactImage from "../assets/contact.jpg";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-zinc-800 flex items-center justify-center p-6">
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8 max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact Our Attorneys</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center text-white">
              <FaPhone className="mr-2" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center text-white">
              <FaEnvelope className="mr-2" />
              <span>info@attorneys.com</span>
            </div>
            <div className="flex items-center text-white">
              <FaMapMarkerAlt className="mr-2" />
              <span>123 Legal St, Law City, LC 12345</span>
            </div>
            <img src={ContactImage} alt="Office" className="rounded-lg shadow-lg" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-white">Name</label>
              <input
                {...register("name", { required: true })}
                className="w-full p-2 rounded-lg bg-white bg-opacity-20 text-white"
              />
              {errors.name && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
              <label className="block text-white">Email</label>
              <input
                {...register("email", { required: true })}
                className="w-full p-2 rounded-lg bg-white bg-opacity-20 text-white"
              />
              {errors.email && <span className="text-red-500">This field is required</span>}
            </div>
            <div>
              <label className="block text-white">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="w-full p-2 rounded-lg bg-white bg-opacity-20 text-white"
              />
              {errors.message && <span className="text-red-500">This field is required</span>}
            </div>
            <button type="submit" className="w-full p-2 bg-amber-300 text-white font-bold rounded-lg hover:bg-slate-600">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;