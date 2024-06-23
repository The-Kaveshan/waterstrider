"use client";
import { useRef, useState } from "react";
import { Container } from "@/components/Container";
import { Logomark } from "@/components/Logo";
import { services } from "../app/siteData";

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        fill="currentColor"
      />
      <circle
        cx="12"
        cy="12"
        r="8.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DeviceUserIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
        fill="#A3A3A3"
      />
    </svg>
  );
}

function Service({ name, features, icon }) {
  const [openFeature, setOpenFeature] = useState(null);

  const handleFeatureClick = (title) => {
    setOpenFeature(openFeature === title ? null : title);
  };

  return (
    <section
      className={
        "flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 bg-white"
      }
    >
      <h3 className={"flex items-center text-sm font-semibold text-gray-900"}>
        <DeviceUserIcon className={"h-6 w-6 flex-none text-gray-500"} />
        <span className="ml-4">{name}</span>
      </h3>
      <div className="order-last mt-6">
        <ul
          role="list"
          className={"-my-2 divide-y text-sm divide-gray-200 text-gray-700"}
        >
          {features.map((feature) => (
            <>
              <li
                key={feature.title}
                className="flex py-2 hover:bg-cyan-100 hover:cursor-pointer"
              >
                <div
                  className="flex cursor-pointer"
                  onClick={() => handleFeatureClick(feature.title)}
                >
                  <CheckIcon className="h-6 w-6 flex-none text-cyan-500" />
                  <span className="ml-4">{feature.title}</span>
                </div>
              </li>
              {openFeature === feature.title && (
                <div className=" p-4 bg-gray-100 text-gray-700">
                  {feature.desc}
                </div>
              )}
            </>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="pricing-title"
      className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="pricing-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Expert Services Tailored to You
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            At Waterstrider, we pride ourselves on delivering customized
            services that align with your specific needs. Our expertise spans
            various domains, ensuring that you receive the best possible
            solutions and outcomes. Take a look at our services to learn more
            about how we can assist you.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <Service key={service.name} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
