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

const trigger = document.getElementById('browse-project');
const popupWindow = document.getElementById('project-popup');

// var projectinfo = {
//   name:"Keeping track of hundreds of components",
//   description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
//   featuredImage:"",
//   technologies:["Ruby On Rails", "css", "JavaScript"],
//   links:[{text:"See Live", link:"#", Icon:""},{text:"See Source", link:"#", Icon:""}]
// }

let projectinfo = [
 {
  name:"Keeping track of hundreds of components",
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  featuredImage:"",
  technologies:["Ruby On Rails", "css", "JavaScript"],
  links:[{text:"See Live", link:"#", Icon:""},{text:"See Source", link:"#", Icon:""}]
 },
 {
  name:"Keeping track of hundreds of components",
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  featuredImage:"",
  technologies:["Ruby On Rails", "css", "JavaScript"],
  links:[{text:"See Live", link:"#", Icon:""},{text:"See Source", link:"#", Icon:""}]
 },
 {
  name:"Keeping track of hundreds of components",
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  featuredImage:"",
  technologies:["Ruby On Rails", "css", "JavaScript"],
  links:[{text:"See Live", link:"#", Icon:""},{text:"See Source", link:"#", Icon:""}]
 },
 {
  name:"Keeping track of hundreds of components",
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  featuredImage:"",
  technologies:["Ruby On Rails", "css", "JavaScript"],
  links:[{text:"See Live", link:"#", Icon:""},{text:"See Source", link:"#", Icon:""}]
 },
 {
  name:"Keeping track of hundreds of components",
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  featuredImage:"",
  technologies:["Ruby On Rails", "css", "JavaScript"],
  links:[{text:"See Live", link:"#", Icon:""},{text:"See Source", link:"#", Icon:""}]
 },
] 


//on click event here after i build the ting

trigger.addEventListener('click', (event) => {
  event.preventDefault();

  var mainDiv = document.createElement("div");
  mainDiv.setAttribute("class", "project-Container");

  var imgContainer = document.createElement("img");
  imgContainer.setAttribute("class", "proejct-img");

  var projHeader = document.createElement("h2");
  projHeader.setAttribute("class", "proj-header");
  projHeader.textContent = projectinfo.name;

  var listElement = document.createElement("ul");
  listElement.setAttribute("class","tech-list");
  for (var i = 0; i < projectinfo.technologies.length; i++) {
    var item = projectinfo.technologies[i];
    var itemElement = document.createElement("li");
    itemElement.textContent = item;
    listElement.appendChild(itemElement);
  }

  var paragraph = document.createElement("p");
  paragraph.setAttribute("class", "proj-paragraph");
  paragraph.textContent = projectinfo.description;

  var linkingList = document.createElement("ul");
  for(var i = 0; i < projectinfo.links.length; i++) {
    var linkItem = projectinfo.links[i];

    var linkList = document.createElement("li");

    var linkElement = document.createElement("a");
    linkElement.setAttribute("href",linkItem.Icon);

    var linkText = document.createElement("span");
    linkText.textContent = linkItem.text;
    linkElement.appendChild(linkText);

    var linkIcon = document.createElement("img");
    linkIcon.setAttribute("src",linkItem.Icon);
    linkElement.appendChild(linkIcon);

    linkList.appendChild(linkElement);
    linkingList.appendChild(linkList);
  }

  mainDiv.appendChild(imgContainer);
  mainDiv.appendChild(projHeader);
  mainDiv.appendChild(listElement);
  mainDiv.appendChild(paragraph);
  mainDiv.appendChild(linkingList);
  popupWindow.appendChild(mainDiv);

  popupWindow.style.display = 'block';
})


