import wsLogo from "@/images/wsLogo.svg";
import Image from "next/image";

export function Logomark(props) {
  return <Image src={wsLogo} height={40} alt={"logo"} />;
}

export function Logo(props) {
  return (
    <div className="flex items-center">
      <Logomark />
      <div className="ml-4">
        <p className="text-base font-semibold">Waterstrider</p>
      </div>
    </div>
  );
}
