import Link from "next/link";
import Image from "next/image";
import * as makeupImages from "@/public/images2/makeup/index";
import * as glassesImages from "@/public/images2/glasses/index";
import * as phoneImages from "@/public/images2/phone/index";
import * as shoesImages from "@/public/images2/shoes/index";

const categories = [
  {
    title: "تخفيضات العناية بالبشرة والشعر",
    link: "#",
    images: [makeupImages.img1, makeupImages.img2],
  },
  {
    title: "الإكسسوارات الإلكترونية",
    link: "#",
    images: [glassesImages.img1, glassesImages.img2],
  },
  {
    title: "تخفيضات العطور",
    link: "#",
    images: [phoneImages.img1, phoneImages.img2],
  },
  {
    title: "أجهزة وأدوات الحلاقة للرجال",
    link: "#",
    images: [shoesImages.img1, shoesImages.img2],
  },
];

export default function Section3() {
  return (
    <div className="mt-4 space-y-3">
      <div className="grid grid-cols-2 gap-3 items-center w-fit m-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="border border-gray-300 p-3 rounded-2xl overflow-hidden w-[200px] md:w-sm lg:w-md xl:w-lg bg-white shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-3 border-b border-gray-200 text-sm font-semibold text-gray-700">
              <p>{category.title}</p>
              <Link
                href={category.link}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                عرض الكل
              </Link>
            </div>

            {/* Images */}
            <div className="flex flex-col gap-3">
              {category.images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={category.title}
                  height={200}
                  className={`w-full h-60 object-cover hover:scale-[1.02] transition-transform duration-300 ${i === 0 ? 'rounded-t-2xl' : 'rounded-b-2xl'}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
