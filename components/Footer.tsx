import Link from "next/link";
import According from "./According";
import { Mail, MapPin, Clock, Phone } from "lucide-react";

const faq = [
  {
    question: "الفئات الأساسية",
    answer: [
      { title: "الموضة والإكسسوارات" },
      { title: "الجمال والصحة" },
      { title: "الإلكترونيات" },
      { title: "البيت والمطبخ" },
      { title: "الثقافة والفن" },
      { title: "الأدوات الصناعية" },
      { title: "أدوات الرياضة" },
    ],
  },
  {
    question: "روابط أخرى",
    answer: [
      { title: "تطبيق DiGiShi" },
      { title: "دليل الشراء" },
      { title: "شروط وقوانين الاستخدام" },
      { title: "من نحن؟" },
      { title: "اتصل بنا" },
      { title: "سياسة الخصوصية" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className=" bg-[#27282B] text-white">
      {/* MOBILE VIEW – Accordion */}
        <div className="md:hidden px-4 py-8">
            <According items={faq} />

            {/* Contact */}
            <div className="mt-6 text-right text-white/70 text-sm space-y-3">
                <h1 className="text-white text-lg font-semibold mb-2">تواصل معنا</h1>

                <div className="flex justify-end gap-3">
                    <p>netboy746@gmail.com</p>
                    <Mail className="w-4" />
                </div>

                <div className="flex justify-end gap-3">
                    <p>دمشق - أتوستراد درعا - خلف التاون سنتر</p>
                    <MapPin className="w-4" />
                </div>

                <div className="flex justify-end gap-3">
                    <p>24/7</p>
                    <Clock className="w-4" />
                </div>

                <div className="flex justify-end gap-3">
                    <p>011-4435550</p>
                    <Phone className="w-4" />
                </div>
            </div>
        </div>

      {/* DESKTOP VIEW – 3 Columns */}
        <div className="hidden md:grid grid-cols-3 gap-8 px-8 py-10 text-right">
            <div>
                <h1 className="text-white text-lg font-semibold mb-3">تواصل معنا</h1>
                <ul className="text-white/70 space-y-2 text-sm">
                    <li className="flex justify-end gap-2"><span>netboy746@gmail.com</span> <Mail className="w-4" /></li>
                    <li className="flex justify-end gap-2 leading-6"> <span>دمشق - أتوستراد درعا - خلف التاون سنتر - مبنى شركة ديجي شي</span> <MapPin className="w-4" /></li>
                    <li className="flex justify-end gap-2"> <span>24/7</span> <Clock className="w-4" /> </li>
                    <li className="flex justify-end gap-2"> <span>011-4435550</span> <Phone className="w-4" /></li>
                </ul>
            </div>

            <div>
                <h1 className="text-white text-lg font-semibold mb-3">روابط أخرى</h1>
                <ul className="text-white/70 space-y-2 text-sm">
                    <li><Link href={'#'} className="link">تطبيق DiGiShi</Link></li>
                    <li><Link href={'#'} className="link">دليل الشراء</Link></li>
                    <li><Link href={'#'} className="link">شروط وقوانين الاستخدام</Link></li>
                    <li><Link href={'#'} className="link">من نحن؟</Link></li>
                    <li><Link href={'#'} className="link">اتصل بنا</Link></li>
                    <li><Link href={'#'} className="link">سياسة الخصوصية</Link></li>
                </ul>
            </div>

            <div>
                <h1 className="text-white text-lg font-semibold mb-3">الفئات الأساسية</h1>
                <ul className="text-white/70 space-y-2 text-sm">
                    <li><Link href={'#'} className="link">الموضة والإكسسوارات</Link></li>
                    <li><Link href={'#'} className="link">الجمال والصحة</Link></li>
                    <li><Link href={'#'} className="link">الإلكترونيات</Link></li>
                    <li><Link href={'#'} className="link">البيت والمطبخ</Link></li>
                    <li><Link href={'#'} className="link">الثقافة والفن</Link></li>
                    <li><Link href={'#'} className="link">الأدوات الصناعية</Link></li>
                    <li><Link href={'#'} className="link">أدوات الرياضة</Link></li>
                </ul>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
