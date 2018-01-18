var str = "ashley phillips";
var res = str.toUpperCase();

console.log('Name: ' + res);

console.log('Career: Web Development');

console.log('Description: Crazy person');

console.log('My Interests:');

console.log('* Tap dancing');

console.log('* Costume making');

console.log('* Cats');

console.log('* Reading');

console.log('* Marketing');

console.log('My Previous Experience:');

let displayPosition = function(title, company, description) {
    console.log(`* ${title} at ${company}
- ${description}`
    );
}

displayPosition('Visitor Services Rep', 'McWane Science Center', 'Coordinate field trips, facilitate large groups, and ensure gusts have a great time')
displayPosition('Assistant Manager', 'Cold Stone Creamery', 'Decorate cakes, train staff members, make ice cream')

console.log('My Skills:');

let displaySkill = function(skill, iscool) {
    if (iscool === true) {
        console.log(`* Check It: ${skill}`);
    } else {
        console.log(`* ${skill}`);
    }
}

displaySkill('Tap dancing', true)
displaySkill('Fluent in four languages', true)
displaySkill('Clarinet', false)
displaySkill('Professional dodgeball', false)
displaySkill('Cat whisperer', true)
displaySkill('HTML', false)
displaySkill('CSS', false)
displaySkill('App development', true)