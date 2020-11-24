var content = document.querySelector('#content');

content.innerHTML = "President " + pres.fullName() + " was president number " + pres.order + " of the United States of America.";

//find all properties object has access to and type of properties
//print to console each property and then each type of property it is -
//this may include objects on the prototype

// for(let propertyName in pres){
//     console.log('PropertName ' + propertyName);

// }

//let propertiesIncProto = (pres);

//print another list similar to that - only properties owned by that object (not the prototype)

//let propertiesNotProto = (pres);