let url = './example_1.json';


async function fun(){
    try{
        let res = await axios.get(url);
        console.log(res);
    }
    catch(e){
        console.log("error"+e);
    }
}
fun()

console.log("hello");