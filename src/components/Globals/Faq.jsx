import { useState } from 'react';
import { motion } from 'framer-motion';

const faqData = [
    {
        question: "What services do you offer?",
        answer: "We offer a wide range of legal services including corporate law, family law, and criminal defense."
    },
    {
        question: "How can I schedule a consultation?",
        answer: "You can schedule a consultation by contacting us through our website or calling our office directly."
    },
    {
        question: "What are your office hours?",
        answer: "Our office hours are Monday to Friday, 9 AM to 5 PM."
    },
    {
        question: "Do you offer free consultations?",
        answer: "Yes, we offer a free initial consultation to discuss your case and how we can assist you."
    },
    {
        question: "What should I bring to my consultation?",
        answer: "Please bring any relevant documents, identification, and a list of questions you may have."
    },
    {
        question: "How do you charge for your services?",
        answer: "Our fees depend on the type of case and the services required. We will provide a detailed fee structure during the consultation."
    },
];

const Faq = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <div className="max-w-4xl mx-auto p-5 pb-10">
            <h2 className="text-3xl font-bold text-center mb-10 text-amber-300">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqData.map((item, i) => (
                    <div key={i} className="border-b border-gray-200 pb-4">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggle(i)}
                        >
                            <h3 className="text-xl text-white font-bold">{item.question}</h3>
                            <span className='text-white font-bold'>{selected === i ? '-' : '+'}</span>
                        </div>
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: selected === i ? 'auto' : 0, opacity: selected === i ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <p className="mt-2 text-white">{item.answer}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;