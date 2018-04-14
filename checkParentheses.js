function validParentheses(parens){
    let x = 0;  
    for(let i = 0;i<parens.length;i++)
    {
       let c = parens.charAt(i)
       x+= c=='('?1:-1
       
       if(x<0)
         return false
    }
    
    return x==0
  }