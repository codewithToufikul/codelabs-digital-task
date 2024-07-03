import { useState } from "react";
import SectionTag from "../../../../ShareComponent/SectionTag";

const FaqSection = () => {
  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="mt-[130px]">
      <SectionTag text={'FAQ'} />
      <h1 className="text-5xl font-semibold mt-3 mb-7">Frequently Asked Questions</h1>
      <div className=" space-y-5" id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 bg-[#ffffec] font-medium gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={open === 1}
            aria-controls="accordion-collapse-body-1"
            onClick={() => toggle(1)}
          >
            <span className="text-xl font-semibold">What are your office hours?</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 ${open === 1 ? 'rotate-180' : ''} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className={`p-5 border border-b-0 ${open === 1 ? '' : 'hidden'}`}
          aria-labelledby="accordion-collapse-heading-1"
        >
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
          </p>
        </div>

        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 bg-[#ffffec] gap-3"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded={open === 2}
            aria-controls="accordion-collapse-body-2"
            onClick={() => toggle(2)}
          >
            <span className="text-xl font-semibold">How can I schedule an appointment?</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 ${open === 2 ? 'rotate-180' : ''} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          className={`p-5 border border-b-0 ${open === 2 ? '' : 'hidden'}`}
          aria-labelledby="accordion-collapse-heading-2"
        >
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
          </p>
        </div>

        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 bg-[#ffffec] font-medium gap-3"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded={open === 3}
            aria-controls="accordion-collapse-body-3"
            onClick={() => toggle(3)}
          >
            <span className="text-xl font-semibold">Do you accept insurance?</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 ${open === 3 ? 'rotate-180' : ''} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          className={`p-5 ${open === 3 ? '' : 'hidden'}`}
          aria-labelledby="accordion-collapse-heading-3"
        >
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
          </p>
        </div>

        <h2 id="accordion-collapse-heading-4">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 bg-[#ffffec] font-medium gap-3"
            data-accordion-target="#accordion-collapse-body-4"
            aria-expanded={open === 4}
            aria-controls="accordion-collapse-body-4"
            onClick={() => toggle(4)}
          >
            <span className="text-xl font-semibold">What should I bring to my appointment?</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 ${open === 4 ? 'rotate-180' : ''} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-4"
          className={`p-5 border border-b-0 ${open === 4 ? '' : 'hidden'}`}
          aria-labelledby="accordion-collapse-heading-4"
        >
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            We offer a wide range of healthcare services, including primary care, specialized medical services, diagnostic testing, and wellness programs. Please contact your nearest clinic for a detailed list of services.
          </p>
        </div>

        <h2 id="accordion-collapse-heading-5">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 bg-[#ffffec] font-medium gap-3"
            data-accordion-target="#accordion-collapse-body-5"
            aria-expanded={open === 5}
            aria-controls="accordion-collapse-body-5"
            onClick={() => toggle(5)}
          >
            <span className="text-xl font-semibold">Do you offer telemedicine appointments?</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 ${open === 5 ? 'rotate-180' : ''} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-5"
          className={`p-5 border border-b-0 ${open === 5 ? '' : 'hidden'}`}
          aria-labelledby="accordion-collapse-heading-5"
        >
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            To request your medical records, please contact our medical records department. You may need to complete a request form and provide identification. We will process your request as quickly as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
