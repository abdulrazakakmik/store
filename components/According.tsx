"use client";

import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface AnswerItem {
    title: (string | ReactNode);
}

interface Item {
    question: string;
    answer: AnswerItem[]
}

interface Props {
    items: Item[];
    add: string;
    link: boolean;
}

export default function According({ items, add='', link=true }: Props) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <div className={`w-full block md:hidden ${add}`}>
            {items.map((item, i) => (
                <div key={i}>
                <button onClick={() => toggle(i)} className={`w-full gap-4 items-center flex py-5 ${link === true ?'text-white justify-end' :'text-black flex-row-reverse justify-between text-xs border-b-2 border-gray-400'}`}>
                    <span>{item.question}</span>
                    <span className="transition-transform duration-300">
                        {openIndex === i ? ( <Minus /> ) : ( <Plus /> )}
                    </span>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40" : "max-h-0"}`}>
                    <ul className="pb-4 pl-2 text-white text-sm space-y-2">
                        {item.answer.map((a, idx) => (
                            link === true
                                ? <li className="text-right link" key={idx}><Link href="#"> {a.title} </Link></li>
                                : <li className="text-right text-gray-400 mt-6" key={idx}> {a.title} </li>
                        ))}
                    </ul>
                </div>
            </div>
            ))}
        </div>
    );
}
