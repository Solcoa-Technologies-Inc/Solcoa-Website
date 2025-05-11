import Footer from "@/components/footer";
import Nav from "@/components/nav";

export default function ApplyPage() {
  return (
    <div className="flex flex-col w-full items-center px-8 md:px-20">
      <div className="flex flex-col min-h-screen w-full max-w-screen-3xl">
        <Nav />

        <section className="flex flex-col items-center h-screen pt-20">
          <h1 className="w-full text-center text-4xl">
            Whats cooking good lookin?
          </h1>
        </section>
      </div>
      <Footer />
    </div>
  );
}
