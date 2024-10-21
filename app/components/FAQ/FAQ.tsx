import { styles } from '@/app/styles/style';
import React, { useEffect, useState } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [questions, setQuestions] = useState<FAQItem[]>([
    {
      id: 1,
      question: "What payment methods do you accept?",
      answer: "Ans: All payment methods accepted.",
    },
    {
      id: 2,
      question: "Can I access my courses on multiple devices?",
      answer: "Ans: Yes.",
    },
    {
      id: 3,
      question: "What should I do if I encounter issues with my account?",
      answer: "Ans: You can mail us on StrideWiseClub@gmail.com.",
    },
    {
      id: 4,
      question: "How long do I have access to a course after enrolling?",
      answer: "Ans: For 2 years.",
    },
    {
      id: 5,
      question: "What is your refund policy?",
      answer: "Ans: Recognizing the significance of investing in educational endeavors, we endeavor to provide stock market courses of exceptional quality. Regrettably, given the inherent characteristics of our digital offerings and the substantial value inherent in the knowledge disseminated, all transactions are considered final, and refunds are not accommodated. So no refund policy.",
    },
  ]);

  const toggleQuestion = (id: number) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div>
      <div className="w-[90%] 800px:w-[80%] m-auto">
        <h1 className={`${styles.title} 800px:text-[40px]`}>
          Frequently Asked Questions
        </h1>
        <div className="mt-12">
          <dl className="space-y-8">
            {questions.map((q) => (
              <div
                key={q.id}
                className={`${
                  q.id !== questions[0]?.id && "border-t"
                } border-gray-200 pt-6`}
              >
                <dt className="text-lg">
                  <button
                    className="flex items-start justify-between w-full text-left focus:outline-none"
                    onClick={() => toggleQuestion(q.id)}
                  >
                    <span className="font-medium text-black dark:text-white">
                      {q.question}
                    </span>
                    <span className="ml-6 flex-shrink-0">
                      {activeQuestion === q.id ? (
                        <HiMinus className="h-6 w-6 text-black dark:text-white" />
                      ) : (
                        <HiPlus className="h-6 w-6 text-black dark:text-white" />
                      )}
                    </span>
                  </button>
                </dt>
                {activeQuestion === q.id && (
                  <dd className="mt-2 pr-12">
                    <p className="text-base font-Poppins text-black dark:text-white">
                      {q.answer}
                    </p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default FAQ;
