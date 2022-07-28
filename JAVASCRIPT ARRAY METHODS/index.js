const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

                        // ********* map *********


// *** 1. Get an array of all names

const map1 = characters.map(function(item){
    return item.name
})
console.log(map1)

//** 2. Get an array of objects with just name and height properties
const map2 = characters.map(function(item){
    return `name:${item.name} height: ${item.height}`
}) 
console.log(map2)


// ** 3. Get an array of all first names
const map3 = characters.map(function(item){
    return item.name.split(" ")[0]
})
console.log(map3)



                        // ********* filter *********

// *** 1. Get all female characters

const filter1 = characters.filter(function(female){
    return female.gender == 'female'
})
console.log(filter1)

// *** 1. Get all male characters

const filter2 = characters.filter(function(male){
    return male.gender === 'male'
})
console.log(filter2)


                         // ********* reduce *********

//  *** 1. Get the total height of all characters

const reduce1  = characters.reduce(function(acc, curr){
    return acc +  +curr.height
    
}, 0)

console.log(reduce1)

//  *** 1. Get the total mass of all characters
// const reduce2 = characters.reduce(function(acc, curr){
//     return acc + +curr.mass
// },0)
// console.log(reduce2)

const reduce2 = characters.reduce(function(acc, curr){
    return acc + +curr.mass
},0)
console.log(reduce2)   


                       // ********* some() *********

                    //  ***  The some() method checks if any array elements pass a test (provided as a callback function).

                    //    *** The some() method executes the callback function once for each array element.
                       
                    //   *** The some() method returns true (and stops) if the function returns true for one of the array elements.
                       
                    //   *** The some() method returns false if the function returns false for all of the array elements.
                       
                    //  ***  The some() method does not execute the function for empty array elements.
                       
                    //  ***  The some() method does not change the original array.

//  ** 1.Is there at least one male character?

const some1 = characters.some(function(characterMale){
    return characterMale.gender == 'male'
})
console.log(some1)

//  ** 2. Is there at least one character with blue eyes?

const some2 = characters.some(function(blueEyes){
    return blueEyes.eye_color == 'blue'
})
console.log(some2)


                
                       // ********* sort() *********

                    //  ** The sort() sorts the elements of an array.

                    //  ** The sort() overwrites the original array.

                    //  ** The sort() sorts the elements as strings in alphabetical and ascending order.

// ** 1. sort by mass
sort1 = characters.sort(function(a,b){
    return a.mass-b.mass
})
console.log(sort1)

// *2 Sort by gender

sort2 = characters.sort(function(a,b){
    if(a.gender === 'female') return -1
    return 1
})
console.log(sort2)

// ** 3. Sort by height

sort3 = characters.sort(function(a,b){
    if(b.height > a.height) return 1
    return -1
})
console.log(sort3)