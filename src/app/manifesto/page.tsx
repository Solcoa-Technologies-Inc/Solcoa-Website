import Footer from "@/components/footer";
import GradientText from "@/components/gradient-text";
import Nav from "@/components/nav";
import { cn } from "@/lib/utils";

export default function Confidentiality() {
  return (
    <div className="flex flex-col items-center px-8 md:px-20 bg-black text-white">
      <div className="flex flex-col min-h-screen w-full max-w-screen-3xl">
        <Nav />
        <section className="relative min-h-screen pb-32 max-w-2xl mx-auto">
          <div className="mt-24 font-['Manrope'] font-medium tracking-tighter">
            <h1 className="text-white/50 text-lg tracking-tighter">
              Solcoa Manifesto
            </h1>

            <h2 className="mt-1 max-w-[800px] w-fit text-3xl md:text-4xl to-white/60 tracking-tighter">
              We must break <Pg className="font-black">FREE</Pg> from
              China&mdash;
              <Pg className="font-black">NOW</Pg>.
            </h2>

            <div>
              <p className="mt-8 text-xl text-white/75 ">
                In the 1950s, the United States transformed the rare earths
                industry, shaping the modern market we know today.
              </p>
              <blockquote className="pl-8 py-2 border-l-4 text-2xl md:text-3xl font-semibold border-purple-vibrant/60 mt-8 text-white/75">
                Decades later, we are helpless,{" "}
                <span className="">
                  producing nearly <Pg className="font-black">NONE</Pg> of what
                  we consume.
                </span>
              </blockquote>
              <p className="mt-8 text-xl text-white/75">
                Through destructive processes,{" "}
                <span>
                  China has{" "}
                  <Pg className="font-industry text-3xl font-bold uppercase tracking-normal">
                    steamrolled
                  </Pg>{" "}
                  our independence.
                </span>
              </p>
              <p className="mt-8 text-xl text-white/75">
                We have allowed this dominance to persist. We hesitate to
                reclaim control, in part due to the environmental toll of
                conventional processes.
              </p>
              <p className="mt-8 text-xl text-white/75">
                The challenge today isn&apos;t supply&mdash;it&apos;s
                processing. The dominance of which is precisely where China now
                wields a dangerous political weapon.
              </p>
              <p className="mt-8 text-xl text-white/75">
                In response, some companies have reverted to the outdated,
                damaging processes we once rightly rejected. This is not
                acceptable.
              </p>

              <blockquote className=" pl-8 py-2 border-l-4 border-purple-vibrant/60 mt-8 text-2xl md:text-3xl font-semibold text-white/75">
                Our domestic rare earth output remains negligible,{" "}
                <Pg className="font-black bg-purple-vibrant/90">
                  and we can&mdash;and must&mdash;do better.
                </Pg>
              </blockquote>

              <p className="mt-8 text-xl text-white/75">
                We founded Solcoa Industries to{" "}
                <Pg className="font-handwriting text-3xl font-bold">rewrite</Pg>{" "}
                this story.
              </p>

              <p className="mt-8 text-xl text-white/75">
                We are a team of fast, young, ambitious engineers, chemists, and
                metallurgists. Our goal is clear: to breathe new life into this
                vital industry by stabilizing and decarbonizing the supply
                chain.
              </p>
              <p className="mt-8 text-xl font-semibold text-white/75">
                We stand for relentless innovation, environmental stewardship,
                <br />
                <Pg className="font-black"> and putting America first.</Pg>
              </p>
              <p className="mt-8 text-xl text-white/75">
                Above all, we stand for dismantling the sluggish status quo.
              </p>

              <div className="mt-8">
                <div className="border-b pb-4">
                  <h3 className="text-5xl font-bold font-serif">
                    <Pg className="bg-purple-vibrant">Sol</Pg>
                    ve et <Pg className="bg-purple-vibrant">coa</Pg>
                    gula
                  </h3>
                  <p className="font-mono text-white/75 text-sm mt-1">
                    [SOHL-veh et koh-AH-goo-lah]{" "}
                    <span className="italic">Latin Phrase.</span>
                  </p>
                </div>
                <p className="text-xl font-serif text-white/75 mt-4 tracking-normal pl-4">
                  &mdash; Breaking down the old to build something new.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

function Pg({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <GradientText
      className={cn("from-purple-vibrant/90 to-purple-vibrant/60", className)}
    >
      <span>{children}</span>
    </GradientText>
  );
}
