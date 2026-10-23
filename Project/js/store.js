
import { fetchData } from "./api.js";

// Read products from local storage
export function storeDataToLocalStorage() {
    const products = localStorage.getItem("products");

    if (!products || products === "undefined") {
        return [];
    }

    try {
        return JSON.parse(products);
    } catch (error) {
        console.error("Invalid products data:", error);
        return [];
    }
}

// Fetch products and save them to local storage
export async function addToLocalStorage() {
    const products = await fetchData();

    localStorage.setItem("products", JSON.stringify(products));

    return products;
}