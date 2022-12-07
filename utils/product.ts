import fs from "fs";
import path from "path";
import { Product } from "../models/Product";

export const readData = (): Product[] => {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContent = fs.readFileSync(jsonDirectory + "/data.json", "utf8");

  return JSON.parse(fileContent);
};

export const getProductsByCategory = (category: string): Product[] => {
  return readData()
    .filter((product) => product.category === category)
    .sort((a, b) => Number(b.new) - Number(a.new));
};

export const getCategories = (): string[] => {
  const category = readData().map((product) => product.category);
  return category;
};

export const getProductsPath = (): { category: string; slug: string }[] => {
  return readData().map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
};

export const getProductDetails = (slug: string): Product => {
  return readData().find((product) => product.slug === slug) as Product;
};
