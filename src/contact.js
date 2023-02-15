import phoneImg from './images/call.png';
import addressImg from './images/map-pin.png';

const contactDiv = () => {
  const contact = document.createElement('div');
  contact.className = 'contact';

  const phoneDiv = document.createElement('div');
  phoneDiv.className = 'phone';
  const phoneIcon = document.createElement('img');
  phoneIcon.src = phoneImg;
  const phoneNumber = document.createElement('div');
  phoneNumber.innerHTML = '(416)-222-3333';

  phoneDiv.appendChild(phoneIcon);
  phoneDiv.appendChild(phoneNumber);

  const addressDiv = document.createElement('div');
  addressDiv.className = 'address';
  const addressIcon = document.createElement('img');
  addressIcon.src = addressImg;
  const address = document.createElement('div');
  address.innerHTML = '111 Cloudy St. W.';

  addressDiv.appendChild(addressIcon);
  addressDiv.appendChild(address);

  contact.appendChild(phoneDiv);
  contact.appendChild(addressDiv);

  return contact;
};

export default contactDiv;
