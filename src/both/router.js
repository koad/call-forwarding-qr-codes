Router.configure({
  layoutTemplate: "ApplicationLayout",
});

Router.route('/', {name: 'home', template: 'CallForwardingCalculator'});
