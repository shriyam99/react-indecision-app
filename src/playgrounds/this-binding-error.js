const obj = {
    name: 'Jenny',
    getName(){
        console.log(this.name);
    }
}
obj.getName();
const getName = obj.getName.bind(obj);
getName();
