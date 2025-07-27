import { PRODUCT_PRICES } from "@/config/products"

export const COLORS = [
    {label: "Natural Titanium", value: "natural_titanium", twBg: "bg-[#837F7D]", twBorder: "border-[#837F7D]"},
    {label: "Midnight", value: "midnight", twBg: "bg-[#343b43]", twBorder: "border-[#343b43]"},
    {label: "Deep Purple", value: "deep_purple", twBg: "bg-[#594F63]", twBorder: "border-[#594F63]"},
    {label: "Blue", value: "blue", twBg: "bg-[#A0B4C7]", twBorder: "border-[#A0B4C7]"},
    {label: "Rose Gold", value: "rose_gold", twBg: "bg-[#E0BFB8]", twBorder: "border-[#E0BFB8]"},
] as const

export const MODELS = {
    name: 'models',
    options: [
        {
            label: 'iPhone X',
            value: 'iphonex'
        },
        {
            label: 'iPhone 11',
            value: 'iphone11'
        },
        {
            label: 'iPhone 12',
            value: 'iphone12'
        },
        {
            label: 'iPhone 13',
            value: 'iphone13'
        },
        {
            label: 'iPhone 14',
            value: 'iphone14'
        },
        {
            label: 'iPhone 15',
            value: 'iphone15'
        },
        {
            label: 'iPhone 16',
            value: 'iphone16'
        },
    ]
} as const

export const MATERIALS = {
    name: "material",
    options : [
        {
            label: "Silicon",
            value: "silicone",
            description: undefined,
            price: PRODUCT_PRICES.material.silicon
        },
        {
            label: "Soft Polycarbonate",
            value: "polycarbonate",
            description: "scratch-resistant coating",
            price: PRODUCT_PRICES.material.polycarbonate
        },
    ]
} as const

export const FINISHES = {
    name: "finish",
    options : [
        {
            label: "Smooth Finish",
            value: "smooth",
            description: undefined,
            price: PRODUCT_PRICES.finish.smooth
        },
        {
            label: "Textured Finish",
            value: "textured",
            description: "soft grippy texture",
            price: PRODUCT_PRICES.finish.textured
        },
    ]
} as const