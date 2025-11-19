// {
//         "id": 1,
//         "images": [
//             { "img": "/images2/glasses/img1.jpg" },
//             { "img": "/images2/glasses/img2.jpg" }
//         ],
//         "title": "نظارة أنيقة رقم 1",
//         "simple_description": "نظارة خفيفة ومناسبة للاستخدام اليومي.",
//         "review": 5,
//         "price": 154000,
//         "available": true,
//         "description": {
//             "brand": "Raypan",
//             "model": "G-101"
//         }
interface Image{
    img: string;
}

export interface Product{
    id: number,
    images: Image[],
    title: string,
    simple_description: string,
    review: number,
    price: number,
    available: boolean,
    description: {
        brand: string,
        model: string
    }
}