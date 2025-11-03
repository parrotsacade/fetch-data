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

const getData = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const storeData = await response.json();
  console.log(storeData);
  console.log("Heloo");

  storeData?.products?.map((product) => {
    document.getElementById("details").innerHTML += `
    <div>
     <p>${product?.id}</p>
        <p>${product?.title}</p>
        <p>${product?.description}</p>
        <img src=${product?.thumbnail} />
    </div>
       
        `;
  });
};
