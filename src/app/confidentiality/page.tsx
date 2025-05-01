import AccentSpinner from "@/components/accent-spinner";
import Blink from "@/components/blink";
import GradientText from "@/components/gradient-text";
import TextScroll from "@/components/text-scroll";
import { ArrowDown } from "lucide-react";

export default function Confidentiality() {
  return (
    <div className="flex flex-col items-center px-8 md:px-20 bg-black text-white">
      <div className="flex flex-col min-h-screen w-full max-w-screen-3xl">
        <section className="relative min-h-screen">
          <div className="mt-60 font-['Manrope'] font-medium tracking-tighter">
            <GradientText>
              <h1 className="max-w-[800px] text-3xl sm:text-[45px] md:text-[50px]">
                Confidentiality Notice
              </h1>
            </GradientText>
            <p className="text-white/80 mt-4">
              The contents of this email message and any attachments are
              intended solely for the designated recipient(s), may contain
              confidential and/or privileged information, and may be legally
              protected from disclosure. This email and its contents must not be
              shared with any third party or used for any purpose other than
              that intended by Solcoa Industries without the express written
              consent of Solcoa Industries.
            </p>
            <p className="text-white/80 mt-4">
              Solcoa Industries maintains strict confidentiality policies.
              Therefore, this email and its attachments must not be forwarded or
              otherwise transmitted to any unauthorized individuals or entities
              without explicit approval from an authorized representative of
              Solcoa Industries. Under no circumstances shall this information
              be disclosed to entities or residents located within the People's
              Republic of China or the Russian Federation.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
