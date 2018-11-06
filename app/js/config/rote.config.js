app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/flow");

    $stateProvider
        .state('flow', {
            url: '/flow',
            views: {
                '': { templateUrl: 'app/src/page-blocks/layouts/l-flow/l-flow.html' },
                'header@flow': {
                    templateUrl: 'app/src/page-blocks/layouts/l-header/l-header.html',
                    controller: 'l-header'
                },
                'menu@flow': {
                    templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                    controller: 'l-flow.menu'
                },
                'about@flow': {
                    templateUrl: 'app/src/page-blocks/layouts/l-about/l-about.html',
                    controller: 'l-flow.about'
                },
                'footer@flow': {
                    templateUrl: 'app/src/page-blocks/layouts/l-footer/l-footer.html',
                    controller: 'l-footer'
                }
            },
            params: {
                data: {}
            }
        })
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'app/src/page-blocks/layouts/l-about/l-flow-about.html' },
                'header@about': {
                    templateUrl: 'app/src/page-blocks/layouts/l-header/l-header.html',
                    controller: 'l-header'
                },
                'menu@about': {
                    templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                    controller: 'l-flow.menu'
                },
                'about@about': {
                    templateUrl: 'app/src/page-blocks/layouts/l-about/l-about.html',
                    controller: 'l-flow.about'
                },
                'footer@about': {
                    templateUrl: 'app/src/page-blocks/layouts/l-footer/l-footer.html',
                    controller: 'l-footer'
                }
            },
            params: {
                data: {}
            }
        })
        .state('contacts', {
            url: '/contacts',
            views: {
                '': { templateUrl: 'app/src/page-blocks/layouts/l-contact/l-flow-contacts.html' },
                'header@contacts': {
                    templateUrl: 'app/src/page-blocks/layouts/l-header/l-header.html',
                    controller: 'l-header'
                },
                'menu@contacts': {
                    templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                    controller: 'l-flow.menu'
                },
                'contacts@contacts': {
                    templateUrl: 'app/src/page-blocks/layouts/l-contact/l-contact.html',
                    controller: 'l-flow.contact'
                },
                'footer@contacts': {
                    templateUrl: 'app/src/page-blocks/layouts/l-footer/l-footer.html',
                    controller: 'l-footer'
                }
            },
            params: {
                data: {}
            }
        })
        .state('books', {
            url: '/books',
            views: {
                '': { templateUrl: 'app/src/page-blocks/layouts/l-books/l-books-all.html' },
                'header@books': {
                    templateUrl: 'app/src/page-blocks/layouts/l-header/l-header.html',
                    controller: 'l-header'
                },
                'menu@books': {
                    templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                    controller: 'l-flow.menu'
                },
                'books@books': {
                    templateUrl: 'app/src/page-blocks/layouts/l-books/l-books.html',
                    controller: 'l-books'
                },
                'footer@books': {
                    templateUrl: 'app/src/page-blocks/layouts/l-footer/l-footer.html',
                    controller: 'l-footer'
                }
            },
            params: {
                data: {}
            }
        })
        .state('media', {
            url: '/media',
            views: {
                '': { templateUrl: 'app/src/page-blocks/layouts/l-media/l-flow-media.html' },
                'header@media': {
                    templateUrl: 'app/src/page-blocks/layouts/l-header/l-header.html',
                    controller: 'l-header'
                },
                'menu@media': {
                    templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                    controller: 'l-flow.menu'
                },
                'media@media': {
                    templateUrl: 'app/src/page-blocks/layouts/l-media/l-media.html',
                    controller: 'l-media'
                },
                'footer@media': {
                    templateUrl: 'app/src/page-blocks/layouts/l-footer/l-footer.html',
                    controller: 'l-footer'
                }
            },
            params: {
                data: {}
            }
        })
        .state('templates', {
            url: '/templates',
            views: {
                '': { templateUrl: 'app/src/page-blocks/layouts/l-templates/l-flow-templates.html' },
                'header@templates': {
                    templateUrl: 'app/src/page-blocks/layouts/l-header/l-header.html',
                    controller: 'l-header'
                },
                'menu@templates': {
                    templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                    controller: 'l-flow.menu'
                },
                'templates@templates': {
                    templateUrl: 'app/src/page-blocks/layouts/l-templates/l-templates.html',
                    controller: 'l-flow.templates'
                },
                'footer@templates': {
                    templateUrl: 'app/src/page-blocks/layouts/l-footer/l-footer.html',
                    controller: 'l-footer'
                }
            },
            params: {
                data: {}
            }
        })
        .state('jscr', {
            url: '/jscr',
            views: {
                '': { templateUrl: 'app/src/page-blocks/layouts/l-js/l-flow-jscr.html' },
                'header@jscr': {
                    templateUrl: 'app/src/page-blocks/layouts/l-header/l-header.html',
                    controller: 'l-header'
                },
                'menu@jscr': {
                    templateUrl: 'app/src/page-blocks/layouts/l-menu/l-menu.html',
                    controller: 'l-flow.menu'
                },
                'jscr@jscr': {
                    templateUrl: 'app/src/page-blocks/layouts/l-js/l-jscr.html',
                    controller: 'l-flow.jscr as ctrl'
                },
                'footer@jscr': {
                    templateUrl: 'app/src/page-blocks/layouts/l-footer/l-footer.html',
                    controller: 'l-footer'
                }
            },
            params: {
                data: {}
            }
        })
});