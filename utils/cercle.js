export class Cercle {
    constructor(theta,sizeX,sizeY = sizeX){
        console.log(theta*Math.PI/180)
        return [(sizeX*Math.cos(theta*Math.PI/180)),(sizeY*Math.sin(theta*Math.PI/180))]
    }
}