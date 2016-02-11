Router.configure({
	layoutTemplate: 'mainnav',
	notFoundTemplate: 'notFound',
	loadingTemplate: 'loading',
	progressDelay: 200
});

Router.route('/', {
	template: 'home'
});

Router.route('/members', {
	template: 'members'
});

Router.route('/events', {
	template: 'events'
});

Router.route('/acmw', {
	layoutTemplate: 'acmwnav',
	template: 'acmwmain'
});