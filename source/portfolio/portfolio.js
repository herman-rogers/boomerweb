App.PortfolioRoute = Ember.Route.extend( {
    model: function () {
        return this.store.find('project');
    }
} );

App.PortfolioView = Ember.View.extend( {
    templateName: 'portfolio'
} );

App.PortfolioController = Ember.Controller.extend( {} );