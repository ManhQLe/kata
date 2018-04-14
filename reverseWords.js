function reverseWords(str){
    let x = []  
    let word = ""
    for(let i = 0;i<str.length;i++)
    {
        let c = str.charAt(i)
     
        c ==' '?
        (
            x.splice(0,0,word),word = ''
        ):
        word+= c;       
      
    }
         word.length?x.splice(0,0,word):0 
    return x.join(" ")
  }

  console.log(reverseWords("hello world"))