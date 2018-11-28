define([
    'core/js/adapt',
    'handlebars'
], function(Adapt, Handlebars) {

    /*
        Helper that display the context block in case it's id refers to the
        actual page.
        @context The menu entry.
    */
    Handlebars.registerHelper('if_is_actual_page', function(options) {
        if (Adapt.location._currentId == this._id){
            return options.fn(this);
        }
    });

})
