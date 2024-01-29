function skillsMember() {
    var member = {
        name: 'john doe',
        age: 30,
        skills: ['js', 'html', 'css', 'php']
    };
    member.skills.forEach(function (skill) {
        console.log(skill);
    });
}