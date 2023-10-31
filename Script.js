//Q1:-
//for loop:-
var arr=[
    {
        "name":"Mani",
        "gender":"Male"
    },
    { 
        "name":"Anu",
        "gender":"female"
    },
    { 
        "name":"Kamel",
        "gender":"Male"
    }
]
    for(var i=0;i<arr.length;i++){
        console.log(arr[i].name,arr[i].gender);
    }

//for in loop:-

var arr=[
        {
            "name":"Mani",
            "gender":"Male"
        },
        { 
            "name":"Anu",
            "gender":"female"
        },
        { 
            "name":"kamel",
            "gender":"Male"
        }
    ]
        for(var i in arr)
        {   
            i,arr[i];
            console.log(arr[i]);

        }
    



// Q2:-

var person={
    "name":"Manoj Kumar",
    "age":"21",
    "gender":"Male",
    "graduate"Bsc.Computer science",
    "maritalstatus":"Single",
    "country":"India",
    "email":"manojsundaram541@gmail.com",
    "phone":"8015699836"

}
console.log(person.name);
console.log(person.age);
console.log(person.gender);
console.log(person.graduate);
console.log(person.maritalstatus);
console.log(person.country);
console.log(person.email);
console.log(person.phone);
