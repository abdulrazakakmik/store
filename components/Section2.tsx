import Image from "next/image";
import Link from "next/link";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
} from "@/public/images2/second_section";

const sections = [
  { image: img4, title: "الالكترونيات", href: "/electronics" },
  { image: img1, title: "مكياج", href: "/makeup" },
  { image: img2, title: "السوبر ماركت", href: "/supermarket" },
  { image: img3, title: "العروض و التخفيضات", href: "/offers" },
  { image: img8, title: "حقائب", href: "/bags" },
  { image: img9, title: "البيت و المطبخ", href: "/home-kitchen" },
  { image: img6, title: "موبايلات و تابليت", href: "/mobiles" },
  { image: img5, title: "العناية الشخصية", href: "/personal-care" },
  { image: img10, title: "أدوات رياضية", href: "/sports" },
  { image: img11, title: "الثقافة و الفن", href: "/art-culture" },
  { image: img12, title: "عطور", href: "/perfumes" },
  { image: img7, title: "موضة و اكسسوارات", href: "/fashion" },
  { image: img13, title: "الطاقة البديلة و المنظمات", href: "/energy" },
  { image: img14, title: "الأدوات الطبية", href: "/medical" },
  { image: img15, title: "الأدوات الصناعية", href: "/industrial" },
];

const Section2 = () => {
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
                src={section.image}
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
