function towerBuilder(n) {
    let l = 2*n-1
    let a = []
    let w = ""
    for(let i = 0;i<n;i++)
    {    
      let x= 2*i+1;
      let s = (l-x)>>1;
      let e = s+x;
      for(let j = 0;j<l;j++)
      {
         w+= (s<=j && j<e) ?"*" : " "
      }    
      a.push(w)
      w=""
    }
    return a
  }