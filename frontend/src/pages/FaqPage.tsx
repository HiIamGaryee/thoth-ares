import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Do you design illustration website?',
    answer:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.',
  },
  {
    question: 'Do you provide design source file after finish work?',
    answer: 'Of course. Files, love, and pixels all delivered together.',
  },
  {
    question: 'How to provide project details and payments?',
    answer: "I'll guide you, step by step. You won't get lost.",
  },
  {
    question: 'Can you tell me please how to contact for project?',
    answer: 'Yes. Scroll to the bottom for contact form or use the chat.',
  },
  {
    question: 'Do you makes custom logo, icon etc?',
    answer: 'Yes, babe. All pixel-perfect, handcrafted with neon love.',
  },
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-[#0B0F14]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <p className="uppercase text-sm tracking-wide text-[#00FF66] mb-2 font-['Pixer']">
            ARINO | FREQUENTLY ASKED QUESTIONS
          </p>
          <h1 className="text-4xl font-['Pixer'] text-[#00FF66]">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="block lg:table w-full">
          <div className="block lg:table-cell align-top w-full lg:w-1/4 pr-0 lg:pr-8">
            <div className="sticky top-4">
              <h2 className="text-xl font-['Pixer'] mb-6 text-[#00FF66]">
                FAQ Category
              </h2>
              <ul className="space-y-3">
                {[
                  'Service related',
                  'Pricing',
                  'Project delivery',
                  'Documentation',
                ].map((item) => (
                  <li
                    key={item}
                    className="text-[#00FF66] font-['Pixer'] cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="block lg:table-cell align-top w-full lg:w-3/4">
            <div className="space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;

                return (
                  <div key={i} className="border-b border-[#00FF66]/20">
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-center justify-between py-4 text-left text-[#00FF66] hover:opacity-80 transition-opacity"
                    >
                      <span className="font-['Pixer']">{faq.question}</span>
                      <span>
                        {isOpen ? (
                          <ChevronUp className="text-[#00FF66]" size={20} />
                        ) : (
                          <ChevronDown className="text-[#00FF66]" size={20} />
                        )}
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen
                          ? 'max-h-[500px] opacity-100 pb-4'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-[#00FF66]/80 font-['Pixer']">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
