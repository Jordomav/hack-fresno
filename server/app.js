var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
    res.render('index.html');
    console.log('Root page');
});

app.get('/about', function (req, res) {
    var body = "HackFresno is a student hackathon at Fresno State that encourages creativity and innovation while solving some of the world's toughest problems. Stay up for 24 hours with the coolest and brightest people you will ever meet, and help design a product that can improve the world. This year, we are focusing all projects on four core themes. These themes encompass some of today's toughest issues, and encourage teams to think of ways to use their skills to benefit the world around them. Everyone is welcome, from the most experienced developers and designers to first-time programmers with a drive to solve our biggest challenges. Regardless of your skill, there is a place for you at HackFresno.";
    res.json(body);
});

app.get('/themes', function (req, res) {
    var arr = [
        {title: 'Education', content: "While technology has progressed rapidly, the way we educate students has largely stayed the same. Develop projects that help foster learning both in and out of the classroom, and that can help schools better provide resources to their students."},
        {title: 'Health & Wellness', content: "Technology has drastically improved the healthcare industry over the last century. Help take it a step further. Develop tools for doctors and hospitals to better care for patients, or design products that encourage people to maintain healthy lifestyles."},
        {title: 'Environment & Agriculture', content: "Help design solutions to keep the Earth safe and habitable for future generations. Projects in this category can include water management for California farmers, energy usage optimization for households, or tools to enforce environmental policy."},
        {title: 'Social Good', content: "Develop a project that can help bring our world closer together. Projects in this category can have applications in (but not limited to) government, philantropy, or socioeconomic inequality."}
    ];
    res.json(arr);
});

app.listen(3000, function(){
    console.log('Server running on port 3000.');
});