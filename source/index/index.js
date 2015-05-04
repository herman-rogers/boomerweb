App.IndexRoute = Ember.Route.extend( {

    actions: {

        willTransition: function ( transition ) {
            var currentTransition = transition.targetName;
            if ( currentTransition == 'index.index' ) {
                this.transitionTo( 'portfolio' );
            }
        }

    }
} );

App.IndexView = Ember.View.extend( {
    templateName: 'index'
} );

App.IndexController = Ember.Controller.extend( {

    loggedIn: function() {
        return App.Session.get('authToken')
    }.property('App.Session.authToken'),

    actions: {

        login: function () {
            var self = this;
            var data = this.getProperties( 'email', 'password' );
            if ( !Ember.isEmpty( data.email ) &&
                !Ember.isEmpty( data.password ) ) {
                var postData = {
                    session: {
                        email: data.email,
                        password: data.password
                    }
                };
                $.post( appPath + 'login', postData ).done( function ( response ) {
                    var sessionData = ( response.session || {} );
                    App.Session.setProperties({
                        authToken: sessionData.auth_token,
                        authAccountId: sessionData.account_id
                    });
                    var attemptedTransition = App.Session.get('attemptedTransition');
                    if(attemptedTransition) {
                        attemptedTransition.retry();
                        App.Session.set('attemptedTransition', null);
                    } else {
                        self.transitionToRoute('portfolio');
                    }
                });

            }
        },

        logout: function () {
            var self = this;
            $.ajax( {
                url: appPath + 'logout',
                type: 'POST'
            } ).always( function ( response ) {
                App.Session.setProperties( {
                    authToken: '',
                    authAccountId: ''
                } );
            });
        }
    }

} );