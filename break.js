for(var i=1; i <= 20; i++){
   console.log(i)
    if(i>10){
        break;
    } 
    
}

for(var i=1; i <= 20; i++){
 
    if(i>10){
        break;
    } 
      console.log(i)
}

var roastGiven=0;
while(roastGiven < 7){
    console.log('roast den, please!!')
    roastGiven ++ ;
    if(roastGiven > 4){
        break;
    }

}

var items =['bottle', 'mouse', 'sunglass', 'pencil' ,'pen', 'notebook']
for(var i = 0; i < items.length; i++){
    var item = items[i];
    if(item== 'pen'){
        break;
    }
    console.log(item);
}

var numbers= [23, 34, 21, 55, 87, 98, 90,67, 87];
for (var i =0; i<numbers.length ; i++){
    var number =numbers[i];
    if(number > 80){
        break;
    }
    console.log(number)
}