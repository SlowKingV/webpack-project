import './style.css';

const component = () => {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Webpack built successfully!';

  return element;
}

document.body.appendChild(component());
