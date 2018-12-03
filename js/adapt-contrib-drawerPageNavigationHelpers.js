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

    /*
        Helper that returns the page level inside its tree. Starts from 0 as the
        course level.
        @context The page.
    */
    Handlebars.registerHelper('get_page_level', function() {
        var COURSE = "course";
        var MENU = "menu";
        var element = Adapt.findById(this._id);
        var level = -1;
        do {
            var parentType = Adapt.findById(element.attributes._parentId).attributes._type;
            switch (parentType) {
                case COURSE:
                    break;
                case MENU:
                    level += 1;
                    element = Adapt.findById(element.attributes._parentId);
                    break;
                default:
                    break;
            }
        } while(parentType != COURSE)
        return 'level' + level;
    });
})
