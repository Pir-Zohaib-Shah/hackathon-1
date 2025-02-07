import { groq } from "next-sanity";


export const allProducts = groq`*[_type == 'products']`
export const allCategories = groq`*[_type == 'categories']`
export const eight = groq`*[_type == 'products'][0...8]`
export const featuredProducts = groq`*[_type == 'products'][0...4]`