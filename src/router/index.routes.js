
import { pages } from "../controllers/index";
//
let content = document.getElementById("content");
//
const router = async (router) => {
   try {
      content.innerHTML = "";
      switch (router) {
         case "":
            return content.appendChild(pages.home());
         case "#/":
            return content.appendChild(pages.home());
         case "#/products":
            return content.appendChild(pages.products());
         case "#/post":
            return content.appendChild(await pages.post());
         default:
            return content.appendChild(pages.notFound());
      }
   }
   catch (e) {
      return content.appendChild(pages.notFound());
   }
};

export { router };