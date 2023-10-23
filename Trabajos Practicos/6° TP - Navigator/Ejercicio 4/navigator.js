const body = document.body;
const OS = navigator.platform;
const divTitle = document.createElement('div');
const divPicture = document.createElement('div');
const title = document.createElement('h1');
const picture = document.createElement('img');

const h1_texto = document.createTextNode(OS);

body.appendChild(divTitle);
title.append(h1_texto);
divTitle.appendChild(title)

picture.width = 200;
picture.height = 200; 
body.appendChild(divPicture);

switch (OS) {
  case 'Win32':
    picture.setAttribute('src', 'https://th.bing.com/th/id/R.f13fcf58c804068e7657b190e3ec60ea?rik=%2fT%2fKKB%2bRulRJ2A&riu=http%3a%2f%2ftous-logos.com%2fwp-content%2fuploads%2f2017%2f04%2fHistoire-du-logo-Windows.jpg&ehk=dScLbCRImw67xFFcYHnXKVvcPwbxr8t2s6xYcfOAX5o%3d&risl=&pid=ImgRaw&r=0');
    divPicture.appendChild(picture);
    break;
  case 'Win64':
    picture.setAttribute('src', 'https://th.bing.com/th/id/R.f13fcf58c804068e7657b190e3ec60ea?rik=%2fT%2fKKB%2bRulRJ2A&riu=http%3a%2f%2ftous-logos.com%2fwp-content%2fuploads%2f2017%2f04%2fHistoire-du-logo-Windows.jpg&ehk=dScLbCRImw67xFFcYHnXKVvcPwbxr8t2s6xYcfOAX5o%3d&risl=&pid=ImgRaw&r=0');
    divPicture.appendChild(picture);
    break;
  case 'MacIntel':
    picture.setAttribute('src', 'https://pngimg.com/uploads/linux/linux_PNG47.png');
    divPicture.appendChild(picture);
    break;
  case 'MacPPC':
    picture.setAttribute('src', 'https://pngimg.com/uploads/linux/linux_PNG47.png');
    divPicture.appendChild(picture);
    break;
  case 'Linux i686':
    picture.setAttribute('src', 'https://th.bing.com/th/id/R.baa54d6eb1e1ea824fdbb8e162c97ae4?rik=r%2fI%2fpc3BGExumQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fdCgvblU.jpg&ehk=W3bxB844zsyCV%2b8mNmrq6NFPxr7OarOXSLCymTuL0ZE%3d&risl=&pid=ImgRaw&r=0');
    divPicture.appendChild(picture);
    break;
  case 'Linux x86_64':
    picture.setAttribute('src', 'https://th.bing.com/th/id/R.baa54d6eb1e1ea824fdbb8e162c97ae4?rik=r%2fI%2fpc3BGExumQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fdCgvblU.jpg&ehk=W3bxB844zsyCV%2b8mNmrq6NFPxr7OarOXSLCymTuL0ZE%3d&risl=&pid=ImgRaw&r=0');
    divPicture.appendChild(picture);
    break;
  case 'Linux armv7l':
    picture.setAttribute('src', 'https://th.bing.com/th/id/R.baa54d6eb1e1ea824fdbb8e162c97ae4?rik=r%2fI%2fpc3BGExumQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fdCgvblU.jpg&ehk=W3bxB844zsyCV%2b8mNmrq6NFPxr7OarOXSLCymTuL0ZE%3d&risl=&pid=ImgRaw&r=0');
    divPicture.appendChild(picture);
    break;
  case 'Linux aarch64':
    picture.setAttribute('src', 'https://th.bing.com/th/id/R.baa54d6eb1e1ea824fdbb8e162c97ae4?rik=r%2fI%2fpc3BGExumQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fdCgvblU.jpg&ehk=W3bxB844zsyCV%2b8mNmrq6NFPxr7OarOXSLCymTuL0ZE%3d&risl=&pid=ImgRaw&r=0');
    divPicture.appendChild(picture);
    break;
  default:
    alert('Mandaste cualquiera maquina');
    break;
}