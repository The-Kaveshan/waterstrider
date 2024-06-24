"use client";
import { useState } from "react";
import { Container } from "@/components/Container";
import { services } from "../app/siteData";
import { PageTitle } from "@/components/PageTitle";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="pricing-title"
      className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <PageTitle
            title={`Expert Services Tailored to You`}
            subtitle={`At Waterstrider, we pride ourselves on delivering customized
            services that align with your specific needs. Our expertise spans
            various domains, ensuring that you receive the best possible
            solutions and outcomes. Take a look at our services to learn more
            about how we can assist you.`}
          />
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
        {icon}

        <span className="ml-4">{name}</span>
      </h3>
      <div className="order-last mt-6">
        <ul
          role="list"
          className={"-my-2 divide-y text-sm divide-gray-200 text-gray-700"}
        >
          {features.map((feature) => (
            <div key={feature.title}>
              <li
                key={feature.title}
                className="flex py-2 hover:bg-sky-100 hover:cursor-pointer"
              >
                <div
                  className="flex cursor-pointer"
                  onClick={() => handleFeatureClick(feature.title)}
                >
                  {
                    <IoCheckmarkCircleOutline className="h-6 w-6 flex-none text-sky-600" />
                  }
                  <span className="ml-4">{feature.title}</span>
                </div>
              </li>
              {openFeature === feature.title && (
                <div className=" p-4 bg-gray-100 text-gray-700">
                  {feature.desc}
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
