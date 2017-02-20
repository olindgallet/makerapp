function initApp(){
	var SITEMAP_CONTAINER_ID      = "#sitemap-container";
	var HOME_CONTAINER_ID           = "#home-container";
	var MAKER_CONTAINER_ID         = "#maker-container";
	var SCHEDULE_CONTAINER_ID   = "#schedule-container";
	var DIRECTIONS_CONTAINER_ID = "#directions-container";

	var SITEMAP_BUTTON_ID             = "#sitemap-button";
	var HOME_BUTTON_ID                   = "#home-button";
	var MAKER_BUTTON_ID                 = "#maker-button";
	var SCHEDULE_BUTTON_ID           = "#schedule-button";
	var DIRECTIONS_BUTTON_ID         = "#directions-button";
	var MENU_BUTTON_ID = "#menu-button";

	var feedCount          = 0;
	var currentContainer = HOME_CONTAINER_ID;
	var lockContainer     = false;
	var isSidebarVisible    = false;
	
	$(HOME_BUTTON_ID).click(function(){
		if (!lockContainer){
			lockContainer = true;
			$('#sidebar-filler').css('height', $(HOME_CONTAINER_ID).height());
			$(currentContainer).fadeOut(function(){
				currentContainer = HOME_CONTAINER_ID;
				$(currentContainer).fadeIn();
				lockContainer = false;
			});
		}
	});

	$(SITEMAP_BUTTON_ID).click(function(){
		if (!lockContainer){
			lockContainer = true;
			$('#sidebar-filler').css('height', $(SITEMAP_CONTAINER_ID).height());
			$(currentContainer).fadeOut(function(){
				currentContainer = SITEMAP_CONTAINER_ID;
				$(currentContainer).fadeIn();
				lockContainer = false;
			});
		}
	});

	$(MAKER_BUTTON_ID).click(function(){
		if (!lockContainer){
			lockContainer = true;
			$('#sidebar-filler').css('height', $(MAKER_CONTAINER_ID).height());
			$(currentContainer).fadeOut(function(){
				currentContainer = MAKER_CONTAINER_ID;
				$(currentContainer).fadeIn();
				lockContainer = false;
			});
		}
	});

	$(SCHEDULE_BUTTON_ID).click(function(){
		if (!lockContainer){
			lockContainer = true;
			$('#sidebar-filler').css('height', $(SCHEDULE_CONTAINER_ID).height());
			$(currentContainer).fadeOut(function(){
				currentContainer = SCHEDULE_CONTAINER_ID;
				$(currentContainer).fadeIn();
				lockContainer = false;
			});
		}
	});

	$(DIRECTIONS_BUTTON_ID).click(function(){
		if (!lockContainer){
			lockContainer = true;
			$('#sidebar-filler').css('height', $(DIRECTIONS_CONTAINER_ID).height());
			$(currentContainer).fadeOut(function(){
				currentContainer = DIRECTIONS_CONTAINER_ID;
				$(currentContainer).fadeIn();
				lockContainer = false;
			});
		}
	});

	$(MENU_BUTTON_ID).click(function(){
		if (!lockContainer){
			lockContainer = true;
			if (isSidebarVisible){
				$('.sidebar').fadeOut(function(){
					$('#content-container').removeClass('grid_18');
					$('#content-container').addClass('grid_24');
					isSidebarVisible = false;
					lockContainer = false;
				});
			} else {
				$('#content-container').removeClass('grid_24');
				$('#content-container').addClass('grid_18');
				$('.sidebar').fadeIn(function(){
					isSidebarVisible = true;
					lockContainer = false;
				});
			}
		}
	});
}

initApp();