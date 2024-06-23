import { Container } from "@/components/Container";
import { Logomark } from "@/components/Logo";
import Image from "next/image";
import waves from "@/images/waves.svg";
export function Footer() {
  return (
    <Container>
      {/* <div className="waveBackground">
        <Image src={waves} alt={"waves"} width={1600} height={900} />
      </div> */}
      <div className="flex flex-col items-center pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6 z-10">
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
    </Container>
  );
}
