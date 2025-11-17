'use client'

import {Hero, Redsection, Section2, Offer, Section3, Brands, Section4, Footer, PreFooter} from "@/components/index";
import { useMemo } from "react";

import * as productImgs from "@/public/images2/products/index";
import * as shoeImgs from "@/public/images2/shoes/index";
import * as glassesImgs from "@/public/images2/glasses/index";
import * as phoneImgs from "@/public/images2/phone/index";
import * as makeupImgs from "@/public/images2/makeup/index";
import * as secondSectionImgs from "@/public/images2/second_section";
import * as brandImgs from "@/public/images2/brands";

import products from '@/data/products.json'

// console.log(JSON.parse(products))

function getRandomIntInclusive(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface Props {
  images: Record<string, any>;
  titlePrefix: string;
  min: number;
  max: number;
  discount: number;
  link: string
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

// Convert brand images into array
const brandImages = Object.values(brandImgs);

const sections = [
  { img: secondSectionImgs.img4, title: "الالكترونيات", href: "/electronics" },
  { img: secondSectionImgs.img1, title: "مكياج", href: "/makeup" },
  { img: secondSectionImgs.img2, title: "السوبر ماركت", href: "/supermarket" },
  { img: secondSectionImgs.img3, title: "العروض و التخفيضات", href: "/offers" },
  { img: secondSectionImgs.img8, title: "حقائب", href: "/bags" },
  { img: secondSectionImgs.img9, title: "البيت و المطبخ", href: "/home-kitchen" },
  { img: secondSectionImgs.img6, title: "موبايلات و تابليت", href: "/mobiles" },
  { img: secondSectionImgs.img5, title: "العناية الشخصية", href: "/personal-care" },
  { img: secondSectionImgs.img10, title: "أدوات رياضية", href: "/sports" },
  { img: secondSectionImgs.img11, title: "الثقافة و الفن", href: "/art-culture" },
  { img: secondSectionImgs.img12, title: "عطور", href: "/perfumes" },
  { img: secondSectionImgs.img7, title: "موضة و اكسسوارات", href: "/fashion" },
  { img: secondSectionImgs.img13, title: "الطاقة البديلة و المنظمات", href: "/energy" },
  { img: secondSectionImgs.img14, title: "الأدوات الطبية", href: "/medical" },
  { img: secondSectionImgs.img15, title: "الأدوات الصناعية", href: "/industrial" },
];

export default function Home() {

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

  const productsShoes = useMemo(() =>
    generateProducts({
      images: shoeImgs,
      titlePrefix: "حذاء مميز رقم",
      min: 20000,
      max: 300000,
      discount: 0.1,
      link: '/shoes'
    }), []);

  const products = useMemo(() =>
    generateProducts({
      images: productImgs,
      titlePrefix: "منتج رقم",
      min: 800,
      max: 10000,
      discount: 0.2,
      link: '/product'
    }), []);

  return (
    <div className="bg-gray-100 lg:bg-white pt-4 w-full">
      <Hero />
      <Redsection products={products}/>
      <Section2 sections={sections}/>
      <Offer header="العروض والتخفيضات" products={products} direction="left" links={false}/>
      <Offer header="الأحذية الجديدة" products={productsShoes} direction="right" links={true}/>
      <Section3 /> {/*show all category*/}
      <Brands images={brandImages}/>
      <Section4  products={productsShoes} header="أحذية رجالية ونسائية"  show={true}  two={true}  header2="أحدث الإصدارات الرياضية" />
      <Section4  products={productsGlasses}  header="نظارات شمسية وطبية"  show={false}  two={false}  header2="أفضل العدسات المريحة للعين" />
      <Section4 products={productsPhones} header="الموبايلات والتابلت" show={false} two={false} header2="أجهزة ذكية بأسعار تنافسية"/>
      <Section4 products={productsMakeup} header="مستحضرات التجميل" show={false} two={false} header2="جمالك يبدأ من هنا"/>
      <PreFooter />
      <Footer />
    </div>
  );
}
