import ZoomIn from "./3d/zoomIn.js";
const root = document.querySelector(':root');
const container = document.querySelector('.background-container')


const background = new ZoomIn(root,container,10000)