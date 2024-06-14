import homeView from '../views/home.html'


export default () => {
     const divElement = document.createElement('div');
     divElement.innerHTML = homeView;
     return divElement;
};