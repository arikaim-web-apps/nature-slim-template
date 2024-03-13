'use strict';

function ContactUs() {
    var self = this;

    this.init = function(onSuccess, onError) {
        arikaim.ui.form.addRules('#contact_us_form',{});

        arikaim.ui.form.onSubmit("#contact_us_form",function() {  
            return arikaim.post('/api/contact-us','#contact_us_form');          
        },function(data) {  
            self.showDoneMessage('contactus_content');
            callFunction(onSuccess,data);
        },function(errors) {
            callFunction(onError,errors);
        });
    };

    this.showDoneMessage = function(contentId) {       
        arikaim.page.loadContent({
            id: contentId,
            component: 'contactus>contactus.done-message'
        });
    };
}

var contactUs = new ContactUs();

arikaim.component.onLoaded(function() {
    contactUs.init();
});
