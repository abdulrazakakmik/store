'use client'

import Link from 'next/link'
import Section4 from '../Section4'
import { useMemo } from 'react'
import * as shoeImgs from "@/public/images2/shoes/index";
import * as glassesImgs from "@/public/images2/glasses/index";
import * as phoneImgs from "@/public/images2/phone/index";
import * as makeupImgs from "@/public/images2/makeup/index";
import { useParams } from 'next/navigation';

function getRandomIntInclusive(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface Props {
  images: Record<string, any>;
  titlePrefix: string;
  min: number;
  max: number;
  discount: number;
  link: string;
}

function generateProducts({images, titlePrefix, min, max, discount, link}: Props) {
  return Object.values(images).map((img, i) => ({
    id: i + 1,
    img,
    title: `${titlePrefix} ${i + 1}`,
    cost: getRandomIntInclusive(min, max),
    discount,
    link: `${link}/${i + 1}`
  }));
}

const relatedLinksData: Record<string, { title: string, links: string[] }> = {
  shoes: {
    title: "الأحذية والموضة",
    links: ["أحذية رياضية", "أحذية كلاسيكية", "أحذية نسائية", "أحذية رجالية"]
  },
  glasses: {
    title: "إكسسوارات النظارات",
    links: ["نظارات شمسية", "نظارات طبية", "إطارات مميزة", "عدسات حماية"]
  },
  phones: {
    title: "ملحقات الهواتف",
    links: ["شواحن", "أغطية حماية", "سماعات", "حماية شاشة"]
  },
  makeup: {
    title: "مستحضرات التجميل",
    links: ["أحمر شفاه", "فاونديشن", "ماسكارا", "بودرة وجه"]
  }
};

const RelateSection4 = () => {
  const params = useParams();
  const category = params.category as string;

  const productsShoes = useMemo(() =>
    generateProducts({
      images: shoeImgs,
      titlePrefix: "حذاء مميز رقم",
      min: 20000,
      max: 300000,
      discount: 0.1,
      link: '/shoes'
    }), []);

  const productsGlasses = useMemo(() =>
    generateProducts({
      images: glassesImgs,
      titlePrefix: "نظارة مميزة رقم",
      min: 20000,
      max: 300000,
      discount: 0.1,
      link: '/glasses'
    }), []);

  const productsPhones = useMemo(() =>
    generateProducts({
      images: phoneImgs,
      titlePrefix: "هاتف ذكي إصدار",
      min: 2000000,
      max: 10000000,
      discount: 0.15,
      link: '/phones'
    }), []);

  const productsMakeup = useMemo(() =>
    generateProducts({
      images: makeupImgs,
      titlePrefix: "منتج تجميل رقم",
      min: 20000,
      max: 300000,
      discount: 0.1,
      link: '/makeup'
    }), []);

  // 🔥 Dynamic product map
  const productMap: Record<string, any[]> = {
    shoes: productsShoes,
    glasses: productsGlasses,
    phones: productsPhones,
    makeup: productsMakeup
  };

  const headerMap: Record<string, string> = {
    shoes: "أحذية رجالية ونسائية",
    glasses: "أفضل النظارات الحديثة",
    phones: "أحدث الهواتف الذكية",
    makeup: "أفضل منتجات التجميل"
  };

  const selectedProducts = productMap[category] || [];
  const selectedHeader = headerMap[category] || "منتجات";

  const relatedLinks = relatedLinksData[category];

  return (
    <div className='col-span-4 grid grid-cols-4'>
      
      {/* PRODUCTS SECTION */}
      <div className='col-span-4'>
        <Section4 products={selectedProducts} header={selectedHeader} show={false} two={false} header2="منتجات مقترحة لك" />
      </div>

      {/* RIGHT SIDE RELATED LINKS */}
      <div className="col-span-4 mt-4 px-6 mb-10 *:text-[10px] *:text-right">
        {relatedLinks && (
          <>
            <Link href={'#'}><h1 className='hover:text-green-500'>{relatedLinks.title}</h1></Link>
            <ul className='mt-3'>
              {relatedLinks.links.map((item, i) => (
                <li key={i} className='border-b border-gray-400 p-2 hover:text-purple-900'>
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

    </div>
  );
}

export default RelateSection4;
