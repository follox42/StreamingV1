import bezier from "../utils/bezier.js";

let scrollZ = 0

export default class ZoomBorder {

    constructor(root,container,persepective = 10000) {
        // variables
        this.root = root
        this.background_container = container
        this.children = this.background_container.children

        //start 3d
        this.persepective = persepective
        this.createPerspective()
        this.setScroll()
    }

    createPerspective() {
        //container perspective on
        this.background_container.setAttribute("style",`perspective: ${this.persepective}px; transform-style: preserve-3d;transform-origin: 50% 50%;`)

        //children perspective on
        for (const [i,child] of Array.from(this.children).entries()) {
            const length = this.persepective/this.children.length
            console.log(length*(i+1))
            child.style.transform = `translateZ(calc(var(--cam_position) - ${length*(i+1)}px))`
          }
    }

    setScroll() {
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

        for (const [i,child] of Array.from(this.children).entries()) {
            console.log(child.style.transform)
            child.style.transform = `rotateY(${length*(i+1)}deg)`
          }
    }

}