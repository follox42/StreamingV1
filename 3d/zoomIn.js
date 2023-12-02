import bezier from "../utils/bezier.js";
import changeCSS from "../utils/changeCss.js";
import { Cercle } from "../utils/cercle.js";
let scrollZ = 0
let i = 1
let r = 0
export default class ZoomIn {

    constructor(root,container,persepective = 10000) {
        // variables
        this.root = root
        this.background_container = container
        this.children = this.background_container.children

        //start 3d
        this.persepective = persepective
        this.createPerspective()
        this.setScrollZoomBorder()
    }

    createPerspective() {
        //container perspective on
        this.background_container.setAttribute("style",`perspective: ${this.persepective}px; transform-style: preserve-3d;transform-origin: 50% 50%;`)

        //children perspective on
        for (const [i,child] of Array.from(this.children).entries()) {
            this.spaceBetweenElement = this.persepective/this.children.length
            child.style.transform = `translateZ(calc(var(--cam_position) - ${this.spaceBetweenElement*(i+1)}px))`
          }
    }

    setScrollZoomIn() {
        //change the event scrolling
        document.addEventListener('wheel', e => {
            if (e.wheelDelta<0) {
            scrollZ += 1
            }
            else if (e.wheelDelta>0) {
                scrollZ += -1
            }

            //smooth the animation
            const pos = bezier(100,10000,scrollZ)
            this.root.style.setProperty('--cam_position', pos + 'px');
        });
    }
    /*setScrollZoomBorder() {
        //change the event scrolling
        document.addEventListener('wheel', e => {
            if (e.wheelDelta<0) {
            scrollZ += 1
            }
            else if (e.wheelDelta>0) {
                scrollZ += -1
            }

            //smooth the animation
            const pos = bezier(100,10000,scrollZ)
            this.root.style.setProperty('--cam_position', pos + 'px');

            for (const [i,child] of Array.from(this.children).entries()) {
                let transform = ''
                const angle = 90
                const distance = 100
                console.log(this.root.style.getPropertyValue('--cam_position'),this.spaceBetweenElement*(i+1),(-distance/10000)*pos)
                if(i==0){
                    transform = `translateZ(calc(var(--cam_position) - ${this.spaceBetweenElement*(i+1)}px)) 
                    rotateX(${(-angle/10000)*pos}deg) `;
                }
                else if(i==1){
                    transform = `translateZ(calc(var(--cam_position) - ${this.spaceBetweenElement*(i+1)}px)) 
                    rotateX(${(angle/10000)*pos}deg) 
                    translateY(${(distance/10000)*pos}%)`;
                }
                else if(i==2){
                    transform = `translateZ(calc(var(--cam_position) - ${this.spaceBetweenElement*(i+1)}px)) 
                    rotateY(${(-angle/10000)*pos}deg) 
                    translateX(${(distance/10000)*pos}%)`;
                }
                else if(i==3){
                    transform = `translateZ(calc(var(--cam_position) - ${this.spaceBetweenElement*(i+1)}px)) 
                    rotateY(${(angle/10000)*pos}deg) 
                    translateX(${(-distance/10000)*pos}%)`;
                }
                child.style.transform = transform
              }
        });

} */
    setScrollZoomBorder() {
        //change the event scrolling
        document.addEventListener('wheel', e => {

            scrollZ += 1
            const cercle = new Cercle(scrollZ*2,1000,200)
            

            const transform = `translateZ(${cercle[0]}) translateX(${cercle[1]});`

            this.children[0].style.transform = `translateZ(${Math.round(cercle[0])}px) 
            translateY(${Math.round(cercle[1])}px)
            rotateX(${scrollZ*2}deg)`

            console.log(`translateZ(${Math.round(cercle[0])}px) translateX(${Math.round(cercle[1])}px)`)
            //smooth the animation
            const pos = bezier(100,10000,scrollZ)
            const coef = pos
           // this.root.style.setProperty('--cam_position', pos + 'px');

          /*  for (const [i,child] of Array.from(this.children).entries()) {
                let transform = ''
                const angle = 90
                const distance = 100
                console.log(scrollZ*10,(-angle/10000)*(scrollZ*100))
                if(i==0){
                    transform = `translateZ(calc(var(--cam_position) - ${this.spaceBetweenElement*(i+1)}px)) 
                    rotateX(${(-angle/10000)*scrollZ}deg)
                    translateY(${(-distance/10000)*coef}%)`;
                }
                else if(i==1){
                    transform = `translateZ(calc(var(--cam_position) - ${this.spaceBetweenElement*(i+1)}px)) 
                    rotateX(${(angle/10000)*(i+1)*this.spaceBetweenElement*pos}deg)
                    translateY(${(distance/10000)*coef}%)`;
                }
                else if(i==2){
                    transform = `translateZ(calc(var(--cam_position) - ${this.spaceBetweenElement*(i+1)}px)) 
                   rotateY(${(-angle/10000)*(i+1)*pos}deg)
                    translateX(${(distance/10000)*coef}%)`;
                }
                else if(i==3){
                    transform = `translateZ(calc(var(--cam_position) - ${this.spaceBetweenElement*(i+1)}px)) 
                    rotateY(${(angle/10000)*(i+1)*pos}deg)
                    translateX(${(-distance/10000)*coef}%)`;
                }
                child.style.transform = transform
              }*/
        });

}
}