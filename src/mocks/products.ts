import { ValuesType } from "utility-types";

export const mockProducts = [
  {
    id: "1",
    name: "Elixir da Eternidade",
    price: 50.0,
    image: "/products/product-1.png",
    category: ["promotion"],
  },

  {
    id: "2",
    name: "Vitamina do Sol",
    price: 50.0,
    image: "/products/product-2.png",
    category: ["promotion"],
  },
  {
    id: "3",
    name: "Vitamina da Lua",
    price: 50.0,
    image: "/products/product-3.png",
    category: ["promotion"],
  },
  {
    id: "4",
    name: "Pétalas de Amor",
    price: 50.0,
    image: "/products/product-4.png",
    category: ["promotion"],
  },
  {
    id: "5",
    name: "Essência da Natureza",
    price: 50.0,
    image: "/products/product-5.png",
    category: ["promotion"],
  },
  {
    id: "6",
    name: "Jasmin com notas de Rosa",
    price: 50.0,
    image: "/products/product-6.png",
    category: ["promotion"],
  },
  {
    id: "7",
    name: "Essência de Melissa",
    price: 50.0,
    image: "/products/product-7.png",
    category: ["promotion"],
  },
  {
    id: "8",
    name: "Pureza Iluminada",
    price: 50.0,
    image: "/products/product-8.png",
    category: ["promotion"],
  },
  {
    id: "9",
    name: "Essência de patchouli",
    price: 50.0,
    image: "/products/product-9.png",
    category: ["promotion"],
  },
];

export type IProduct = ValuesType<typeof mockProducts>;
