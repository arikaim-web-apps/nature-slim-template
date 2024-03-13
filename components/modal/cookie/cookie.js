'use strict';

arikaim.component.onLoaded(function(component) { 

    component.setApproved = function(interval) {
        var interval = component.get('interval',7);      
        arikaim.storage.setCookie('privacy-policy',1,interval);
    };

    component.isApproved = function() {
        var show = arikaim.storage.getCookie('privacy-policy'); 
        return (show == 1 || show == '1') ? true : false;   
    };  

    component.close = function() {    
        $(this.getElement()).fadeOut(parseInt(component.get('fade')));  
    };

    component.open = function() {   
        $(this.getElement()).fadeIn(parseInt(component.get('fade')));            
    };

    component.init = function() {        
        var acceptButton = $(this.getElement()).find('.modal-accept-button');
        var closeButton = $(this.getElement()).find('.modal-close-button');

        if (component.isApproved() == false) {
            component.open();
        }

        $(acceptButton).off();
        $(acceptButton).on('click',function() {
            component.setApproved();
            component.close();
        });

        $(closeButton).off();
        $(closeButton).on('click',function() {          
            component.close();
        });
    };

    component.init();

    return component;
});