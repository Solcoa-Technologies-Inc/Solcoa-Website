import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "@/components/nav";
import TextScroll from "@/components/text-scroll";
import Blink from "@/components/blink";
import AccentSpinner from "@/components/accent-spinner";
import SectionHeader from "@/components/section-header";
import FadeInContainer from "@/components/fade-in-container";
import GradientText from "@/components/gradient-text";
import SampleButton from "@/components/sample-btn";
import { ArrowDown } from "lucide-react";
import Footer from "@/components/footer";

export default function Home() {
  const elements = [
    {
      symbol: "Nd",
      name: "Neodymium",
      mass: "144.242",
      number: 60,
      wiki: "https://en.wikipedia.org/wiki/Neodymium",
    },
    {
      symbol: "Dy",
      name: "Dysprosium",
      mass: "162.500",
      number: 66,
      wiki: "https://en.wikipedia.org/wiki/Dysprosium",
    },
    {
      symbol: "Tb",
      name: "Terbium",
      mass: "158.925",
      number: 65,
      wiki: "https://en.wikipedia.org/wiki/Terbium",
    },
    {
      symbol: "Pr",
      name: "Praseodymium",
      mass: "140.907",
      number: 59,
      wiki: "https://en.wikipedia.org/wiki/Praseodymium",
    },
  ];

  return (
    <div className="flex flex-col items-center px-8 md:px-20 bg-black text-white">
      <div className="flex flex-col min-h-screen w-full max-w-screen-3xl">
        <Nav />
        <header className="relative min-h-screen">
          <div className="flex justify-between items-center mt-2 text-white/50 font-mono tracking-tight">
            <p className="hidden md:block">California, United States 🌴</p>
            <div className="md:ml-auto flex gap-2 items-center">
              <Blink />
              <p>Production Active</p>
            </div>
          </div>
          <div className="mt-32 text-3xl sm:text-[45px] md:text-[50px] lg:text-[80px] font-['Manrope'] font-medium tracking-tighter">
            <GradientText>
              <h1 className="max-w-[800px]">
                The world&apos;s first carbon-zero rare earths
              </h1>
            </GradientText>
            <TextScroll
              text={[
                "Built for Scale",
                "Zero Reliance on China",
                "Independently American",
              ]}
              className="mt-4 md:text-inherit"
            />
            <AccentSpinner className="absolute bottom-32 -right-4" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-40 md:hidden">
            <ArrowDown className="w-6 h-6 stroke-neutral-600 animate-bounce" />
          </div>
        </header>
        <FadeInContainer>
          <section className="pt-16 pb-20 relative" id="products">
            <SectionHeader title="products" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-12 max-w-md lg:max-w-4xl mx-auto relative">
              {elements.map((element) => (
                <Link
                  key={element.symbol}
                  href={element.wiki}
                  target="_blank"
                  className="flex flex-col items-center border-2 border-white aspect-square relative overflow-clip group/element"
                >
                  <div className="absolute w-1/2 h-[200%] -top-1/2 -left-1/2 group-hover/element:left-4/5 bg-gradient-to-r from-black/0 via-50% via-white/15 to-black/0  rotate-[30deg] transition-all duration-300" />
                  <p className="absolute top-4 left-4 text-base md:text-xl">
                    {element.number}
                  </p>
                  <div className="flex flex-col gap-2 md:gap-4 items-center justify-center h-full">
                    <p className="text-4xl md:text-6xl font-medium">
                      {element.symbol}
                    </p>
                    <div className="flex flex-col items-center">
                      <p className=" font-bold text-lg md:text-xl text-white/75">
                        {element.name}
                      </p>
                      <p className="text-sm text-white/75">{element.mass}</p>
                    </div>
                  </div>
                </Link>
              ))}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neutral-200/15 via-neutral-200/0 to-black/25 pointer-events-none" />
            </div>

            <div className="mt-16 text-2xl flex flex-col gap-4 max-w-md lg:max-w-4xl mx-auto">
              <GradientText className="bg-gradient-to-l to-white/75">
                <p>
                  Solcoa delivers high-grade rare earth metals <br />
                  100% American, sustainable, and reliable.
                </p>
              </GradientText>
              <p className="font-bold">
                Secure your supply chain <span className="italic">today</span>.
              </p>
              <div className="flex gap-2 w-full justify-center sm:justify-start">
                <SampleButton />

                <Link href="mailto:sales@solcoa.tech" target="_blank">
                  <Button variant="outline" size="lg">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>

            <AccentSpinner className="absolute bottom-0 -right-4" />
          </section>
        </FadeInContainer>
        <FadeInContainer>
          <section className="pt-16 relative" id="backing">
            <SectionHeader title="rock solid backing" />
            <div className="mt-24 grid grid-cols-3 gap-8 md:gap-12 max-w-xl mx-auto">
              <div className="h-12 w-full">
                <img
                  className="w-full h-full object-contain"
                  src="images/investors/8090.webp"
                  alt="8090 Industries"
                />
              </div>
              <div className="h-12 w-full">
                <img
                  className="w-full h-full object-contain"
                  src="images/investors/gigascale.svg"
                  alt="Gigascale"
                />
              </div>
              <div className="h-12 w-full">
                <img
                  className="w-full h-full object-contain"
                  src="images/investors/1517.webp"
                  alt="1517 Fund"
                />
              </div>
            </div>
            <div className="mt-12 text-center text-white/50">and others...</div>

            <AccentSpinner className="absolute bottom-0 -right-4" />
          </section>
        </FadeInContainer>
        <FadeInContainer>
          <section className="pt-16 pb-20 relative" id="careers">
            <SectionHeader title="careers" />
            <div className="mt-24 flex flex-col gap-8 items-center md:flex-row md:justify-between max-w-md lg:max-w-4xl mx-auto">
              <p className="text-2xl text-center md:text-left">
                Join the team powering America&apos;s green rare earth future.
              </p>
              <Link
                href="mailto:jobs@solcoa.tech?subject=JOB%20INQUIRY%20-%20%5BYOUR%20NAME%5D&body=Tell%20us%20about%20something%20exceptional%20you've%20done%2C%20what%20are%20you%20most%20proud%20of%3F"
                target="_blank"
              >
                <Button variant="outline" size="lg">
                  Build the Future
                </Button>
              </Link>
            </div>
          </section>
        </FadeInContainer>
      </div>
      <Footer />
    </div>
  );
}
