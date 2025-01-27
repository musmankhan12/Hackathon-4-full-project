import { groq } from "next-sanity";

export const allProduct = groq`*[_type == "product"]`;
export const four = groq`*[_type == "product"][0..3]`;
export const productBySlug = groq`*[_type == "product" && slug.current == $slug][0]`;
