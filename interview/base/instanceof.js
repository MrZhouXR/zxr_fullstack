function instance_of(L,R) {
    let L = L.__proto__
    let Obj = R.prototype

    while (true) {
      if (L === null) 
        return false
      if (Obj === L) {
        return true
      }
      L = L.__proto__ 
    }
    
}