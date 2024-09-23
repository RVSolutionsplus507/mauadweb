import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex-shrink-0 mb-10">
              <img className="h-8 w-auto" src={Logo} alt="Law Firm Logo" />
            </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
          <div>
            <h2 className=" theme text-2xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <a
                  href="tel:+11234567890"
                  className="hover:text-blue-400 transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a
                  href="mailto:info@lawfirm.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  info@lawfirm.com
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-2 mt-1" />
                <address className="not-italic">
                  123 Legal Street
                  <br />
                  Cityville, State 12345
                  <br />
                  United States
                </address>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-400 transition-colors"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="practice-areas"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-400 transition-colors"
                >
                  Practice Areas
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="attorneys"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-400 transition-colors"
                >
                  Our Attorneys
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-400 transition-colors"
                >
                  About Us
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-400 transition-colors"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
            <p className="mb-4">
              Subscribe to our newsletter for legal updates and news.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 text-gray-900 rounded"
                required
              />
              <button
                type="submit"
                className="w-full bg-amber-300 hover:bg-amber-100 text-slate-700 font-bold py-2 px-4 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaFacebookF size={24} />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTwitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedinIn size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            © {currentYear} Mauad & Mauad. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
