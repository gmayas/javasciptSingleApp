
import { pages } from "../controllers/index";
//
let content = document.getElementById("content");
//
const router = async (router) => {
   try {
      content.innerHTML = "";
      const regexS = /[?&=\d]/g;
      const value =  router.match(regexS)
      console.log('value:', value)
      var id = 0;
     if (value !== null){
         console.log('message.match: ', true)
         const url = router;
         const response = `{"${url.replace(/[/?#post]/g,'').trim().slice().replace(/[&]/g,'","').replace(/[=]/g,'":"')}"}` //.split(',');
         console.log('response:', response)
         const dataJson = JSON.parse(response)
         console.log('dataJson:', dataJson.id);
         id = +dataJson.id
     }
     console.log('id:', id);
     console.log('router:', router);
      switch (router) {
         case "":
            return content.appendChild(pages.home());
         case "#/":
            return content.appendChild(pages.home());
         case "#/users":
            return content.appendChild(await pages.users());
         case "#/post":
            return content.appendChild(await pages.post());
         case `#/post/?id=${id}`:
            console.log(`#/post/?id=${id}`)
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