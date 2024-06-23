import { Container } from "@/components/Container";
import { Logomark } from "@/components/Logo";

export function Footer() {
  return (
    <Container>
      <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
        <p className="mt-6 text-sm text-gray-500 md:mt-0">
          &copy; Copyright {new Date().getFullYear()}. All rights reserved.
        </p>
        <div className="flex items-center text-gray-900">
          <Logomark className="h-10 w-10 flex-none fill-cyan-500" />
          <div className="ml-4">
            <p className="text-base font-semibold">Waterstrider</p>
            <p className="mt-1 text-sm">Invest at the perfect time.</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
