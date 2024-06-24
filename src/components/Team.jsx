"use client";
import { useEffect, useId, useRef, useState } from "react";
import { Container } from "@/components/Container";
import Image from "next/image";
import helen from "@/images/helen.jpg";
import sashnee from "@/images/sashnee.jpg";
import rochelle from "@/images/rochelle.jpg";
import { PageTitle } from "@/components/PageTitle";
import Swiper, { Navigation, Pagination } from "swiper";

const people = [
  {
    name: `Helen Hulett`,
    role: `The Ecologist and Strategist`,
    bio: `As the intellectual powerhouse behind Waterstrider’s solutions, Helen Hulett brings over two decades of unmatched expertise in industrial water stewardship and security. Helen's visionary leadership has seen her partner with major industrial players in Africa to bolster water security. As a former Executive Director at a leading water engineering firm, she orchestrated the development of innovative strategies and one of the world's only digital platforms designed to optimize industrial water use. A recognized authority in strategic industrial water management, Helen’s global influence is underscored by her roles as a subject matter expert at Bluefield Research and a strategic partner at Anthesis, where she devises water stewardship strategies for some of the world’s largest companies.`,
    image: helen,
  },
  {
    name: `Sashnee Kistan`,
    role: `The Engineer and Data Scientist`,
    bio: `Sashnee is the technical dynamo at Waterstrider, where her dual expertise as a mechanical engineer and data scientist drives the operational and analytical capabilities of the platform. With a robust background in designing water treatment and recovery plants, Sashnee’s engineering acumen is complemented by her advanced data science training from MIT. Her recent role as Global Markets Lead Analyst at Quantium demonstrates her ability to provide key insights to top global brands, ensuring Waterstrider’s solutions are both innovative and highly effective.`,
    image: sashnee,
  },
  {
    name: `Rochelle Mountany`,
    role: `The Psychologist and Business Leader`,
    bio: `Rochelle Mountany is the market-facing force of Waterstrider, expertly guiding the company’s business and technology strategies across global markets. With a 20-year track record that spans significant roles at Microsoft and as CIO of AXA ICAS International, Rochelle’s strategic initiatives have consistently driven growth and expansion, particularly in the African and Asia Pacific regions. Her unique perspective as a Clinical and Neuro Psychologist, combined with an MBA, enables her to adeptly navigate the complex interplay between technology, business, and user engagement, making Waterstrider’s solutions resonate on a global scale.`,
    image: rochelle,
  },
];

function TeamMobile() {
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
      if (swiper && swiper.destroy) {
        swiper.destroy(true, true);
      }
    };
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {people.map((person) => (
          <div
            key={person.name}
            className="swiper-slide items-center justify-center h-auto w-100  px-4"
          >
            <Image
              src={person.image}
              className="aspect-[14/13] w-full rounded-2xl object-cover "
              alt={person.image}
              height={100}
              width={100}
            />
            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight">
              {person.name}
            </h3>
            <p className="text-base leading-7 text-gray-600">{person.role}</p>
            <p className="text-sm leading-6 text-gray-400">{person.bio}</p>
          </div>
        ))}
      </div>
      <div class="swiper-pagination"></div>
    </div>
  );
}

export function Team() {
  return (
    <section
      id="team"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container className="px-0">
        <div className="mx-auto max-w-2xl sm:text-center px-4">
          <PageTitle
            title={`Meet Our Team`}
            subtitle={`We're a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
            Each member brings unique skills and insights, ensuring that we
            provide top-notch service and innovative solutions.`}
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
                  alt={person.image}
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.role}
                </p>
                <p className="text-sm leading-6 text-gray-400">{person.bio}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Container>
    </section>
  );
}
