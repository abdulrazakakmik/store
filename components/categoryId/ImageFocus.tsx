"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@/types";
import MagnifierLens from "./MagnifierLens";

export default function ImageFocus({ product }: { product: Product }) {
    const [active, setActive] = useState(0);
    const [zoom, setZoom] = useState(0.4);

    return (
        <div className="grid grid-cols-4 col-span-4">
            <div className="col-span-4">

                <MagnifierLens src={product.images[active].img} zoom={zoom} setZoom={setZoom} lensSize={300} />

                <div className="mt-4 flex lg:flex-row-reverse lg:justify-start md:justify-end gap-4">
                    {product.images.map((img, idx) => (
                        <Image key={idx} src={img.img} alt="product" width={90} height={90}
                            onClick={() => setActive(idx)}
                            className={`aspect-square cursor-pointer border-2 object-cover ${
                                active === idx ? "border-green-400" : "border-transparent"
                            }`}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}
