import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Do you design illustration website?',
    answer:
      'Yes, I do. This is placeholder text. You can animate, collapse, and style me however you want, baby.',
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
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <p className="uppercase text-sm tracking-wide text-neon-dim mb-2">
          ARINO | Frequently Asked Questions
        </p>
        <h1 className="text-4xl md:text-5xl font-pixel text-neon">
          Frequently Asked Questions
        </h1>
      </div>

      {/* Main 2-column layout */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Sidebar */}
        <div className="bg-tertiary p-6 rounded-lg border border-neon/30 shadow-neon">
          <h2 className="text-xl font-bold mb-6">FAQ Category</h2>
          <ul className="space-y-4 text-sm">
            {[
              'Service related',
              'Pricing',
              'Project delivery',
              'Documentation',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-neon rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ List */}
        <div className="md:col-span-2 flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="bg-tertiary rounded-md border border-neon/20 shadow-md"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-5 py-4 font-bold text-left text-neon"
                >
                  {faq.question}
                  {isOpen ? (
                    <ChevronUp size={20} className="text-neon" />
                  ) : (
                    <ChevronDown size={20} className="text-neon" />
                  )}
                </button>

                <div
                  className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'max-h-40 opacity-100 py-3'
                      : 'max-h-0 opacity-0 py-0'
                  }`}
                >
                  <p className="text-sm text-neon-dim">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
