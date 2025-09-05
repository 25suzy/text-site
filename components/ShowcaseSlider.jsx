export default function ShowcaseSlider(){
  const item = (i) => (
    <div key={i}
         className="w-[352px] h-[224px] md:w-[384px] md:h-[248px] rounded-2xl border bg-gray-50 border-gray-200 shrink-0" />
  );
  return (
    <section id="slider" className="section bg-white">
      <div className="container">
        <div className="overflow-hidden">
          <div
            className="flex gap-6"
            style={{ animation: "sliderLoop var(--slider-duration) linear infinite" }}
          >
            {[...Array(8)].map((_,i)=> item(i))}
            {[...Array(8)].map((_,i)=> item(i+8))}
          </div>
        </div>
      </div>
    </section>
  );
}
