import productsView from '../views/products.html'


export default () => {
     const divElement = document.createElement('div');
     divElement.innerHTML = productsView;
     return divElement;
};