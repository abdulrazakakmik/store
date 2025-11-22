'use client'

import { useSelector, useDispatch } from "react-redux"
import { addToCart } from "@/features/cart/cartSlice"
import { RootState } from "@/app/store"
import { Product } from "@/types"

interface Props {
    product: Product,
    className: string,
}

const Buybtn = ({ product, className = ''  }: Props) => {
    const quantity = useSelector((state: RootState) => state.cart.quantity);
    const items = useSelector((state: RootState) => state.cart.items);
    console.log(items)

    const dispatch = useDispatch();
  return (
    <button className={className} onClick={() => dispatch(addToCart({product, quantity}))}>
         أضف إلى السلة
    </button>
  )
}

export default Buybtn