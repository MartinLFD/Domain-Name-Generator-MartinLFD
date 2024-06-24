let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

function domGenerator() {

    let firstOption = pronoun[Math.floor(Math.random() * 2)]
    let secondOption = adj[Math.floor(Math.random() * 2)]
    let therdOption = noun[Math.floor(Math.random() * 2)]

    let domResult = (firstOption + secondOption + therdOption + '.com' );
    return domResult;

     

} 

console.log(domGenerator());
 
  