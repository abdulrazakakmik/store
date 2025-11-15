"use client";

import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface AnswerItem {
    title: string;
}

interface Item {
    question: string;
    answer: AnswerItem[]
}

interface Props {
    items: Item[];
}

export default function According({ items }: Props) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <div className="w-full block md:hidden">
            {items.map((item, i) => (
                <div key={i}>
                <button onClick={() => toggle(i)} className="w-full flex justify-end gap-4 items-center py-5 text-white">
                    <span>{item.question}</span>
                    <span className="transition-transform duration-300">
                        {openIndex === i ? ( <Minus /> ) : ( <Plus /> )}
                    </span>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40" : "max-h-0"}`}>
                    <ul className="pb-4 pl-2 text-white text-sm space-y-2">
                        {item.answer.map((a, idx) => (
                            <li className="text-right link" key={idx}><Link href="#"> {a.title} </Link></li>
                        ))}
                    </ul>
                </div>
            </div>
            ))}
        </div>
    );
}
