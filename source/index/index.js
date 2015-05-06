App.IndexRoute = Ember.Route.extend( {

    actions: {

        willTransition: function ( transition ) {
            var currentTransition = transition.targetName;
            if ( currentTransition == 'index.index' ) {
                this.transitionTo( 'portfolio' );
            }
        },

    }
} );

App.IndexView = Ember.View.extend( {
    templateName: 'index',

    toggleModal: function () {
        this.$( '.modal' ).modal( 'hide' );
    }.observes( 'controller.modalLogin' ),

} );

App.IndexController = Ember.Controller.extend( {

    // Login functions
    modalLogin: false,

    loggedIn: function () {
        return App.Session.get( 'authToken' )
    }.property( 'App.Session.authToken' ),

    // Notification functions
    notification: Ember.Object.extend( {
        title: null,
        message: null,
        error: false,
    } ),

    currentNotifications: [],

    notificationsPending: function () {
        notifications = this.get( 'currentNotifications' );
        return notifications.length > 0;
    }.property( 'currentNotifications.[]' ),

    pushNotification: function ( title, message, error ) {
        var currentNotifications = this.get( 'currentNotifications' );
        var notification = new this.notification;

        notification.setProperties( {
            title: title,
            message: message,
            error: error,
        } );

        currentNotifications.pushObject( notification );
    },

    actions: {

        // Login Actions
        showModalLogin: function () {
            this.set( 'modalLogin', true );
        },

        hideModalLogin: function () {
            this.set( 'modalLogin', false );
        },

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
                    App.Session.setProperties( {
                        authToken: sessionData.auth_token,
                        authAccountId: sessionData.account_id
                    } );
                    var attemptedTransition = App.Session.get( 'attemptedTransition' );
                    if ( attemptedTransition ) {
                        attemptedTransition.retry();
                        App.Session.set( 'attemptedTransition', null );
                    }
                    self.send( 'hideModalLogin' );
                    self.pushNotification( 'Login Successful',
                        'You Have Successfully Logged In', false );
                } );
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
            } );
            self.pushNotification( 'Logout Successful',
                 'You Have Been Logged Out', false )
        }
    }

} );