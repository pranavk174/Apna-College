let extract = function(data){
    let found = [data.length];
    for(let i = 0;i<data.length;i++){
        if(data[i] != found[i] ){
            found[i] = data[i];
        }
        else
        {
            return;
        }
    }
    console.log("the extracted array is"+ found);
}
let str = "aabbbccccddddeefffggghhh";
extract(str);

