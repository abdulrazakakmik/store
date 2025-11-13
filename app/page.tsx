import { Hero, Redsection, Section2, Offer } from "@/components/index";
import {img3, img4, img5, img6, img7,img8, img9, img10, img11, img12} from '@/public/images2/products/index'

const products = [
  { img: img3, title: "ErgoComfort Office Chair", cost: 1000, discount: 0.2 },        // chair
  { img: img4, title: "Radiant Glow Face Cream", cost: 1000, discount: 0.2 },         // face cream
  { img: img5, title: "Essence Oud Perfume – 100ml", cost: 1000, discount: 0.2 },     // perfume
  { img: img6, title: "Nike AirFlex Running Shoes", cost: 1000, discount: 0.2 },      // Nike shoes
  { img: img7, title: "Canon VlogPro Camera 4K", cost: 1000, discount: 0.2 },         // camera
  { img: img8, title: "WaveSound Wireless Headphones", cost: 1000, discount: 0.2 },   // headphones
  { img: img9, title: "HydroPure Water Bottle 1L", cost: 800, discount: 0.1 },        // bottle
  { img: img10, title: "ChronoX Leather Wrist Watch", cost: 900, discount: 0.1 },     // watch
  { img: img11, title: "SpeedCheck Sports Sneakers", cost: 8000, discount: 0.1 },     // sport shoes
  { img: img12, title: "DermaSoft Facial Cleanser", cost: 7800, discount: 0.1 },      // skincare product
]


export default function Home() {
  return (
    <div className="bg-gray-100 lg:bg-white pt-4 w-full">
      <Hero />
      <Redsection />
      <Section2 />
      <Offer header="العروض والتخفيضات" products={products}/>
    </div>
  );
}
