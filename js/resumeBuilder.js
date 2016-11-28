var bio = {
    "name": "João Victor",
    "role": "Front-end Developer",
    "contacts": {
        "mobile": "102030",
        "email": "fakemail@gmail.com",
        "github": "jotavejv",
        "twitter": "@_jotavejv",
        "location": "Brazil"
    },
    "biopic": "images/me.png",
    "welcomeMessage": "Welcome message",
    "skills": ["HTML", "CSS", "JavaScript", "Responsive Design", "Animations"]
}
bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    if (bio.skills.length > 0) {
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedPic);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedMessage);
        $("#header").append(HTMLskillsStart);
        for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        };
    };
}

bio.display();

bio.contacts.display = function() {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    $("#footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    $("#footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    $("#footerContacts").append(formattedGithub);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedTwitter);

}
bio.contacts.display();

var work = {
    "jobs": [{
        "employer": "Lorem ipsum 1",
        "title": "Lorem dev",
        "location": "Brazil",
        "startDate": "Feb 2015",
        "endDate": "Current",
        "description": "Lorem ipsum just temp fake data description dolor sit amet"
    }, {
        "employer": "Lorem ipsum 2",
        "title": "Lorem dev",
        "location": "Brazil",
        "startDate": "Feb 2014",
        "endDate": "Feb 2015",
        "description": "Lorem ipsum just temp fake data description dolor sit amet"
    }, {
        "employer": "Lorem ipsum 1",
        "title": "Lorem dev",
        "location": "Brazil",
        "startDate": "Feb 2013",
        "endDate": "Feb 2014",
        "description": "Lorem ipsum just temp fake data description dolor sit amet"
    }]
};

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].startDate + "-" + work.jobs[job].endDate);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

work.display();

var projects = {
    "projectList": [{
        "title": "Project 1",
        "dates": "October 2015",
        "description": "Lorem ipsum just temp fake data description dolor sit amet",
        "images": "images/project1.png"
    }, {
        "title": "Project 2",
        "dates": "October 2015",
        "description": "Lorem ipsum just temp fake data description dolor sit amet",
        "images": "images/project1.png"
    }]
};

projects.display = function() {
    for (project in projects.projectList) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projectList[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projectList[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projectList[project].description);
        $(".project-entry:last").append(formattedDescription);
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projectList[project].images);
        $(".project-entry:last").append(formattedImage);
    }
}
projects.display();

var education = {
    "schools": [{
        "name": "School life",
        "location": "Life",
        "degree": "BA",
        "dates": "August 2015 - May 2010 ",
        "major": "Lorem ipsum",
        "url": "https://loremipsum.com"
    }],
    "onlineCourses": [{
        "title": "Front End Developer Nanodegree",
        "school": "Udacity",
        "dates": "November 2016 - Current",
        "url": "https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
    }]
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (school in education.schools) {
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedName + formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedDates, formattedLocation, formattedMajor);
    }
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for (course in education.onlineCourses) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedTitle + formattedSchool, formattedDates, formattedURL);
    }
};
education.display();


$("#mapDiv").append(googleMap);
