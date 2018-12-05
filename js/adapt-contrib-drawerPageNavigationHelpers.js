define([
    'core/js/adapt',
    'handlebars'
], function(Adapt, Handlebars) {

    /*
        Helper that returns the section number and question type from a question
        and the page where it belongs.
        @context The question.
        @param page Page where to take the title from.
    */
    Handlebars.registerHelper('if_is_actual_page', function(options) {
        if (Adapt.location._currentId == this._id){
            return options.fn(this);
        }
    });

    /*
        Helper that returns the section number and question type from a question
        and the page where it belongs.
        @context The question.
        @param page Page where to take the title from.
    */
    Handlebars.registerHelper('if_is_equal', function(element, value, options) {
        if (element == value){
            return options.fn(this);
        }else{
            return options.inverse(this);
        }
    });

    /*
        Helper that returns the section number and question type from a question
        and the page where it belongs.
        @context The question.
        @param page Page where to take the title from.
    */
    Handlebars.registerHelper('if_is_menu_container', function(options) {
        if (this._parentId != "course" && this._type == 'menu'){
            return options.fn(this);
        }
    });

    /*
        Helper that returns the section number and question type from a question
        and the page where it belongs.
        @context The question.
        @param page Page where to take the title from.
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
    /*
        Helper that returns the section number and question type from a question
        and the page where it belongs.
        @context The question.
        @param page Page where to take the title from.
    */
    Handlebars.registerHelper('getElement', function(element) {
        if (element.models){
            return element.toJSON();
        }
    });
})
