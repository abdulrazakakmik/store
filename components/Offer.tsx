import { Star } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import Marquee from "react-fast-marquee"

interface Product {
  img: StaticImageData
  title: string
  cost: number
  discount: number
}

interface Props {
  header: string
  products: Product[]
  direction: ('left' | 'right' | 'up' | 'down')
  links: (true | false),
}

const Offer = ({ header, products, direction='left', links=false }: Props) => {
    return (
    <div className="w-full mt-4">
        <div className="flex justify-end items-center">
            <div className="bg-primary p-5 text-white text-xs rounded-t-lg"> {header} </div>
        </div>
        
        <Marquee speed={30} gradient={true} gradientColor='white' gradientWidth={100} direction={direction}>
            <div className="flex flex-nowrap gap-3">
                {products.map((product, index) => {
                    const discountedPrice = product.cost * (1 - product.discount)
                    const discountAmount = product.cost - discountedPrice

                    return (
                        <div key={index} className="border w-56 sm:w-64 border-gray-300 rounded-2xl relative shrink-0 bg-white">
                            <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                                {
                                    links 
                                    ? <Link href={`/shoes/${product.id}`}><Image src={product.img} alt={product.title} fill className="object-cover max-h-64 rounded-2xl" sizes="80px" /></Link>
                                    : <Image src={product.img} alt={product.title} fill className="object-cover max-h-64 rounded-2xl" sizes="80px" />
                                }
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
        </Marquee>
    </div>
    )
}

export default Offer
