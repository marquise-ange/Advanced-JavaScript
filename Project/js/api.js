
// export the function 

export async function fetchData() {

    const url = "https://dummyjson.com/products";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error fetching data");
        }
        const data = await response.json();

        return data.products;

    } catch (error) {
        throw error;
    }
}