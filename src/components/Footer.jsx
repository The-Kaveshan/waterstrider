import { Container } from "@/components/Container";
import { Logomark } from "@/components/Logo";
import Image from "next/image";
import waves from "@/images/waves.svg";
export function Footer() {
  return (
    <section id="footer">
      <Container className="px-0  max-w-none relative">
        <div className="relative z-10 flex flex-col items-center pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex items-center text-gray-900">
            <Logomark className="h-10 w-10 flex-none fill-cyan-500" />
            <div className="ml-4">
              <p className="text-base font-semibold">Waterstrider</p>
              <p className="mt-1 text-sm">Data-Driven Solutions</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 z-0">
          <Image src={waves} alt={"waves"} layout="fill" objectFit="cover" />
        </div>
      </Container>
    </section>
  );
}
