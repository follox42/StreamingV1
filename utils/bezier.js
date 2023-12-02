/**
 * 
 * @param {number} x4 //max value you send
 * @param {number} y4 //for the max that can be return
 * @param {number} pos//the current value between 0 and x4
 * @returns 
 */
export default function bezier(x4,y4,pos) {
    y4 = y4*2
    const t = pos/x4

    const x1=0
    const y1 = 0

    const x2 = 0.5
    const y2 = 0
    
    const x3 = 0.5
    const y3 = y4

    if(t<=1){
    const value = 
    ((1-t)**3)*y1 
    + 3*((1-t)**2)*t*y2 
    + 3*(1-t)*(t**2)*y3 
    + (t**3)*y4;
    return value
}
    else {return y4}
}