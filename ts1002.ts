// var numb  = 20;
// console.log(numb);
var faculty = [{id:200101,name:'Vinay',expe:4,desig:"Asst. Prof",city:'warangal',M_tech:2015},
                {id:200102,name:'Madhavi',expe:3,desig:"Asst. Prof",city:'warangal',M_tech:2013},
                {id:200103,name:'Swathi',expe:5,desig:"Professor",city:'kazipet', M_tech:2008},
                {id:200194,name:'Srikaran',expe:8,desig:"Asst. Prof",city:'hyderabad',M_tech:2010}
];
// console.log(faculty);
// console.log(faculty[2]);
// console.log(faculty[3].id);
// console.log(faculty[1]["name"]);
console.log("============================================================");

var i=0;
while(i<faculty.length){
    // console.log("in while loop");
    if(faculty[i].desig === "Professor")
    console.log(faculty[i].id+"---"+faculty[i]["name"]+"---"+faculty[i].desig);
    i++;
}
console.log("============================================================");
// console.log(faculty);
for(i=0;i<faculty.length;i++)
{
    if(faculty[i].desig !== "Professor" && faculty[i].expe<4)
    console.log(faculty[i].id+"---"+faculty[i]["name"]+"---"+faculty[i].desig);
}

console.log("============================================================");

i=0;
do{
    if(faculty[i].city !== "hyderbad" && faculty[i].expe<6)
    console.log(faculty[i].id+"---"+faculty[i]["name"]+"---"+faculty[i].desig);
    i++;
}while(i<faculty.length);
console.log("============================================================");
for (const x of faculty){
    if(x.expe>3 || x.city === "hyderabad")
    {   
        console.log(x);
        console.log("============================================================");
    }
}
console.log("====for-in============================================================");

for (const key in faculty) {
    console.log(key+"\n");
    if (faculty.hasOwnProperty(key)) {
        const element = faculty[key];
        console.log(element);
        console.log(" ============================================================");
    }
}
for(let key1 of faculty){
    console.log(`${key1.id}--- Name: ${key1.name}`);
}
console.log(" ============================================================");

for(let key2 in faculty){
    let ele = faculty[key2];
    console.log(`${faculty[key2].name} is ${ele.desig} in our college`);
    console.log(" ============================================================");
}

var newfaculty = {id:200106,name:'Arpana',expe:6,desig:"Asst. Prof",city:'hyderabad', M_tech:2013};
faculty.push(newfaculty);



faculty.unshift({id:200153,name:'Vineetha',expe:3,desig:"Asst. Prof",city:'hanamkonda', M_tech:2016});
console.log(`\n\nInsertion of the new elements`);

for(let i of faculty){
    console.log(`${i.name} did M.tech in ${i.M_tech}`);
    console.log(" ============================================================");
}

var delfac = faculty.shift();
console.log(delfac);
console.log(" shift ============================================================");

faculty.unshift(delfac);
console.log(faculty[0], faculty[1]);
console.log(" unshift ============================================================");

var delfacis = [];
 delfacis = faculty.slice(1,2);
console.log(delfacis);
console.log(" ============================================================");
console.log(faculty);
console.log(" slice done ============================================================");

var delfacis1 = [];
 delfacis1 = faculty.splice(2,1);
console.log(delfacis1);
console.log(" splice ============================================================");

console.log(faculty);
