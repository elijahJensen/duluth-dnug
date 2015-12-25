var inject = ['EventService', 'MeetupService', '$sce', 'USERGROUP'];

var HomeController = function(eventService, meetupService, $sce, USERGROUP){
	
	var vm = this;
	vm.event = {title:"",
							location:"",
							dateTime:"",
						  info:""};

	function init(){
		vm.userGroup = USERGROUP;
		//We can pull meeting info from meetup.com
		if (AppSettings.MEETUP_API_KEY && AppSettings.MEETUP_URLNAME){
			meetupService.getUpcomingEvents().then(function(result){
				if (result && result.data && result.data.results){
					var data = result.data.results[0];
                    if (data){
                        vm.event = {title:data.name,
							    location:data.venue.name + ' ' + data.venue.address_1 + ', ' + data.venue.city,
							    dateTime:new Date(data.time).toString(),
						        info:$sce.trustAsHtml(data.description)
                                };
                    }else{
                         vm.event = {title:"We are planning our next meetup!",
							    location: "120 W. 2nd Street, Duluth, MN",
							    dateTime: "2nd Thursday of the month @ 6:30 p.m.",
						        info:$sce.trustAsHtml("Do you have a suggestion for a meetup?  Feel free to contact us!")
                                };
                    }
				}
			});
		}else{ //Firebasing it yo!
			eventService.getPagedData().then(function(data){
			     vm.event = data[data.length - 1];
		    });
        }
		vm.googleMapUrl = $sce.trustAsResourceUrl(AppSettings.GMAP_URL);
	};
	
	init();
	
	return vm;
};

HomeController.$inject = inject;

module.exports = HomeController;
