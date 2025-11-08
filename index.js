// const getHelloWorldEl =  document.getElementById("helloWorld")

// function addClass() {
//     getHelloWorldEl.classList.add("text-green-500 text-blue")
//     getHelloWorldEl.classList.add("hidden")
//     getHelloWorldEl.style.color="blue"

// }

// const getData = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => showData(data));

//   const showData = async (data) => {
//     data?.map((post) => console.log(post));
//   };
// };

// const getData = async () => {
//   const response = await fetch("https://dummyjson.com/products");
//   const storeData = await response.json();
//   console.log(storeData);
//   console.log("Heloo");

//   storeData?.products?.map((product) => {
//     document.getElementById("details").innerHTML += `
//     <div>
//      <p>${product?.id}</p>
//         <p>${product?.title}</p>
//         <p>${product?.description}</p>
//         <img src=${product?.thumbnail} />
//     </div>

//         `;
//   });
// };

// Date 8-11-2025

const getCardContainerEl = document.getElementById("card-container");

const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  showProductOnUi(data)
};


const showProductOnUi=(data)=>{
  data.products.map((product)=>{
    const div = document.createElement("div")
    div.classList.add("border-2","border-blue-500","rounded-md","p-5")
    div.innerHTML += `
      <img src=${product?.thumbnail}>
      <p>${product?.title}</p>
      <p>${product?.price}</p>
      <button class="bg-blue-600 cursor-pointer text-white px-1 py-1 rounded-md my-5 text-center">Buy Now</button>
      ` 
    getCardContainerEl.appendChild(div)
  })
}


