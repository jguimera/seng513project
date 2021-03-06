/*
 * Add new routes to the router
 * 
 * Route paths can be either strings or regular expressions. 
 * There is a slight performance hit when utilizing regular expressions 
 * due to the overhead have to compile and test the expressions. 
 * Routes can be associated with a static resource (e.g. somepage.html), 
 * or a function call defined in another module.  
 */ 

var Router = require('./router').Router; 
var ViewIssue = require('viewIssue').ViewIssue;
var TestModule = require('testModule').TestModule; 
var EditIssue = require('editIssue').EditIssue;
var SaveIssue = require('saveIssue').SaveIssue;
var signupModule = require('signupModule').SignupModule;
var ListIssues = require('listIssues').ListIssues;


var r = new Router();

/*
 * Define routes here!
 */
r.add('/static', 'index.html');
r.add('/signup', signupModule.handleSignup); 
r.add('/foo', TestModule.foo); 
r.add('/fooBar', TestModule.fooBar);
r.add('/viewIssue', ViewIssue.display);
r.add('/editIssue', EditIssue.display);
r.add('/saveIssue', SaveIssue.display);
r.add('/', ListIssues.display);
r.add(/^\/\d{3}$/, 'about.html'); 
r.add(/^\/home$/, 'about.html');


exports.router = r;
