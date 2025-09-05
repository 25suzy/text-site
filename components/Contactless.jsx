import Reveal from "./Reveal";
export default function Contactless(){
  return (
    <section id="contactless" className="section bg-white">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <Reveal><h2 className="h2 font-semibold">Contactless payments? Sure.</h2></Reveal>
        <div className="card h-[208px]" />
      </div>
    </section>
  );
}
