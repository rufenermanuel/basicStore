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

const deleteCourse = (e) => {
  if (e.target.classList.contains("borrar-curso")) {
    const courseId = e.target.getAttribute("data-id");
    cartProducts = cartProducts.filter((course) => course.id !== courseId);
    cartHTML();
    console.log("desde eliminar curso");
  }
};
cart.addEventListener("click", deleteCourse);
const emptycart = () => {
  console.log(cartProducts);
  cartProducts = [];
  console.log(cartProducts);
  cartHTML();
};
emptyCartBtn.addEventListener("click", emptycart);

const readCourseData = (course) => {
  const infoCourse = {
    image: course.querySelector("img").src,
    name: course.querySelector("h4").textContent,
    price: course.querySelector("p span").textContent,
    id: course.querySelector("a").getAttribute("data-id"),
    quantity: 1,
  };

  const exist = cartProducts.some((course) => course.id === infoCourse.id);

  if (exist) {
    const courses = cartProducts.map((course) => {
      if (course.id === infoCourse.id) {
        course.quantity++;
        return course;
      } else {
        return course;
      }
    });
    cartProducts = [...cartProducts];
  } else {
    cartProducts = [...cartProducts, infoCourse];
  }
  cartHTML();
};
const cartHTML = () => {
  cleanCart();
  cartProducts.forEach((course) => {
    const row = document.createElement("tr");
    const { id, image, price, name, quantity } = course;
    row.innerHTML = `
    <td>
    <img src='${image}' width='100'>
    </td>
    <td>
        ${name}
    </td>
    <td>
        ${price}
    </td>
    <td>
        ${quantity}
    </td>
    <td>
        <a href='#' class='borrar-curso' data-id='${id}'>X</a>
    </td>`;

    cartContainer.appendChild(row);
  });
};
const cleanCart = () => {
  while (cartContainer.firstChild) {
    cartContainer.removeChild(cartContainer.firstChild);
  }
};
