import Footer from "@/components/footer";
import GradientText from "@/components/gradient-text";
import Nav from "@/components/nav";
import { cn } from "@/lib/utils";

export default function Confidentiality() {
  return (
    <div className="flex flex-col items-center px-8 md:px-20 bg-black text-white">
      <div className="flex flex-col min-h-screen w-full max-w-screen-3xl">
        <Nav />
        <section className="relative min-h-screen pb-20 max-w-2xl mx-auto">
          <div className="mt-24 font-['Manrope'] font-medium tracking-tighter">
            <h2 className="max-w-[800px] w-fit text-2xl sm:text-3xl md:text-4xl to-white/60 tracking-tighter">
              We must break <Pg className="font-black">FREE</Pg> from
              China&mdash;
              <Pg className="font-black">NOW</Pg>.
            </h2>
            <div>
              <p className="mt-8 text-xl text-white/75 ">
                In the 1950s, the United States transformed the rare earths
                industry, shaping the modern market we know today.
              </p>
              <p className="mt-8 text-xl text-white/75">
                Decades later, we are helpless,{" "}
                <span className="">
                  producing nearly <Pg className="font-black text-2xl">NONE</Pg>{" "}
                  of what we consume.
                </span>
              </p>
              <p className="mt-8 text-xl text-white/75">
                Through destructive processes,{" "}
                <span className="font-bold">
                  China has steamrolled our independence.
                </span>
              </p>
              <p className="mt-8 text-xl text-white/75">
                We have allowed this dominance to persist. We hesitate to
                reclaim control, in part due to the environmental toll of
                conventional processes.
              </p>
              <p className="mt-8 text-xl text-white/75">
                The challenge today isn't supply—it's processing. The dominance
                of which is precisely where China now wields a dangerous
                political weapon.
              </p>
              <p className="mt-8 text-xl text-white/75">
                In response, some companies have reverted to the outdated,
                damaging processes we once rightly rejected. This is not
                acceptable.
              </p>

              <blockquote className=" pl-8 py-2 border-l-4 border-purple-vibrant/60 mt-8 text-3xl font-semibold text-white/75">
                Our domestic rare earth output remains negligible,{" "}
                <Pg className="font-black">
                  and we can&mdash;and must&mdash;do better.
                </Pg>
              </blockquote>

              <p className="mt-8 text-xl text-white/75">
                We founded Solcoa Industries to rewrite this story.
              </p>
              <p className="mt-8 text-xl text-white/75">
                We are a team of fast, young, ambitious engineers, chemists, and
                metallurgists. Our goal is clear: to breathe new life into this
                vital industry by stabilizing and decarbonizing the supply
                chain.
              </p>
              <blockquote className="pl-8 py-2 border-l-4 border-purple-vibrant/60 mt-8 text-3xl font-semibold text-white/75">
                We stand for relentless innovation, environmental stewardship,{" "}
                <Pg className="font-black">and putting America first.</Pg>
              </blockquote>
              <p className="mt-8 text-xl text-white/75">
                Above all, we stand for dismantling the sluggish status quo.
              </p>
              <p className="mt-8 text-xl text-white/75">
                <span className="font-bold">Sol</span>ve et{" "}
                <span className="font-bold">coa</span>gula&mdash;
                <span className="font-bold">
                  breaking down the old to build something new.
                </span>
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

function U({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn("underline underline-offset-2 decoration-2", className)}
    >
      {children}
    </span>
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
