const url = "https://backend-62i.onrender.com/api/productos";
// const token = JSON.parse(localStorage.getItem("token")) || null;

const listaProducto = async () => {
  const respuesta = await fetch(url , {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const datos = await respuesta.json();

  return datos;
};








// const productAdd = async (datos) => {
//   const resp = await fetch(url, {
//     method: "POST",
//     body: JSON.stringify(datos),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       "x-token": token,
//     },
//   });

//   const data = await resp.json();

//   return data;
// };

// const productUpdate = async (id, datos) => {
//   const resp = await fetch(url + "/" + id, {
//     method: "PUT",
//     body: JSON.stringify(datos),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       "x-token": token,
//     },
//   });
//   const data = await resp.json();
//   return data;
// };

// const productDelete = async (id) => {
//   const resp = await fetch(url + "/" + id, {
//     method: "DELETE",
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//       "x-token": token,
//     },
//   });
//   const data = await resp.json();
//   return data;
// };

// export { listaProducto, productAdd, productUpdate, productDelete };
