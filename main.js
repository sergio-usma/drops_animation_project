const container = document.querySelector('.container');

function dropped() {
  const drop = document.createElement('span');

  drop.classList.add('drop');

  // eslint-disable-next-line no-restricted-globals
  drop.style.top = `${Math.random() * innerHeight}px`;
  // eslint-disable-next-line no-restricted-globals
  drop.style.left = `${Math.random() * innerWidth}px`;

  setTimeout(() => {
    drop.remove();
  }, 5000);

  container.appendChild(drop);
}

setInterval(dropped, 50);
