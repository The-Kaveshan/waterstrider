import { useId } from "react";

import { Container } from "@/components/Container";

const people = [
  {
    name: `Helen Hulett`,
    role: `The Ecologist and Strategist`,
    bio: `As the intellectual powerhouse behind Waterstrider’s solutions, Helen Hulett brings over two decades of unmatched expertise in industrial water stewardship and security. Helen's visionary leadership has seen her partner with major industrial players in Africa to bolster water security. As a former Executive Director at a leading water engineering firm, she orchestrated the development of innovative strategies and one of the world's only digital platforms designed to optimize industrial water use. A recognized authority in strategic industrial water management, Helen’s global influence is underscored by her roles as a subject matter expert at Bluefield Research and a strategic partner at Anthesis, where she devises water stewardship strategies for some of the world’s largest companies.`,
    image:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: `Sashnee Kistan`,
    role: `The Engineer and Data Scientist`,
    bio: `Sashnee is the technical dynamo at Waterstrider, where her dual expertise as a mechanical engineer and data scientist drives the operational and analytical capabilities of the platform. With a robust background in designing water treatment and recovery plants, Sashnee’s engineering acumen is complemented by her advanced data science training from MIT. Her recent role as Global Markets Lead Analyst at Quantium demonstrates her ability to provide key insights to top global brands, ensuring Waterstrider’s solutions are both innovative and highly effective.`,
    image:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: `Rochelle Mountany`,
    role: `The Psychologist and Business Leader`,
    bio: `Rochelle Mountany is the market-facing force of Waterstrider, expertly guiding the company’s business and technology strategies across global markets. With a 20-year track record that spans significant roles at Microsoft and as CIO of AXA ICAS International, Rochelle’s strategic initiatives have consistently driven growth and expansion, particularly in the African and Asia Pacific regions. Her unique perspective as a Clinical and Neuro Psychologist, combined with an MBA, enables her to adeptly navigate the complex interplay between technology, business, and user engagement, making Waterstrider’s solutions resonate on a global scale.`,
    image:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
];
export function TheTeam() {
  return (
    <section
      id="team"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Meet Our Team
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            We're a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
            Each member brings unique skills and insights, ensuring that we
            provide top-notch service and innovative solutions.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                className="aspect-[14/13] w-full rounded-2xl object-cover"
                src={person.image}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-300">{person.role}</p>
              <p className="text-sm leading-6 text-gray-500">{person.bio}</p>
            </li>
          ))}
          {/* {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))} */}
        </ul>
      </Container>
    </section>
  );
}
