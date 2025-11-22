'use client';

import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '@/features/cart/cartSlice';
import { RootState } from '@/app/store';

const CountBtn = () => {
    const quantity = useSelector((state: RootState) => state.cart.quantity);
    const dispatch = useDispatch();

    return (
        <div className="border border-gray-400 rounded-md h-10 flex items-center select-none">
            <button onClick={() => dispatch(increase())} className="border-r manage-btn"> + </button>
                <span className="px-5 text-sm">{quantity}</span>
            <button onClick={() => dispatch(decrease())} className="border-l manage-btn"> - </button>
        </div>
    );
};

export default CountBtn;
