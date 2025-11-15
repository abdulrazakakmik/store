import { Star } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import {img1, img2, img3, img4, img5, img6, img7, img8, img9} from '@/public/images2/brands/index'
import Carousel from './Carousel'

interface Product {
  img: StaticImageData
  title: string
  cost: number
  discount: number
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
                                const discountedPrice = product.cost * (1 - product.discount)
                                const discountAmount = product.cost - discountedPrice

                                return (
                                    <div key={index} className="border border-gray-300 rounded-2xl relative bg-white">
                                        <div className="relative w-full h-64 rounded-t-2xl overflow-hidden">
                                            <Image src={product.img} alt={product.title} fill className="object-cover max-h-64 rounded-t-2xl" sizes="80px" />
                                            <span className="absolute bg-red-500 text-white flex flex-row-reverse gap-1 text-xs right-2 top-2 rounded-tl-2xl rounded-br-2xl px-2 py-0.5">
                                                {Number(discountAmount.toFixed(0)).toLocaleString()} <span>ل.س</span>
                                            </span>
                                        </div>

                                        <div className="mt-4 space-y-1 p-2">
                                            <p className="text-md text-gray-600 line-clamp-1"> {product.title} </p>
                                            <p className="text-orange-700 font-bold flex flex-row-reverse text-sm"> {Number(discountedPrice.toFixed(0)).toLocaleString()} <span>ل.س</span> </p>
                                            <p className="line-through text-gray-400 text-xs" > {Number(product.cost.toFixed(0)).toLocaleString()} ل.س </p>
                                        </div>

                                        <div className="flex flex-row-reverse p-2 justify-center gap-4 mt-2 text-gray-400 text-xs">
                                            <div className='flex items-center'>
                                                {[...Array(5)].map((_, i) => <Star key={i} size={12} className='text-gray-400' />)}
                                            </div>
                                            <span>Reviews 0</span>
                                        </div>
                                        <button className='w-full hover:opacity-80 transition-all duration-300 text-white rounded-b-2xl bg-black opacity-70 p-3 cursor-pointer flex items-center justify-center text-xs'>
                                            أضف للسلة
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
                                            const discountedPrice = product.cost * (1 - product.discount)
                                            const discountAmount = product.cost - discountedPrice

                                            return (
                                                <div key={index} className="border border-gray-300 rounded-2xl relative bg-white">
                                                    <div className="relative w-full h-64 rounded-t-2xl overflow-hidden">
                                                        <Image src={product.img} alt={product.title} fill className="object-cover max-h-64 rounded-t-2xl" sizes="80px" />
                                                        <span className="absolute bg-red-500 text-white flex flex-row-reverse gap-1 text-xs right-2 top-2 rounded-tl-2xl rounded-br-2xl px-2 py-0.5">
                                                            {Number(discountAmount.toFixed(0)).toLocaleString()} <span>ل.س</span>
                                                        </span>
                                                    </div>

                                                    <div className="mt-4 space-y-1 p-2">
                                                        <p className="text-md text-gray-600 line-clamp-1"> {product.title} </p>
                                                        <p className="text-orange-700 font-bold flex flex-row-reverse text-sm"> {Number(discountedPrice.toFixed(0)).toLocaleString()} <span>ل.س</span> </p>
                                                        <p className="line-through text-gray-400 text-xs" > {Number(product.cost.toFixed(0)).toLocaleString()} ل.س </p>
                                                    </div>

                                                    <div className="flex flex-row-reverse p-2 justify-center gap-4 mt-2 text-gray-400 text-xs">
                                                        <div className='flex items-center'>
                                                            {[...Array(5)].map((_, i) => <Star key={i} size={12} className='text-gray-400' />)}
                                                        </div>
                                                        <span>Reviews 0</span>
                                                    </div>
                                                    <button className='w-full hover:opacity-80 transition-all duration-300 text-white rounded-b-2xl bg-black opacity-70 p-3 cursor-pointer flex items-center justify-center text-xs'>
                                                        أضف للسلة
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