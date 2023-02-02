const toggleNav = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const closeMenu = document.querySelector('.close-menu');
const closeLinks = document.querySelectorAll('.nav a');

toggleNav.addEventListener('click', () => {
  nav.classList.toggle('open');
  closeMenu.style.display = nav.classList.contains('open') ? 'block' : 'none';
  toggleNav.style.display = nav.classList.contains('open') ? 'none' : 'block';
});

closeMenu.addEventListener('click', () => {
  nav.classList.remove('open');
  closeMenu.style.display = 'none';
  toggleNav.style.display = 'block';
});

closeLinks.forEach((closeLink) => {
  closeLink.addEventListener('click', (e) => {
    nav.classList.remove('open');
    closeMenu.style.display = 'none';
    toggleNav.style.display = 'block';
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const target = document.querySelector(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const projectSection = document.getElementById('recent');

const popupWindow = document.getElementById('project-popup');

const projectinfo = [
  {
    id: 0,
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/SnapshootPortfolio.svg',
    featureddeskImage: './images/DeskPopup.svg',
    technologies: ['Ruby On Rails', 'css', 'JavScript', 'html'],
    links: [{ text: 'See Live', link: '#', Icon: 'fa fa-external-link' }, { text: 'See Source', link: '#', Icon: 'fa fa-github' }],
    pojectH2: 'Keeping track of hundreds of components',
  },
  {
    id: 1,
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/SnapshootPortfolio.svg',
    featureddeskImage: './images/DeskPopup.svg',
    technologies: ['Ruby On Rails', 'css', 'JavScript', 'html'],
    links: [{ text: 'See Live', link: '#', Icon: 'fa fa-external-link' }, { text: 'See Source', link: '#', Icon: 'fa fa-github' }],
    pojectH2: 'Keeping track of hundreds of components',
  },
  {
    id: 2,
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/SnapshootPortfolio.svg',
    featureddeskImage: './images/DeskPopup.svg',
    technologies: ['Ruby On Rails', 'css', 'JavScript', 'html'],
    links: [{ text: 'See Live', link: '#', Icon: 'fa fa-external-link' }, { text: 'See Source', link: '#', Icon: 'fa fa-github' }],
    pojectH2: 'Keeping track of hundreds of components',
  },
  {
    id: 3,
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/SnapshootPortfolio.svg',
    featureddeskImage: './images/DeskPopup.svg',
    technologies: ['Ruby On Rails', 'css', 'JavScript', 'html'],
    links: [{ text: 'See Live', link: '#', Icon: 'fa fa-external-link' }, { text: 'See Source', link: '#', Icon: 'fa fa-github' }],
    pojectH2: 'Keeping track of hundreds of components',
  },
  {
    id: 4,
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/SnapshootPortfolio.svg',
    featureddeskImage: './images/DeskPopup.svg',
    technologies: ['Ruby On Rails', 'css', 'JavScript', 'html'],
    links: [{ text: 'See Live', link: '#', Icon: 'fa fa-external-link' }, { text: 'See Source', link: '#', Icon: 'fa fa-github' }],
    pojectH2: 'Keeping track of hundreds of components',
  },
  {
    id: 5,
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/SnapshootPortfolio.svg',
    featureddeskImage: './images/DeskPopup.svg',
    technologies: ['Ruby On Rails', 'css', 'JavScript', 'html'],
    links: [{ text: 'See Live', link: '#', Icon: 'fa fa-external-link' }, { text: 'See Source', link: '#', Icon: 'fa fa-github' }],
    pojectH2: 'Keeping track of hundreds of components',
  },
];

const headDiv = document.createElement('div');
const headRecent = document.createElement('h1');
headRecent.setAttribute('class', 'head-recent');
headDiv.appendChild(headRecent);
const recentBar = document.createElement('span');
recentBar.setAttribute('class', 'recent-bar');
headDiv.appendChild(recentBar);
const gridContainer = document.createElement('div');
gridContainer.setAttribute('class', 'grid-container');

for (let i = 0; i < projectinfo.length; i += 1) {
  const gridItem = document.createElement('div');
  gridItem.setAttribute('class', 'grid-item');
  const flexContainer = document.createElement('div');
  flexContainer.setAttribute('class', 'flex-container');
  const worksImage = document.createElement('div');
  worksImage.setAttribute('class', 'works-image');
  const worksInner = document.createElement('div');
  worksInner.setAttribute('class', 'works-inner');
  const worksPara = document.createElement('p');
  worksPara.textContent = projectinfo[i].name;
  const workslist = document.createElement('ul');
  for (let x = 0; x < projectinfo[i].technologies.length; x += 1) {
    const item = projectinfo[i].technologies[x];
    const itemElement = document.createElement('li');
    itemElement.textContent = item;
    workslist.appendChild(itemElement);
  }

  const worksBtn = document.createElement('button');
  worksBtn.setAttribute('id', 'browse-project');
  worksBtn.setAttribute('class', 'btn-browse');
  worksBtn.textContent = 'See Project';

  flexContainer.appendChild(worksImage);
  worksInner.appendChild(worksPara);
  worksInner.appendChild(workslist);
  worksInner.appendChild(worksBtn);
  flexContainer.appendChild(worksInner);
  gridItem.appendChild(flexContainer);
  gridContainer.appendChild(gridItem);
}

projectSection.appendChild(headDiv);
projectSection.appendChild(gridContainer);

function languageList(langLoader) {
  let loader = '';
  langLoader.forEach((lags) => {
    loader += `<li>${lags}</li>`;
  });
  return loader;
}

function linkList(linkLoader) {
  let lloader = '';
  linkLoader.forEach((links) => {
    lloader += `
    <li class="link-list">
      <a href="${links.link}">
      <span>${links.text}</span>
      <i class="${links.Icon}"></i>
      </a>
    </li>`;
  });
  return lloader;
}

function headerlinkList(headerlinkLoader) {
  let hloader = '';
  headerlinkLoader.forEach((hlinks) => {
    hloader += `
    <li class="headerlink-list">
      <a href="${hlinks.link}">
      <span>${hlinks.text}</span>
      <i class="${hlinks.Icon}"></i>
      </a>
    </li>`;
  });
  return hloader;
}

function buildModelDyna(projectinfo) {
  popupWindow.querySelector('.project-img').src = projectinfo.featuredImage;
  popupWindow.querySelector('.proj-header').textContent = projectinfo.pojectH2;
  popupWindow.querySelector('.headerlink-lists').innerHTML = `${headerlinkList(projectinfo.links)}`;
  popupWindow.querySelector('.tech-list').innerHTML = `${languageList(projectinfo.technologies)}`;
  popupWindow.querySelector('.proj-paragraph').textContent = projectinfo.description;
  popupWindow.querySelector('.link-lists').innerHTML = `${linkList(projectinfo.links)}`;
}

projectSection.addEventListener('click', () => {
  buildModelDyna(projectinfo[0]);
  popupWindow.style.display = 'block';
});

const popCloses = document.querySelector('.divdiv');
popCloses.addEventListener('click', () => {
  popupWindow.style.display = 'none';
});

const popmobiclose = document.querySelector('.project-img');
popmobiclose.addEventListener('click', () => {
  popupWindow.style.display = 'none';
});

const form = document.getElementById('contactForm');
const error = document.querySelector('.errmsg');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const submitBtn = form.elements.Emailaddress;
  if (submitBtn.value.toLowerCase() !== submitBtn.value) {
    error.textContent = '!Failed.Email address should be in lower case!';
  } else {
    form.submit();
  }
});
