let rainPerWeekInMl = [10,20,0,122]

const totalRain = rainPerWeekInMl.reduce(function (total,currentElement){
    console.log("total:", total, "currentElement:", currentElement)
    // total: 10 currentElement: 20
    // total: 30 currentElement: 0
    // total: 30 currentElement: 122
    // total: 152
    return total + currentElement
})

console.log("total rain:",totalRain)

/*---------------------------------------------------------------------------*/
const grades = [1, 2, 2, 4, 3, 1, 5, 1, 2]

const average = grades.reduce((total, currentElement,index)=>{
    let sideCount = total + currentElement //on each loop it takes one at a time
    console.log(sideCount)
    if(index === grades.length -1){ //if you are on the last index
        return sideCount / grades.length //divide the last loop by length of the array
    }
    return sideCount
})

console.log(average)

/*---------------------------------------------------------------------------*/

import {studentsArr} from "/data.js"

const countAverage = (studentsArr) => {
    const totalCount = studentsArr.reduce((total, currentElement)=>{
        console.log(total + currentElement.grade)
        return total + currentElement.grade //the return and måsvingar can be removed as a oneliner function but otherwise it is a function (even though anonymous) so you have to have return there
    },0) //the zero makes the first object in the array 0

    return totalCount / studentsArr.length //average
}

console.log(countAverage(studentsArr))

