const headerDiv = () => {
  const header = document.createElement('div');
  header.className = 'header';

  const headerLeft = document.createElement('div');
  headerLeft.className = 'header-left';

  const title = document.createElement('div');
  title.className = 'title';
  title.innerHTML = 'Misty Cafe';

  const headerRight = document.createElement('div');
  headerRight.className = 'header-right';

  const menuBtn = document.createElement('div');
  menuBtn.className = 'menu-button';
  menuBtn.innerHTML = 'MENU';

  const contactBtn = document.createElement('div');
  contactBtn.className = 'contact-button';
  contactBtn.innerHTML = 'CONTACT';

  header.appendChild(headerLeft);
  header.appendChild(headerRight);

  headerLeft.appendChild(title);

  headerRight.appendChild(menuBtn);
  headerRight.appendChild(contactBtn);

  return header;
};

export default headerDiv;
