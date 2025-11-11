import Carousel from './Carousel'
import { img1 as phoneImg } from '@/public/images2/phone'
import { img1 as glassesImg } from '@/public/images2/glasses'
import { img1 as shoesImg } from '@/public/images2/shoes'
import { img1 as makeupImg } from '@/public/images2/makeup'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="grid grid-cols-2 lg:grid-rows-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 max-w-2xl lg:max-w-5xl xl:max-w-7xl m-auto px-4 lg:px-10">

      {/* Carousel (Main Section) */}
      <div className="col-span-2 lg:row-span-2">
        <Carousel width="w-full" />
      </div>

      {/* Product 1 */}
      <div className="rounded-2xl bg-gray-100 overflow-hidden aspect-4/3 hover:scale-[1.02] transition">
        <Link href="#" className="block w-full h-full relative">
          <Image
            src={phoneImg}
            alt="Phone"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </Link>
      </div>

      {/* Product 2 */}
      <div className="rounded-2xl bg-gray-100 overflow-hidden aspect-4/3 hover:scale-[1.02] transition">
        <Link href="#" className="block w-full h-full relative">
            <Image
                src={glassesImg}
                alt="Glasses"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
            />
            </Link>
        </div>

        {/* Product 3 */}
        <div className="rounded-2xl bg-gray-100 overflow-hidden aspect-4/3 hover:scale-[1.02] transition">
            <Link href="#" className="block w-full h-full relative">
            <Image
                src={shoesImg}
                alt="Shoes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
            />
        </Link>
      </div>

      {/* Product 4 */}
      <div className="rounded-2xl bg-gray-100 overflow-hidden aspect-4/3 hover:scale-[1.02] transition">
        <Link href="#" className="block w-full h-full relative">
          <Image
            src={makeupImg}
            alt="Makeup"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </Link>
      </div>

      {/* Right Sidebar (optional for xl screens) */}
      <div className="hidden shadow-2xl xl:flex xl:row-start-1 xl:row-end-3 xl:col-start-5 items-center relative justify-center text-gray-700 font-bold text-xl">
        <h1 className='bg-[#3C17A0] text-white font-bold text-sm block w-full text-center p-3 absolute top-0'>ALL CATEGORIES</h1>
        <div className='divide-y-2 divide-gray-400/50 *:text-[10px] *:w-full *:inline-block *:text-right *:pr-3 *:p-2 pt-2 text-gray-500'>
            <p>موضة و اكسسوارات</p>
            <p>الأدوات الطبية</p>
            <p>الالكترونيات</p>
            <p>البيت و المطبخ</p>
            <p>الثقافة و الفن</p>
            <p>الأدوات الصناعية</p>
            <p>أدوات رياضية</p>
            <p>الأدوات الطبية</p>
        </div>
      </div>

    </section>
  )
}

export default Hero
