//created an object that stores all the words that will be combined later
const messagesList = {
firstList:['MC','Young','Bad','Dj','Lil','Notorius','Big','Ice','Slim','Doctor'],
secondList:['Boss','Hooligan','Crispy','Daddy','Dog','Momma','Hippopotamus','Prince'],
thirdList:['Panther','Gangsta','Cake','Hero','Lord','Pepper','Bear','Dollar','Teddy','Sausage']
}

// fuction that will get random words of our object  and return them as a sentence. 
const getRandomMessage = (word1 , word2, word3)=>{
    return `your Rapper Name is: ${word1} ${word2} ${word3}`
}

console.log(getRandomMessage(messagesList.firstList[Math.floor(Math.random() * 11)], messagesList.secondList[Math.floor(Math.random() * 9)], messagesList.thirdList[Math.floor(Math.random() * 11)]))