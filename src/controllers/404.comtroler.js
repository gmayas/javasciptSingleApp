import homeView from '../views/404.html'

export default () => {
     const divElement = document.createElement('div');
     divElement.innerHTML = homeView;
     return divElement;
};