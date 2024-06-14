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

