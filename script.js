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

const projectinfo = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/SnapshootPortfolio.svg',
    technologies: ['Ruby On Rails', 'css', 'JavScript', 'html'],
    links: [{ text: 'See Live', link: '#', Icon: 'fa fa-external-link' }, { text: 'See Source', link: '#', Icon: 'fa fa-github' }],
    pojectH2: 'Keeping track of hundreds of components',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/SnapshootPortfolio.svg',
    technologies: ['Ruby On Rails', 'css', 'JavScript', 'html'],
    links: [{ text: 'See Live', link: '#', Icon: 'fa fa-external-link' }, { text: 'See Source', link: '#', Icon: 'fa fa-github' }],
    pojectH2: 'Keeping track of hundreds of components',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/SnapshootPortfolio.svg',
    technologies: ['Ruby On Rails', 'css', 'JavScript', 'html'],
    links: [{ text: 'See Live', link: '#', Icon: 'fa fa-external-link' }, { text: 'See Source', link: '#', Icon: 'fa fa-github' }],
    pojectH2: 'Keeping track of hundreds of components',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/SnapshootPortfolio.svg',
    technologies: ['Ruby On Rails', 'css', 'JavScript', 'html'],
    links: [{ text: 'See Live', link: '#', Icon: 'fa fa-external-link' }, { text: 'See Source', link: '#', Icon: 'fa fa-github' }],
    pojectH2: 'Keeping track of hundreds of components',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/SnapshootPortfolio.svg',
    technologies: ['Ruby On Rails', 'css', 'JavScript', 'html'],
    links: [{ text: 'See Live', link: '#', Icon: 'fa fa-external-link' }, { text: 'See Source', link: '#', Icon: 'fa fa-github' }],
    pojectH2: 'Keeping track of hundreds of components',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featuredImage: './images/SnapshootPortfolio.svg',
    technologies: ['Ruby On Rails', 'css', 'JavScript', 'html'],
    links: [{ text: 'See Live', link: '#', Icon: 'fa fa-external-link' }, { text: 'See Source', link: '#', Icon: 'fa fa-github' }],
    pojectH2: 'Keeping track of hundreds of components',
  },
];

window.onload = () => {
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

  const popupWindow = document.getElementById('project-popup');
  const btnTriggers = document.querySelectorAll('.btn-browse');

  btnTriggers.forEach((btnTrigger) => {
    btnTrigger.addEventListener('click', (e) => {
      e.preventDefault();

      const mainDiv = document.createElement('div');
      mainDiv.setAttribute('class', 'project-Container');

      const closebtnDiv = document.createElement('div');
      closebtnDiv.setAttribute('class', 'closebtn-Div');
      const divdiv = document.createElement('button');
      divdiv.setAttribute('class', 'divdiv');
      divdiv.setAttribute('id', 'divdivbutton');
      const closeBtn = document.createElement('img');
      closeBtn.setAttribute('class', 'close-Btn-pop');
      closeBtn.setAttribute('src', './images/closebtn.svg');

      divdiv.appendChild(closeBtn);
      closebtnDiv.appendChild(divdiv);

      const imgContainer = document.createElement('img');
      imgContainer.setAttribute('class', 'project-img');
      imgContainer.setAttribute('src', projectinfo[0].featuredImage);

      const projHeaderdiv = document.createElement('div');
      projHeaderdiv.setAttribute('class', 'project-Headerdiv');
      const projHeader = document.createElement('h2');
      projHeader.setAttribute('class', 'proj-header');
      projHeader.textContent = projectinfo[0].pojectH2;

      const headerlinkingList = document.createElement('ul');
      headerlinkingList.setAttribute('class', 'headerlink-lists');
      for (let e = 0; e < projectinfo[0].links.length; e += 1) {
        const headerlinkItem = projectinfo[0].links[e];

        const headerlinkList = document.createElement('li');
        headerlinkList.setAttribute('class', 'headerlink-list');

        const headerlinkElement = document.createElement('a');
        headerlinkElement.setAttribute('href', headerlinkItem.link);

        const headerlinkText = document.createElement('span');
        headerlinkText.textContent = headerlinkItem.text;
        headerlinkElement.appendChild(headerlinkText);

        const headerlinkIcon = document.createElement('i');
        headerlinkIcon.setAttribute('class', headerlinkItem.Icon);
        headerlinkElement.appendChild(headerlinkIcon);

        headerlinkList.appendChild(headerlinkElement);
        headerlinkingList.appendChild(headerlinkList);
      }

      projHeaderdiv.appendChild(projHeader);
      projHeaderdiv.appendChild(headerlinkingList);

      const listElement = document.createElement('ul');
      listElement.setAttribute('class', 'tech-list');
      for (let r = 0; r < projectinfo[0].technologies.length; r += 1) {
        const item = projectinfo[0].technologies[r];
        const itemElement = document.createElement('li');
        itemElement.textContent = item;
        listElement.appendChild(itemElement);
      }

      const paragraph = document.createElement('p');
      paragraph.setAttribute('class', 'proj-paragraph');
      paragraph.textContent = projectinfo[0].description;

      const linkingList = document.createElement('ul');
      linkingList.setAttribute('class', 'link-lists');
      for (let s = 0; s < projectinfo[0].links.length; s += 1) {
        const linkItem = projectinfo[0].links[s];

        const linkList = document.createElement('li');
        linkList.setAttribute('class', 'link-list');

        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', linkItem.link);

        const linkText = document.createElement('span');
        linkText.textContent = linkItem.text;
        linkElement.appendChild(linkText);

        const linkIcon = document.createElement('i');
        linkIcon.setAttribute('class', linkItem.Icon);
        linkElement.appendChild(linkIcon);

        linkList.appendChild(linkElement);
        linkingList.appendChild(linkList);
      }

      mainDiv.appendChild(closebtnDiv);
      mainDiv.appendChild(imgContainer);
      mainDiv.appendChild(projHeaderdiv);
      mainDiv.appendChild(listElement);
      mainDiv.appendChild(paragraph);
      mainDiv.appendChild(linkingList);
      popupWindow.appendChild(mainDiv);

      popupWindow.style.display = 'block';

      const popCloses = document.querySelector('.divdiv');
      popCloses.addEventListener('click', () => {
        popupWindow.style.display = 'none';
      });
    });
  });
};
