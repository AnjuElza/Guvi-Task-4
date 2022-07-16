//Compare two json having the same properties without order
var obj1={name:"Person1", Age:5};
var obj2={Age:5, name:"Person1"};
var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length) {
    for(key in obj1){
        if(obj1[key]==obj2[key]){
            continue;
        }
        else{
            flag=false;
            break;
            }
        }
    }
    else{
        flag=false;
    }
console.log("is object equal"+flag);