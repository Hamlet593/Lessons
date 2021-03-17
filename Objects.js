
let obj1 = new Object();//Ստեղծում եմ օբյեկտ

let obj2 = {}; ////Ստեղծում եմ օբյեկտ


obj2.name = 'Hamo'; //obj2-ին ավելացնում եմ name անունով property(key), որի մեջ կա "Hamo" string

obj2['surName'] = 'Muradyan';//obj2-ին ավելացնում եմ surName property(key), որի մեջ կա "Muradyan" string

obj2['anun azganun'] = 'Hamlet Muradyan';

obj2.age = 27;
obj2['tariq mariq'] = 28;

obj2.skils = 'Xelaci';
obj2['mardkayin hatkutyun'] = 'Hpart';

console.log(obj2);

console.log('z' in obj2) // Ստուգում ենք z անունով property կա obj2-ի մեջ, թե չէ։

console.log('b' in obj2) // Ստուգում ենք b անունով property կա obj2-ի մեջ, թե չէ։

let obj = {
    x: '1',
    y: '2',
}

for(let keyer in obj){
    console.log(obj[keyer])
}

let obj3 = {
    name: 'John',
    age: 30,
    isAdmin: true,
}




let first = '';//Հայտարարում ենք դատարկ արժեք

for(let key in obj3){ //Ֆռում ենք ցիկլ
    if(!first){ //Եթե սկզբում first-ը դատարկ է
        console.log(first)//թող տպի դատարկը
        first = `${key}: '${obj3[key]}'`//այնուհետև first-ին վերագրում ենք տվյալ իտերացիան ամբողջությամբ և անցնում հաջորդ իտերացիային՝ else-ին։
    }
    else { //մտանք else-ի մեջ
        console.log(`${key} => ${first}`);//տպեցինք նոր key-ը՝ նախորդ հիշածով
        first = `${key}: '${obj3[key]}`//first-ին վերագրեցինք հերթական իտերացիան ամբողջությամբ
    }    
}



