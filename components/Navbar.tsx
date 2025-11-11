'use client';

import React, { useState } from 'react';
import { ChartArea, Menu, MessageCircle, PhoneCall, Search, Settings, ShoppingBasket, X } from 'lucide-react';
import Image from 'next/image';
import { logo } from '@/public/images2/brands';
import Link from 'next/link';

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
    const [active, setActive] = useState('');
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
                            <Settings onClick={() => setOpen(true)} className="cursor-pointer text-white p-1 bg-gray-400 size-8 hover:opacity-60 transition" size={22} />
                        </button>
                        <button className='flex bg-[#2E18A0] text-white cursor-pointer hover:opacity-90 transition-all duration-300 py-2 px-4 flex-row-reverse gap-2'>
                            <ShoppingBasket />
                            <p>السلة الخاصة بي</p>
                        </button>
                    </div>
                </div>

                <div className="flex-1 items-center lg:justify-end flex relative mx-4">
                    <div className='relative flex items-center'>
                        <Search size={18} className="absolute left-3 text-[#8712A1]" />
                        <input type="text" placeholder="Search" className="search w-md" />
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
