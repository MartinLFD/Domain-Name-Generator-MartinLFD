let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dotCom = ['.com', '.net', '.us', '.io', 'etc']


    for ( let f of pronoun) {
        for ( let s of adj) {
            for ( let t of noun) {
                for (let fourth of dotCom) {
                    console.log(`${f}${s}${t}${fourth}`)
                }
            }
          
        }
        
    }

  