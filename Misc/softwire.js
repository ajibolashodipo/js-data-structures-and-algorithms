function duplicateCharacters(input) {
    //store char in an object
    const obj= {}
    for (let i=0; i<input.length; i++){
        if(input[i] in obj){
           let curr= obj[input[i]]
           obj[input[i]]= curr+1
        }else{
            obj[input[i]]=1
        }
    }
   const valArr=  Object.values(obj)

   const result = valArr.filter(val => val > 1);
   
   console.log(result.length)
   return result.length
}

duplicateCharacters("ademolaAAA")