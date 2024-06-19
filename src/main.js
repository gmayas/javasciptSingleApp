//import './main.css';
//import './bootswatch.css';
//import 'bootswatch/dist/darkly/bootstrap.min.css';
import 'bootswatch/dist/superhero/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { router } from './router/index.routes'
router(window.location.hash);
window.addEventListener('hashchange', () => {
 router(window.location.hash);
});

// URL de Api Rest
let restServerUrl = "https://jsonplaceholder.typicode.com/users";
 
// Función que retorna la informacion de los usuarios (lista) y los guarda en local storage
const getUsers = async () => {
  try {
    let response = await fetch(restServerUrl);
    let dataReturn = await response.json()
    return dataReturn;
  } catch (e) {
    console.log(e);
    return {e}
  }
};

//
let getUsersToStorage = async () => {
  try {
      let dataRes = await getUsers();
      console.log("users main", dataRes)
      localStorage.setItem("users", JSON.stringify(dataRes))
  }
  catch (e) {
      console.log(e)
  }
}; 

await getUsersToStorage ();

