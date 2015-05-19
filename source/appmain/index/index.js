App.IndexRoute = Ember.Route.extend( {

    redirect: function( model, transition ) {
        var target = transition.targetName;
        if ( target === '/' || target === 'index.index' ) {
            this.transitionTo( 'portfolio' );
        }
    },

    actions: {

        pushNotifications: function( message, error ) {
            var controller = this.controllerFor( 'index' );
            controller.pushNotification( message, error );
        },

        error: function( error, transition ) {
            this.transitionTo( '/notfound' );
        }

    }
} );

App.IndexView = Ember.View.extend( {
    templateName: 'index',

    toggleModal: function() {
        this.$( '.modal' ).modal( 'hide' );
    }.observes( 'controller.modalLogin' ),

} );

App.IndexController = Ember.Controller.extend( {

    // Login functions
    modalLogin: false,

    errors: [],

    loggedIn: function() {
        return App.Session.get( 'authToken' );
    }.property( 'App.Session.authToken' ),

    // Notification functions
    notification: Ember.Object.extend( {
        title: null,
        message: null,
        error: false,
    } ),

    currentNotifications: [],

    //Don't Call Directly, Use Route.Send to activate
    pushNotification: function( message, error ) {
        var currentNotifications = this.get( 'currentNotifications' );
        var notification = new this.notification;
        var test = error ? 'Failure' : 'Success';

        notification.setProperties( {
            title: test,
            message: message,
            error: error,
        } );
        currentNotifications.pushObject( notification );
    },

    formValidation: function( response ) {
        var jsonResponse = response.responseJSON.error;
        var errors = Ember.keys( jsonResponse ).map( function( key ) {
            var jsonResponseValue = jsonResponse[key];
            if ( Array.isArray( jsonResponseValue ) ) {
                jsonResponseValue = jsonResponseValue.join( '' );
            }
            return { field: key, value: jsonResponseValue };
        }.bind( this ) );
        return errors;
    },

    actions: {

        // Login Actions
        showModalLogin: function() {
            this.set( 'errors', [] );
            this.set( 'modalLogin', true );
        },

        hideModalLogin: function() {
            this.set( 'modalLogin', false );
        },

        login: function() {
            var self = this;
            var data = this.getProperties( 'email', 'password' );
            var postData = {
                session: {
                    email: data.email,
                    password: data.password
                }
            };
            $.post( loginRoute, postData ).done( function( response ) {
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
                self.send( 'pushNotifications',
                    'You Have Successfully Logged In', false );
            } )
            .fail( function( response ) {
                var error = this.formValidation( response );
                this.set( 'errors', error );
            }.bind(this) );
        },

        logout: function() {
            var self = this;
            $.ajax( {
                url: logoutRoute,
                type: 'POST'
            } ).always( function( response ) {
                App.Session.setProperties( {
                    authToken: '',
                    authAccountId: ''
                } );
            } );
            self.send( 'pushNotifications',
                'You Have Been Logged Out', false );
        }
    }

} );

Ember.WYSIWYG = Ember.TextArea.extend( {

    renderEditor: function() {
        var _this = this;

        _this.$().trumbowyg( {
            id: 'test',
            btns: ['viewHTML',
              '|', 'formatting',
              '|', 'btnGrp-design',
              '|', 'link',
              '|', 'btnGrp-justify',
              '|', 'btnGrp-lists',
              '|', 'horizontalRule']

        } ).on( 'tbwchange tbwpaste tbwfocus', function() {
            setTimeout( function() {
                if ( _this ) {
                    _this.set( 'value', _this.$().trumbowyg( 'html' ) );
                }
            }, 100 );
        } );
    }.on( 'didInsertElement' ),

} );

Ember.Handlebars.helper( 'text-editor', Ember.WYSIWYG );