
import { pages } from "../controllers/index";
//
let content = document.getElementById("content");
//
const router = async (router) => {
   try {
      content.innerHTML = "";
      const regexS = /[?&=\d]/g;
      const value =  router.match(regexS)
      var id = 0;
     if (value !== null){
         const url = router;
         const response = `{"${url.replace(/[/?#post]/g,'').trim().slice().replace(/[&]/g,'","').replace(/[=]/g,'":"')}"}` //.split(',');
         const dataJson = JSON.parse(response)
         id = +dataJson.id
     }
      switch (router) {
         case "":
            return content.appendChild(pages.home());
         case "#/":
            return content.appendChild(pages.home());
         case "#/users":
            return content.appendChild(await pages.users());
         case `#/post/?id=${id}`:
            return content.appendChild(await pages.post(id));
         default:
            return content.appendChild(pages.notFound());
      }
   }
   catch (e) {
      console.log('error:', e)
      return content.appendChild(pages.notFound());
   }
};

export { router };