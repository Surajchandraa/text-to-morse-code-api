


const express = require('express');
const morsedata = require('./morsedata')

const app = express();

let requireinfo  = (req,res,next)=>{
    if(!req.query.text){
        res.send("please enter something");
    
    }
    else{
        next()
    }
}

let surajchandra ={};
let joshi ="";








app.get('/api/morsecode',requireinfo, async(req,res)=>{
    
    surajchandra= morsedata;
    console.log(surajchandra.a)
    joshi=req.query.text.toLowerCase();
    let final = await calculation(surajchandra,joshi);
    let final2=final.toString()
    let final3=final2.replace(/,/g," ")
    console.log(final3);
    res.send(final3);

})

const PORT = process.env.PORT || 5000;
  
app.listen(PORT,()=>{
    console.log("website is live at"+" http://localhost:5000/api/morsecode?text=suraj chandra")
});





async function calculation(data,qry){

    
    let emptyarray=[];
    let qry1=qry;
    let stringarray = qry1.split("");
    console.log(stringarray)


    let data1=data;


   for(let i=0; i<stringarray.length;i++){
    let currentchar = stringarray[i];
    let morsecode = data1[currentchar]

    
    if(morsecode!=undefined){
        emptyarray.push(morsecode);
    }
    else if(currentchar==' '){
        emptyarray.push('/')
    }
    else{
        console.log("morsecode not found for this");
    }
   }




    return emptyarray;

}
