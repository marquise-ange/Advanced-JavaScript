
import { storeDataToLocalStorage, addToLocalStorage } from "./store.js";

const container = document.getElementById("product-list");

let allProducts = [];

function displayProducts(products) {
    container.innerHTML = "";
    allProducts = products;

    products.forEach((product) => {
        container.innerHTML += `
        <div class="bg-white rounded-2xl shadow-sm border border-gray-200
                    overflow-hidden hover:shadow-xl transition-all duration-300
                    flex flex-col h-full">

            <!-- Product Image -->
            <div class="relative bg-gray-50 p-5">

                <span class="absolute top-3 left-3 z-10 bg-blue-600
                             text-white text-xs font-semibold px-3 py-1.5
                             rounded-full capitalize">
                    ${product.category}
                </span>

                <span class="absolute top-3 right-3 z-10 text-xs font-semibold
                             px-3 py-1.5 rounded-full
                    ${product.availabilityStatus === "In Stock"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"}">
                    ${product.availabilityStatus}
                </span>

                <img
                    src="${product.thumbnail}"
                    alt="${product.title}"
                    class="w-full h-52 object-contain"
                />
            </div>

            <!-- Product Details -->
            <div class="p-5 flex flex-col flex-1 gap-3">

                <h2 class="text-lg font-bold text-gray-900 line-clamp-2">
                    ${product.title}
                </h2>

                <p class="text-sm text-gray-500">
                    Brand: ${product.brand ?? "No brand"}
                </p>

                <div class="flex flex-wrap gap-2">
                    ${(product.tags ?? []).map(tag => `
                        <span class="bg-gray-100 text-gray-600
                                     text-xs px-2.5 py-1 rounded-md">
                            #${tag}
                        </span>
                    `).join("")}
                </div>

                <p class="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    ${product.description}
                </p>

                <div class="mt-auto pt-4 flex items-center justify-between
                            border-t border-gray-100">

                    <p class="text-2xl font-bold text-green-600">
                        $${product.price}
                    </p>

                    <button
                        data-id="${product.id}"
                        class="view-product bg-gray-600 hover:bg-blue-700
                               text-white text-sm font-medium px-4 py-2.5
                               rounded-lg cursor-pointer">
                        View Product
                    </button>
                </div>
            </div>
        </div>
        `;
    });
}



function viewProduct(id) {

    const product = allProducts.find(product => product.id === id);

    if (!product) return;

    const modal = document.getElementById("product-modal");
    const modalContent = document.getElementById("modal-content");

    modalContent.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

            <img
                src="${product.thumbnail}"
                alt="${product.title}"
                class="w-full h-72 object-contain bg-gray-50 rounded-xl"
            />

            <div class="space-y-3">
                <h2 class="text-2xl font-bold">${product.title}</h2>

                <p class="text-gray-500">
                    Brand: ${product.brand ?? "Unknown"}
                </p>

                <p class="text-sm capitalize">
                    Category: ${product.category}
                </p>

                <p class="text-sm text-green-600 font-semibold">
                    ${product.availabilityStatus}
                </p>

                <div class="flex flex-wrap gap-2">
                    ${(product.tags ?? []).map(tag => `
                        <span class="bg-gray-100 text-xs px-3 py-1 rounded-full">
                            #${tag}
                        </span>
                    `).join("")}
                </div>

                <p class="text-3xl font-bold text-green-600">
                    $${product.price}
                </p>

                <p class="text-gray-600 leading-relaxed">
                    ${product.description}
                </p>

                <p class="text-yellow-500 font-bold">
                    ★ ${product.rating ?? "Not rated"}
                </p>
            </div>
        </div>

        <!-- Reviews -->
        <div class="mt-8 border-t pt-5">

            <h3 class="text-xl font-bold mb-4">Customer Reviews</h3>

            ${(product.reviews ?? []).length > 0
            ? product.reviews.map(review => `
                    <div class="bg-gray-50 p-4 rounded-xl mb-3">
                        <div class="flex justify-between gap-3">
                            <h4 class="font-semibold">
                                ${review.reviewerName}
                            </h4>
                            <span class="text-yellow-500">
                                ★ ${review.rating}/5
                            </span>
                        </div>

                        <p class="text-sm text-gray-600 mt-2">
                            ${review.comment}
                        </p>
                    </div>
                `).join("")
            : `<p class="text-gray-500">No reviews yet.</p>`
        }
        </div>
    `;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
}



container.addEventListener("click", (event) => {

    const button = event.target.closest(".view-product");

    if (!button) return;

    const id = Number(button.dataset.id);

    viewProduct(id);
});



document.getElementById("close-modal").addEventListener("click", () => {

    const modal = document.getElementById("product-modal");

    modal.classList.add("hidden");
    modal.classList.remove("flex");
});



async function getsProducts() {
    let products = storeDataToLocalStorage() ?? [];

    if (products.length === 0) {
        products = await addToLocalStorage();
    }

    if (!products || products.length === 0) {
        container.innerHTML = `
            <p class="text-gray-500">No products found.</p>
        `;
        return;
    }

    displayProducts(products);
}

getsProducts().catch((error) => {
    console.error("Unable to load products:", error);
    container.innerHTML = `
        <p class="text-gray-500">Unable to load products. Please try again.</p>
    `;
});