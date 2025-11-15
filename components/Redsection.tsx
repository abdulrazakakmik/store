import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Products {
    id: number,
    img: StaticImageData,
    title: string,
    cost: number,
    discount: number,
}

interface Props {
    products: Products[]
}

const Redsection = ({products}: Props) => {
  return (
    <section className="px-2 py-3 mt-4 max-w-3xl lg:max-w-5xl xl:max-w-screen m-auto bg-red-600 lg:flex lg:relative">
        <div className=" flex items-center gap-2 overflow-x-auto snap-x snap-mandatory scroll-smooth lg:max-w-[750px] xl:max-w-[1200px]">
            {products.map((product, index) => {
                const discountedPrice = product.cost * (1 - product.discount);
                const Discount = product.cost - discountedPrice;
                return (
                <div key={index} className="min-w-[180px] bg-white rounded-xl shadow-md shrink-0 overflow-hidden transition-transform snap-start">
                    <div className="relative w-full aspect-square">
                        <Link href={'#'}><Image src={product.img} alt={product.title} fill className="object-cover" sizes="180px" /></Link>
                        <span className=" absolute w-fit bg-red-500 text-white flex flex-row-reverse gap-1 text-xs right-2 top-3 rounded-tl-2xl rounded-br-2xl px-2">
                            {Number(Discount.toFixed(0)).toLocaleString()}
                            <span>ل.س</span>
                        </span>
                    </div>
                    <div className="p-2 text-center relative mb-4">
                        <h3 className="text-[10px] text-left font-semibold text-gray-800 truncate"> {product.title} </h3>
                        <div className="text-lg text-right font-bold text-green-600 flex flex-row-reverse gap-1"> {Number(discountedPrice.toFixed(0)).toLocaleString()} <span>ل.س</span></div>
                        <div className="text-[8px] text-gray-500 line-through flex flex-row-reverse gap-1"> {Number(product.cost.toFixed(0)).toLocaleString()} <span>ل.س</span></div>
                        <button className="absolute -bottom-2 left-2 rounded-full border-3 border-gray-400 text-sm font-bold text-gray-600 w-5 h-5 flex items-center justify-center">+</button>
                    </div>
                </div>
                );
            })}
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:w-lg xl:w-xl">
            <Image src={'/image2.png'} alt="discount" width={100} height={100} className="size-30 2xl:size-60 scale-100 object-cover z-10"/>
            <p className="font-primary text-white text-4xl 2xl:text-6xl">Discount</p>
        </div>
    </section>
  );
};

export default Redsection;
