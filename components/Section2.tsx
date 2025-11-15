import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Sections {
  img: StaticImageData,
  title: string,
  href: string,
}

interface Props {
  sections: Sections[]
}


const Section2 = ({sections}: Props) => {
  return (
    <section className="w-full py-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6 justify-items-center">
        {sections.map((section, index) => (
          <Link
            key={index}
            href={section.href}
            className="flex flex-col items-center justify-center text-center group cursor-pointer"
          >
            <div className="relative w-24 h-24 rounded-full border border-gray-200 shadow-sm transition-transform duration-500 group-hover:scale-105">
              <Image
                src={section.img}
                alt={section.title}
                fill
                sizes="96px"
                className="object-cover transition-transform duration-500 scale-90 group-hover:scale-150"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700 leading-tight group-hover:text-red-600 transition-colors duration-300">
              {section.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Section2;
