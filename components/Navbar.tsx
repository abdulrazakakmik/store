'use client';

import React, { useEffect, useState } from 'react';
import { ChartArea, Menu, MessageCircle, PhoneCall, Search, Settings, ShoppingBasket, Trash, X } from 'lucide-react';
import Image from 'next/image';
import { logo } from '@/public/images2/brands';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { increaseQuantity, decreaseQuantity, clearCart, removerFromCart } from '@/features/cart/cartSlice';

const links = [
  { link: 'الماركات الحصرية', href: '#' },
  { link: 'الأكثر مبيعاً', href: '#' },
  { link: 'المنتجات الجديدة', href: '#' },
  { link: 'العروض و التخفيضات', href: '#' },
  { link: 'الماركات', href: '#' },
  { link: 'سوبر ماركت', href: '#' },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const value = useSelector((state: RootState) => state.cart.items)
    const dispatch = useDispatch();
    const [cartOpen, setCartOpen] = useState(false);
    
    useEffect(() => {
        if (value.length === 0 && cartOpen){
            const timeout = setTimeout(() => setCartOpen(false), 0);
            return () => clearTimeout(timeout);
        }
    }, [value, cartOpen]);

    return (
        <header className="relative z-50">
            <div className='hidden text-white text-xs p-4 items-center justify-between md:flex bg-linear-to-r from-[#8712A1] to-[#2F17A0]'>
                <div className='px-4 flex space-x-4'>
                    <p>تسجيل الدخول</p>
                    <p>|</p>
                    <p>أهلاَ زبون</p>
                </div>
                <div className='flex space-x-4'>
                    <div className='flex space-x-2'>
                        <p>0999999999 :واتساب</p>
                        <span><ChartArea size={15} className='text-purple-400' /></span>
                    </div>
                    <div className='flex space-x-2'>
                        <p>011-4443550: للرد الفوري</p>
                        <span><PhoneCall size={15} className='text-purple-400' /></span>
                    </div>
                    <div className='flex space-x-2'>
                        <p>test@gmail.com: راسلنا على</p>
                        <span><MessageCircle size={15} className='text-purple-400' /></span>
                    </div>
                </div>
            </div>

            <nav className="flex justify-between items-center shadow-lg lg:shadow-none p-3 bg-white">
                <div className="">
                    <Menu onClick={() => setOpen(true)} className="cursor-pointer lg:hidden hover:opacity-60 transition" size={22} />
                    <div className='hidden lg:flex lg:flex-row-reverse gap-2'>
                        <button>
                            <Settings onClick={() => setOpen(true)} className="cursor-pointer text-white p-2 bg-gray-400 size-14 hover:opacity-60" size={10} />
                        </button>
                        <button className='basket relative' onClick={() => setCartOpen((v) => !v)}>
                            <span className='absolute -top-3 right-7 flex size-6 items-center justify-center rounded-full bg-white text-green-400'>
                                {value.reduce((t, i) => t + i.quantity, 0)}
                            </span>
                            <ShoppingBasket />
                            <p>السلة الخاصة بي</p>
                        </button>
                        {cartOpen && (
                        <div className='absolute left-10 bg-primary shadow-2xl shadow-black border-2 border-primary w-[250px] p-1 top-29'>
                            <div
                                id="cart"
                                className="bg-white w-full flex flex-col text-sm text-gray-800"
                                >
                                {/* HEADER */}
                                <div className="flex items-center justify-between p-3 border-b">
                                    <span className="font-bold">سلة المشتريات</span>
                                    <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">
                                    {value.reduce((t, i) => t + i.quantity, 0)}
                                    </span>
                                </div>

                                {/* ITEMS */}
                                <div className="flex-1 overflow-y-auto max-h-64">
                                    {value.length === 0 ? (
                                    <p className="text-center text-gray-400 p-4">السلة فارغة</p>
                                    ) : (
                                    value.map((item) => (
                                        <div key={item.id} className="flex justify-between items-center gap-2 p-2 border-b hover:bg-gray-50">
                                            <Image src={item.image} width={50} height={50} alt={item.title} className="size-14 object-cover rounded"/>
                                            <div className="text-right">
                                                <p className="text-xs text-gray-500"> {(item.price * item.quantity).toLocaleString()} ل.س</p>
                                            </div>
                                            <div className="flex justify-between items-center gap-2">
                                                <span className="w-6 text-center text-xs">{item.quantity}</span>
                                                <div className='flex flex-col gap-1'>
                                                    <button onClick={() => dispatch(increaseQuantity(item.id))} className="basket-increase-btn">+</button>
                                                    <button onClick={() => dispatch(decreaseQuantity(item.id))} className="basket-increase-btn">-</button>
                                                </div>
                                                <button onClick={() => dispatch(removerFromCart(item.id))} className="trush-btn"> <Trash size={20} /> </button>
                                            </div>
                                        </div>
                                    ))
                                    )}
                                </div>

                                {/* FOOTER */}
                                {value.length > 0 && (
                                    <div className="p-3 border-t space-y-2">
                                        <div className="flex justify-between text-xs">
                                        <span>الإجمالي</span>
                                        <span className="font-bold">
                                            {value.reduce((t, i) => t + i.price * i.quantity, 0).toLocaleString()} ل.س
                                        </span>
                                        </div>

                                        {/* إفراغ السلة */}
                                        <button
                                        onClick={() => dispatch(clearCart())}
                                        className="block w-full text-center text-xs text-red-600 underline hover:text-red-800"
                                        >
                                        إفراغ السلة
                                        </button>

                                        <Link
                                        href="/cart"
                                        className="block w-full text-center bg-primary text-white py-2 rounded hover:opacity-90"
                                        onClick={() => setOpen(false)}
                                        >
                                        إتمام الطلب
                                        </Link>
                                    </div>
                                    )}
                                </div>
                        </div>
                        )}
                    </div>
                </div>

                <div className="flex-1 items-center lg:justify-end flex relative mx-4">
                    <div className='relative flex items-center'>
                        <Search size={18} className="absolute left-3 text-[#8712A1]" />
                        <input type="text" placeholder="Search" className="search xs:w-xs sm:w-md" />
                    </div>
                </div>

                <div className="shrink-0">
                    <Image src={logo} alt="logo" width={100} height={30} priority className="object-contain" />
                </div>
            </nav>

            <div
                className={`fixed top-0 left-0 w-full h-screen bg-white transform transition-transform duration-500 ease-in-out lg:hidden ${
                open ? 'translate-y-0' : 'translate-y-full'
                }`}
            >
                <div className="flex justify-between items-center shadow-md p-4">
                    <X className="cursor-pointer hover:text-gray-600 transition" size={20} onClick={() => setOpen(false)} />
                    <div className="font-bold text-lg">القائمة المميزة</div>
                </div>

                <div className="mt-4 divide-y divide-gray-200">
                {links.map((link, index) => (
                    <Link key={index} href={link.href} className="block text-right text-sm px-4 py-3 hover:bg-gray-100 transition" >
                    {link.link}
                    </Link>
                ))}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
