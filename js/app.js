//Variables
const cart = document.querySelector("#carrito");
const cartContainer = document.querySelector("#lista-carrito tbody");
const emptyCartBtn = document.querySelector("#vaciar-carrito");
const coursesList = document.querySelector("#lista-cursos");
let cartProducts = [];

//Functions

const addCourse = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const selectedCOurse = e.target.parentElement.parentElement;
    readCourseData(selectedCOurse);
  }
};
coursesList.addEventListener("click", addCourse);

const readCourseData = (course) => {
  const infoCourse = {
    image: course.querySelector("img").src,
    name: course.querySelector("h4").textContent,
    price: course.querySelector("p span").textContent,
    id: course.querySelector("a").getAttribute("data-id"),
    quantity: 1,
  };
  cartProducts = [...cartProducts, infoCourse];
  console.log(cartProducts);
  cartHTML();
};
const cartHTML = () => {
  cleanCart();
  cartProducts.forEach((course) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>
        ${course.name}
        ${course.price}
        ${course.quantity}
    </td>`;
    cartContainer.appendChild(row);
  });
};
const cleanCart = () => {
  cartContainer.innerHTML ="";
};
