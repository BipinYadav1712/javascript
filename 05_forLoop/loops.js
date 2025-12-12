// +++++++++ For Loop ++++++++++
for (let index = 1; index <=10 ; index++) {
    const element = index;
    // if(element== 5) console.log(`5 is best number`);
    
    // console.log(element);  

}
for (let i = 1; i <=10 ; i++) {
    // console.log(`outer loop value : ${i} `);
    
    for (let j = 1; j <=10; j++) {
    //    console.log(`Inner loop value : ${j}`);
        console.log( i + ' * ' + j +' = ' + i*j);
          
    }    
}