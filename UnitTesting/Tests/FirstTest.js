//Jasmine : https://jasmine.github.io/2.9/introduction

//npm install jasmine - core karma karma - jasmine
//npm install -g karma-cli -> install karma cli utility which helps to create karma configurations and 
//help running the tests

// npm global packages gets installed in %appdata%/npm/node_modules
// karma init -> command to initialize the karma.conf.js configuration file
// test bed is mocking library
// https://angular.io/guide/testing

describe("A suite", function () {
    it("contains spec with an expectation", function () {
        expect(true).toBe(true);
    });
});

function add(x,y) {
    return x+y;
}

describe("A math suite", function () {
    it("add two numbers", function () {
        expect(add(20,30)).toBe(50);
    });
});
