import { features } from "../../data";

export default function PageHeaderImage({ src, alt, textWhite, textBlue }) {
  return (
    <div>
      
      <div className="relative h-56 md:h-96 overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          alt={alt}
          src={src}
        />
        <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
          <div className="text-center text-5xl md:text-7xl lg:text-8xl font-[450] tracking-wide leading-tight px-4">
            <span>{textWhite} </span>
            <span className="text-[#3513cd]">{textBlue}</span>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className={`${feature.background} p-1 md:p-3 items-center`}
            >
              <div className="flex flex-row md:flex-col items-center">
                <span className="">
                  <Icon className="text-white w-10 h-10 m-3 md:m-0" size={100} />
                </span>

                <p className="text-xl md:text-2xl text-white text-center font-semibold">
                  {feature.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
