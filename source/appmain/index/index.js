App.IndexRoute = Ember.Route.extend( {

    actions: {

        beforeModel: function() {
            this.transitionTo('portfolio');
        },

        pushNotifications: function( message, error ) {
            var controller = this.controllerFor( 'index' );
            controller.pushNotification( message, error );
        },

        willTransition: function( transition ) {
            var currentTransition = transition.targetName;
            if ( currentTransition === 'index.index' ) {
                this.transitionTo( 'portfolio' );
            }
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

    actions: {

        // Login Actions
        showModalLogin: function() {
            this.set( 'modalLogin', true );
        },

        hideModalLogin: function() {
            this.set( 'modalLogin', false );
        },

        login: function() {
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
                $.post( appPath + 'login', postData ).done( function( response ) {
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
                } );
            }
        },

        logout: function() {
            var self = this;
            $.ajax( {
                url: appPath + 'logout',
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


Ember.EasyForm.WYSIWYG = Ember.EasyForm.TextArea.extend( {

    renderEditor: function() {
        var _this = this;

        _this.$().trumbowyg()
            .on( 'tbwchange', function() {
                console.log('CHANGE');
                //_this.set( 'value', $( '.trumbowyg-editor' ).html() )
            } );
    }.on( 'didInsertElement' ),
} );

Ember.EasyForm.Config.registerInputType( 'wysiwyg', Ember.EasyForm.WYSIWYG );

/**
 * WYSIWYG Editor Initialization
 */
//Ember.EasyForm.WYSIWYG = Ember.EasyForm.TextArea.extend( {

//    renderEditor: function() {
//        var _this = this;

//        _this.$().trumbowyg( {
//            //    color: true,
//            //    fsize: true,
//            //    format: false,
//            //    indent: false,
//            //    outdent: false,
//            //    placeholder: _this.get( 'placeholder' ),
//            //    source: false, // Code
//            //    sub: false, // Subscript
//            //    strike: false,
//            //    sup: false, // Superscript

//            tbwchange: function() {
//                Em.run.debounce( _this, _this.changed, 200 );
//            }
//        } 
//    )}.on( 'didInsertElement' ),

//    changed: function() {
//        this.set( 'value', $( '.jqte_editor' ).html() );
//    }.on( 'tbwchange' ),

//    keyDown: function( e ) {
//        console.log('KEY DOWN EVEN');
//    }

//} );

Ember.EasyForm.Config.registerInputType( 'wysiwyg', Ember.EasyForm.WYSIWYG );