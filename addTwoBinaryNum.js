let str_1= "01011";
let str_2= "11101";

function result(str_1, str_2){
    let res =[];
    let temp= 0;
    let Ln1= str_1.length -1;
    let Ln2= str_2.length -1;
    
    for(let i = Ln1, j= Ln2; i>= 0 || j>=0; i--, j--){
        let val1= i>=0 ? Number(str_1[i]) : 0;
        let val2= j>=0 ? Number(str_2[j]) : 0;
        let op = (val1+val2+temp) % 2;
        res.push(op);
        console.log(op);
        temp = 1 <val1+val2+temp;
       
    }
     if(temp){
            res.push(1);
        }
    return res;
}
result(str_1, str_2);
