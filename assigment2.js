// 1 even numbers
for(let i=0;i<=20;i++){
    if(i% 2===0){
        console.log(i)
    }

}

// 2 Sum of array elemnts
let arr=[1,2,3,4,6.9,8]
let sum =0
arr.forEach(num=> {
    sum += num
});
console.log(sum)


//3.Array reverse
let arr1=[1,2,3,4,6.9,8,'Were']

function reverseArray(){
    return arr1.reverse()

}
console.log(reverseArray())


//4.Vowels in a string
function Vowels(str){
    let count=0
    const vowels=['a','e','i','o','u']
    for(let char of str){
        if( vowels.includes(char)){
            count++
        }
    }
    return count

}
console.log(Vowels('Atieno'))



//5 multiplication table of 6
let num=6
    for(let i=1;i<=10;++i){
        let table = num * i
        console.log(`${num} * ${i} = ${table}`) 
    }




//6REmove duplicate elements in array
let arrayElements=[1,3,3,true,true,'Potato','Orange']
function removeDuplicate(arrayElements){
    return [...new Set(arrayElements)]

    
}
console.log(removeDuplicate(arrayElements))



//7 Average of numbers in array
let numbers=[2,6,7,8,9,12,87,45]
let average=0
for(let i=0;i<numbers.length;i++){
    average+=numbers[i]/2
}
console.log(average)


//8Join two arrays
let array8=['Chair','Sofa','TV']
let array9=['Table','Stool','radio']
let combined=[...array8,...array9]
console.log(combined)