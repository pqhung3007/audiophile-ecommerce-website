import fs from "fs";
import path from "path";
import { Product } from "../models/Product";

export const readData = (): Product[] => {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContent = fs.readFileSync(jsonDirectory + "/data.json", "utf8");

  return JSON.parse(fileContent);
};

export const getProductsByCategory = (category: string): Product[] => {
  return readData().filter((product) => product.category === category);
};
