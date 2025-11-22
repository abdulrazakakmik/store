import { Star } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import {img1, img2, img3, img4, img5, img6, img7, img8, img9} from '@/public/images2/brands/index'
import Carousel from './Carousel'
import Link from 'next/link'

interface Product {
    img: StaticImageData
    title: string
    cost: number
    discount: number,
    link: string
}

interface Props {
    header: string;
    products: Product[];
    show: boolean;
    two: boolean;
    header2: string;
}

const images: StaticImageData[] = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

const Section4 = ({header="Products", products, show=false, two=false, header2='Product'}: Props) => {
  return (
    <div className='mt-6 relative p-3'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3'>

            {/* left side in middle screen */}
            {
                show && (
                    <div className='col-span-2 md:col-span-1 order-2 md:order-1 md:col-start-1'>
                        <div className='bg-white text-white grid grid-cols-3 md:grid-cols-2'>
                            <h1 className='bg-[#105CAA] col-span-3 md:col-span-2 p-4 text-center'>أهم الماركات</h1>
                            {
                                images.map((image, index) => (
                                    <div key={index} className='p-4 border border-gray-300 flex items-center justify-center aspect-auto'>
                                        <Image src={image} alt='image' className='object-contain scale-90 h-18 w-full' />
                                    </div>
                                ))
                            }
                        </div>
                        <div className='mx-auto mt-5 flex justify-center'>
                            <Carousel width='w-64'/>
                        </div>
                    </div>
                )
            }
            {/* right side in middel screen */}
            <div className={`${show ? 'md:col-start-2 col-span-2 lg:col-span-3 xl:col-span-4 2xl:col-span-5 order-1 md:order-2' : 'col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 2xl:col-span-6'} `}>

                    <div className='text-center text-primary relative pt-2 bg-white overflow-hidden'>
                        <span className='absolute top-0 inset-x-0 h-2 bg-primary'>
                            <span className='absolute -top-1 bg-primary -translate-x-1/2 left-1/2 size-5 rotate-45'></span>
                        </span>
                        <p className='text-center p-2 font-semibold'>{header}</p>
                    </div>

                    <div className='m-auto rounded-2xl'>
                        <div className="grid justify-center mt-3 max-h-[450px] overflow-hidden grid-cols-[repeat(auto-fill,210px)] gap-3">
                            {products.map((product, index) => {
                                const discountedPriceNumber = Number((product.cost * (1 - product.discount)).toFixed(0));
                                const discountAmountNumber = Number((product.cost - discountedPriceNumber).toFixed(0));

                                return (
                                    <div key={index} className="border border-gray-300 rounded-2xl relative bg-white">
                                        <div className="relative w-full h-64 rounded-t-2xl group overflow-hidden">
                                            <Link href={product.link}><Image src={product.img} alt={product.title} fill className="object-cover max-h-64 rounded-t-2xl hover:rounded-2xl group-hover:rounded-2xl transition-all duration-300 shadow-2xl hover:scale-90" sizes="80px" /></Link>
                                            <span className="absolute bg-red-500 text-white flex flex-row-reverse gap-1 text-xs right-2 top-2 rounded-tl-2xl rounded-br-2xl px-2 py-0.5">
                                                {discountAmountNumber.toLocaleString("en-US")} <span>ل.س</span>
                                            </span>
                                        </div>

                                        <div className="mt-4 space-y-1 p-2">
                                            <Link className='group' href={product.link}>
                                                <p className="text-md p-1 text-gray-600 w-fit line-clamp-1 relative"> 
                                                    <span className='absolute bottom-2 w-0 transition-all duration-300 h-0.5 bg-black group-hover:w-full group-hover:bottom-0'></span>
                                                    {product.title} 
                                                </p>
                                            </Link>
                                            <p className="text-orange-700 mt-2 font-bold flex flex-row-reverse text-sm"> {discountedPriceNumber.toLocaleString("en-US")} <span>ل.س</span> </p>
                                            <p className="line-through text-gray-400 text-xs" > {Number(product.cost.toFixed(0)).toLocaleString("en-US")} ل.س </p>
                                        </div>

                                        <div className="flex flex-row-reverse p-2 justify-center gap-4 mt-2 text-gray-400 text-xs">
                                            <div className='flex items-center'>
                                                {[...Array(5)].map((_, i) => <Star key={i} size={12} className='text-gray-400' />)}
                                            </div>
                                            <span>Reviews 0</span>
                                        </div>
                                        <button className='buy-btn group'>
                                            <p className='z-10'>أضف للسلة</p>
                                            <span className='h-20 w-1 rotate-45 bg-gray-300 transition-all duration-300 absolute -left-10 group-hover:left-[calc(100%+15px)]'></span>
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {
                        two && (
                            <>
                                <div className='text-center text-primary relative pt-2 bg-white overflow-hidden'>
                                    <span className='absolute top-0 inset-x-0 h-2 bg-primary'>
                                        <span className='absolute -top-1 bg-primary -translate-x-1/2 left-1/2 size-5 rotate-45'></span>
                                    </span>
                                    <p className='text-center p-2 font-semibold'>{header2}</p>
                                </div>

                                <div className='m-auto rounded-2xl'>
                                    <div className="grid justify-center mt-3 max-h-[450px] overflow-hidden grid-cols-[repeat(auto-fill,210px)] gap-3">
                                        {products.map((product, index) => {
                                            const discountedPriceNumber = Number((Number(product.cost) * (1 - Number(product.discount))).toFixed(0));
                                            const discountAmountNumber = Number((product.cost - discountedPriceNumber).toFixed(0));

                                            return (
                                                <div key={index} className="border border-gray-300 rounded-2xl relative bg-white">
                                                    <div className="relative w-full h-64 rounded-t-2xl group overflow-hidden">
                                                        <Link href={product.link}><Image src={product.img} alt={product.title} fill className="object-cover max-h-64 rounded-t-2xl hover:rounded-2xl group-hover:rounded-2xl transition-all duration-300 shadow-2xl hover:scale-90" sizes="80px" /></Link>
                                                        <span className="absolute bg-red-500 text-white flex flex-row-reverse gap-1 text-xs right-2 top-2 rounded-tl-2xl rounded-br-2xl px-2 py-0.5">
                                                            {discountAmountNumber.toLocaleString("en-US")} <span>ل.س</span>
                                                        </span>
                                                    </div>

                                                    <div className="mt-4 space-y-1 p-2">
                                                        <Link className='group' href={product.link}>
                                                            <p className="text-md p-1 text-gray-600 w-fit line-clamp-1 relative"> 
                                                                <span className='absolute bottom-2 w-0 transition-all duration-300 h-0.5 bg-black group-hover:w-full group-hover:bottom-0'></span>
                                                                {product.title} 
                                                            </p>
                                                        </Link>
                                                        <p className="text-orange-700 mt-2 font-bold flex flex-row-reverse text-sm"> {discountedPriceNumber.toLocaleString("en-US")} <span>ل.س</span> </p>
                                                        <p className="line-through text-gray-400 text-xs" > {Number(product.cost.toFixed(0)).toLocaleString("en-US")} ل.س </p>
                                                    </div>

                                                    <div className="flex flex-row-reverse p-2 justify-center gap-4 mt-2 text-gray-400 text-xs">
                                                        <div className='flex items-center'>
                                                            {[...Array(5)].map((_, i) => <Star key={i} size={12} className='text-gray-400' />)}
                                                        </div>
                                                        <span>Reviews 0</span>
                                                    </div>
                                                    <button className='buy-btn group'>
                                                        <p className='z-10'>أضف للسلة</p>
                                                        <span className='h-20 w-1 rotate-45 bg-gray-300 transition-all duration-300 absolute -left-10 group-hover:left-[calc(100%+15px)]'></span>
                                                    </button>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </>
                        )
                    }
                    

            </div>

        </div>
    </div>
  )
}

export default Section4