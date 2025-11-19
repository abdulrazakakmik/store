import { According, CountBtn, Footer, ImageFocus, PreFooter, RelateSection4, Section4 } from '@/components';
import { Heart, Mail, RecycleIcon, Star, Truck } from 'lucide-react';
import products from '@/data/products.json';
import { Product } from '@/types';
import * as shoeImgs from "@/public/images2/shoes/index";
import Link from 'next/link';

interface Props {
  images: Record<string, any>;
  titlePrefix: string;
  min: number;
  max: number;
  discount: number;
  link: string
}

function getRandomIntInclusive(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
const productsShoes = generateProducts({
      images: shoeImgs,
      titlePrefix: "حذاء مميز رقم",
      min: 20000,
      max: 300000,
      discount: 0.1,
      link: '/shoes'
    });


type CategoryKey = keyof typeof products;

interface Props {
  params: Promise<{ category: string; id: string }>;
}

const Page = async ({ params }: Props) => {
  const { category, id } = await params;
  const productId = Number(id);

  const categoryKey = category as CategoryKey;
  const categoryProducts: Product[] = products[categoryKey];
  if (!categoryProducts) return <div>Category not found</div>;

  const product = categoryProducts.find((p: Product) => p.id === productId);
  if (!product) return <div>Product not found</div>;

  const feq = [
    {
      question: 'الوصف',
      answer: [
        {
          title: (
          <div className="">
            <div className='flex justify-end gap-3'>
              {product.description.brand}
              <div className='flex flex-row-reverse'>
                <span>الماركة</span>
                <span>:</span>
              </div>
            </div>
            <div className='flex justify-end gap-3'>
              {product.description.model}
              <div className='flex flex-row-reverse'>
                <span>الموديل</span>
                <span>:</span>
              </div>
            </div>
          </div>
        )
        }
      ]
    }
  ]

  return (
    <div className="mt-8">
      <div className="grid grid-cols-4 gap-3 px-5">

        {/* LEFT IMAGE SECTION */}
        <div className="col-span-4 sm:col-span-2 grid grid-cols-4 lg:h-fit">
          <ImageFocus product={product} />
        </div>

        {/* MIDDLE CONTENT */}
        <div className="col-span-4 sm:col-span-2 lg:border lg:p-2 lg:rounded-2xl lg:h-fit mb-30 relative">
          {/* TITLE */}
          <h1 className="text-right font-bold text-xl px-6">{product.title}</h1>

          {/* REVIEWS */}
          <div className="w-full items-center flex justify-between px-6 mt-3">
            <p className="text-[10px] text-gray-400 flex-1 text-right mr-10">
              REVIEWS {product.review}
            </p>
            <div className="flex">
              {[...Array(product.review)].map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400" />
              ))}
            </div>
          </div>

          {/* AVAILABILITY */}
          <div className="w-full items-center flex justify-between px-6 mt-3">
            <p className="text-[10px] text-right mr-10 w-full">
              {product.available ? (
                <span className="text-green-600 font-bold">متوفر</span>
              ) : (
                <span className="text-red-500 font-bold">غير متوفر</span>
              )}
            </p>
            <div className="flex">:التوفر</div>
          </div>

          {/* SIMPLE DESCRIPTION */}
          <div className="w-full items-center flex justify-between px-6 mt-3 mb-3">
            <p className="text-xs text-gray-600 flex-1 text-right mr-10">
              {product.simple_description}
            </p>
            <div className="flex">:التفاصيل</div>
          </div>

          {/* PRICE BOX */}
          <div className="border border-gray-400 rounded-md">{/* lg:sticky lg:top-20 */}
            <h1 className="text-right py-4 px-6 flex justify-end items-center border-b border-gray-300">
              <span className="flex flex-row-reverse gap-1 font-extrabold text-2xl text-red-600">
                {Number(product.price.toFixed(0)).toLocaleString()}
                <span className="font-extrabold text-2xl">ل.س</span>
              </span>
              <span className="font-bold mr-2 flex flex-row-reverse gap-1 *:font-extrabold *:text-2xl">
                <span>السعر</span>
                <span>:</span>
              </span>
            </h1>

            <div className='px-6 border-b border-gray-400'>

              <div className="mt-5 flex justify-between items-end">
                <button className="flex items-center gap-2 text-sm"> ADD TO WISHLIST <Heart color='red' size={16} /> </button>
                <div> <p className="text-[10px] text-right mb-2">الكمية :</p> <CountBtn /> </div>
              </div>

              <div className="py-4"> <button className="add-btn"> أضف للسلة </button> </div>
            </div>
            <div className='px-6 mt-5'>
              <p className='flex justify-between items-center text-black py-2'><Truck color='purple' /> <span className='text-[10px]'>التوصيل ضمن دمشق وحمص وطرطوس واللاذقية وحلب والسويداء</span></p>
              <p className='flex justify-between items-center text-black py-2'><Mail /> <span className='text-[10px]'>شحن إلى جميع المحافظات</span></p>
              <p className='flex justify-between items-center text-black py-2'><RecycleIcon color='yellow' /> <span className='text-[10px]'>الترجيع في حال كان المنتج مخالفاً للمواصفات</span></p>
            </div>
          </div>
          
          <div className='absolute right-0 -bottom-20 h-20 bg-[#D9EDF7] border-2 text-[#11698c] border-[#BCDFF1] text-[12px] leading-5 text-right p-3 w-[250px]'>
              عند شرائك كل 1 قطعة من هذا المنتج سوف تحصل على {Number(((product.price * 2) / 100).toFixed(0)).toLocaleString()} ل.س كرصيد يمكنك استخدامه في طلبياتك القادمة.
          </div>

        </div>

        <div className='col-span-4 px-6'>
          <According items={feq} link={false} add='px-2'/>
        </div>

        <RelateSection4 />

        <div className='col-span-4'> <PreFooter /> <Footer /></div>
      </div>
    </div>
  );
};

export default Page;
