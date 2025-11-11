import { img1, img2, img4, img6 } from '@/public/images2/products/index'

const Carousel = ({width = "w-96"}: {width: string}) => {
  return (
    <div data-hs-carousel='{
    "loadingClassNamees": "opacity-0",
    "dotsItemClassNamees": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
    "isAutoPlay": true
  }' className="relative">
  <div className={`hs-carousel relative overflow-hidden ${width} h-64 bg-white rounded-lg`}>
    <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
      
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full">
          <div className="w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${img1.src})` }}></div>
        </div>
      </div>
      
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full">
          <div className="w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${img2.src})` }}></div>
        </div>
      </div>

      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full">
          <div className="w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${img4.src})` }}></div>
        </div>
      </div>
      
      <div className="hs-carousel-slide">
        <div className="flex justify-center h-full">
          <div className="w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${img6.src})` }}></div>
        </div>
      </div>
    
    </div>
  </div>
  <div className="hs-carousel-pagination justify-center absolute bottom-3 start-0 end-0 flex gap-x-2"></div>
</div>
  )
}

export default Carousel