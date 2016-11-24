/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formatedNameAndRole = {
    'name' :  HTMLheaderName.replace('%data%', 'João Victor'),
    'role' : HTMLheaderRole.replace('%data%', 'Front End' )
};

$("#header").append(formatedNameAndRole.name, formatedNameAndRole.role);
