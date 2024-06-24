"use client";
import { useEffect } from "react";
import { Container } from "@/components/Container";
import Image from "next/image";
import { PageTitle } from "@/components/PageTitle";
import Swiper, { Navigation, Pagination } from "swiper";
import { people } from "@/app/siteData";

const TeamMobile = () => {
  useEffect(() => {
    Swiper.use([Navigation, Pagination]);

    const swiper = new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      if (swiper?.destroy) swiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {people.map((person) => (
          <div
            key={person.name}
            className="swiper-slide items-center justify-center h-auto w-100 px-4"
          >
            <Image
              src={person.image}
              className="aspect-[14/13] w-3/5 rounded-2xl object-cover mx-auto"
              alt={person.name}
              height={100}
              width={100}
            />
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight">
              {person.name}
            </h3>
            <p className="text-base leading-7 text-zinc-700 mb-2">
              {person.role}
            </p>
            <p className="text-sm leading-7 text-zinc-400">{person.bio}</p>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export const Team = () => (
  <section
    id="team"
    aria-label="Features for building a portfolio"
    className="py-20 sm:py-32"
  >
    <Container className="px-0">
      <div className="mx-auto max-w-2xl sm:text-center px-4">
        <PageTitle
          title="Meet Our Team"
          subtitle="We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients. Each member brings unique skills and insights, ensuring that we provide top-notch service and innovative solutions."
        />
      </div>
      <div className="mt-16 md:hidden">
        <TeamMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image
                src={person.image}
                className="aspect-[14/13] w-full rounded-2xl object-cover"
                alt={person.name}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-black">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-zinc-700 mb-2">
                {person.role}
              </p>
              <p className="text-sm leading-7 text-zinc-400">{person.bio}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Container>
  </section>
);
