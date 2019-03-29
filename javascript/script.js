$(document).ready(function(){

	var mobnav = $(".mob-nav"), // --- NAV
		mobnavB = $(".mobnav-button"),

		faqSearch = $(".faqSearch"),  // --- FAQ HEADER
		faqClose = $(".faqClose"),
		faqAddress = $(".faq-address"),
		faqForm = $(".faq-form"),
		faq_search = $(".faq-search"),

		faqboxOne = $(".faqbox-one"), // --- FAQ
		answerOne = $(".answer-one"),
		faqSocialOne = $(".faq-social-one"),
		arrowdownOne = $(".arrowdown-one"),
		arrowupOne = $(".arrowup-one"),

		faqboxTwo = $(".faqbox-two"),
		answerTwo = $(".answer-two"),
		faqSocialTwo = $(".faq-social-two")
		arrowdownTwo = $(".arrowdown-two"),
		arrowupTwo = $(".arrowup-two"),

		faqboxThree = $(".faqbox-three"),
		answerThree = $(".answer-three"),
		faqSocialThree = $(".faq-social-three")
		arrowdownThree = $(".arrowdown-three"),
		arrowupThree = $(".arrowup-three"),

		faqboxFour = $(".faqbox-four"),
		answerFour = $(".answer-Four"),
		faqSocialFour = $(".faq-social-four")
		arrowdownFour = $(".arrowdown-four"),
		arrowupFour = $(".arrowup-four"),

		faqboxFive = $(".faqbox-five"),
		answerFive = $(".answer-five"),
		faqSocialFive = $(".faq-social-five")
		arrowdownFive = $(".arrowdown-five"),
		arrowupFive = $(".arrowup-five"),

		faqboxSix = $(".faqbox-six"),
		answerSix = $(".answer-Six"),
		faqSocialSix = $(".faq-social-six")
		arrowdownSix = $(".arrowdown-six"),
		arrowupSix = $(".arrowup-six"),

		faqboxSeven = $(".faqbox-Seven"),
		answerSeven = $(".answer-seven"),
		faqSocialSeven = $(".faq-social-seven")
		arrowdownSeven = $(".arrowdown-seven"),
		arrowupSeven = $(".arrowup-seven");

	// NAV

	$(mobnavB).click(function(){
		$(mobnav).toggle(500);
	});

	// FAQ HEADER -- var is above

	$(faqSearch).click(function(){
		$(faqForm).toggle();
		$(faqAddress).toggle();
		$(faq_search).css({"paddingLeft":"40px","transition":".5s"});
	});
	$(faqClose).click(function(){
		$(faqForm).toggle();
		$(faqAddress).toggle();
	});


	// FAQ -- var is above

     $(faqboxOne).click(function(){
     	$(answerOne).toggle(500);
     	$(faqSocialOne).toggle(500);
     	$(arrowdownOne).toggle(500);
     	$(arrowupOne).toggle(500);
     });

     $(faqboxTwo).click(function(){
     	$(answerTwo).toggle(500);
     	$(faqSocialTwo).toggle(500);
     	$(arrowdownTwo).toggle(500);
     	$(arrowupTwo).toggle(500);
     });

     $(faqboxThree).click(function(){
     	$(answerThree).toggle(500);
     	$(faqSocialThree).toggle(500);
     	$(arrowdownThree).toggle(500);
     	$(arrowupThree).toggle(500);
     });

     $(faqboxFour).click(function(){
     	$(answerFour).toggle(500);
     	$(faqSocialFour).toggle(500);
     	$(arrowdownFour).toggle(500);
     	$(arrowupFour).toggle(500);
     });

     $(faqboxFive).click(function(){
     	$(answerFive).toggle(500);
     	$(faqSocialFive).toggle(500);
     	$(arrowdownFive).toggle(500);
     	$(arrowupFive).toggle(500);
     });

     $(faqboxSix).click(function(){
     	$(answerSix).toggle(500);
     	$(faqSocialSix).toggle(500);
     	$(arrowdownSix).toggle(500);
     	$(arrowupSix).toggle(500);
     });

     $(faqboxSeven).click(function(){
     	$(answerSeven).toggle(500);
     	$(faqSocialSeven).toggle(500);
     	$(arrowdownSeven).toggle(500);
     	$(arrowupSeven).toggle(500);
     });


});


