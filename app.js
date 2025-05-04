 
 let cl=console.log;
 

  const hrCall=()=>{
            return new Promise ((resolve, reject)=>{
               setTimeout(() => {
                   let error=Math.random()<.5? true: false;
                    
                   if(!error){
                       resolve("candidate selcted for first interview")
                   }else{
                      reject("Looking for another Candidate")
                   }

               }, 1500);
            })

  }


   const firstInte=()=>{
    return new Promise ((resolve, reject)=>{
      setTimeout(() => {
          let error=Math.random()<.5? true: false;
           
          if(!error){
              resolve("candidate selcted for second interview")
          }else{
             reject("Candidate is not good in basics")
          }

      }, 1200);
   })

   }

   const secondInte=()=>{
    return new Promise ((resolve, reject)=>{
      setTimeout(() => {
          let error=Math.random()<.5? true: false;
           
          if(!error){
              resolve("candidate selcted for Third interview")
          }else{
             reject("Candidate is suffering to write code")
          }

      }, 1000);
   })
   }


   const thirdInte =()=>{
    return new Promise ((resolve, reject)=>{
      setTimeout(() => {
          let error=Math.random()<.5? true: false;
           
          if(!error){
              resolve("candidate selcted for given profile")
          }else{
             reject("Candidate is rejected")
          }

      }, 800);
   })
   }












   const init= async()=>{
        try{
             let res1= await  hrCall()
             cl( res1);
              
             let res2= await firstInte()
             cl( res2);

             let res3= await  secondInte()
             cl(res3)

             let res4= await thirdInte()
             cl(res4)

        }catch(err){
             cl(err)
        }
   }

   init()
