$( function(){$( "#draggable" ).draggable({ helper: "original" });});
$( function(){$( "#draggable1" ).draggable({ helper: "original" });});
$( function(){$( "#draggable2" ).draggable({ helper: "original" });});
$( function(){$( "#draggable3" ).draggable({ helper: "original" });});

$(document).ready(function() {
				var editYourProfile = $('.modal_prof_menu_icon1_Alert1');
				var gorListMenu = $('.modal_prof_menu_icon1_Alert1_shadow1');
	
				var colorTheme = $('.modal_prof_menu_icon2_Alert2');
				var gorListMenu1 = $('.modal_prof_menu_icon2_Alert2_shadow2');
	
				var user_profile_menu = $('.user-profile-menu');
				var showProfileMenu = $('.modal_prof_menu');

				var Edit_your_personal_info= $('.modal_prof_menu_icon1_Alert1_shadow1_Edit-your-personal-info');
				var show_Edit_your_personal_info = $('.modal_prof_menu_edit-your-personal-infor');
				
				var ch_pass = $('.modal_prof_menu_icon1_Alert1_shadow1_Change-password');
				var showCh_pass = $('.modal_prof_menu_ch-pass');

				var e_cal = $('.Economic');
				var showCh_e_cal = $('.EconomicCalendar');

				var close = $('.EconomicCalendar_info-close_close');
				var CClose = $('.EconomicCalendar');

				var close1 = $('.Instinct-Drive_info-close_close');
				var CClose1 = $('.Instinct-Drive');

				var close2 = $('.Notes_info-close_close');
				var CClose2 = $('.Notes');

				var Notes = $('.Notesbtn');
				var showNotes = $('.Notes');

				var Chat = $('.Chatbtn');
				var showChat = $('.Chat');

				var close3 = $('.Chat_info-close_close');
				var CClose3 = $('.Chat');
/////////////////////////////////////////////////////////
				var close4 = $('.REC');
				var CClose4 = $('.modalNotifications');

				close4.on('click', function(event) {
					event.preventDefault();
					CClose4.removeClass('modalNotifications__active');
				});
				
				var modalNotifications = $('.headerDataAndNotifications_btn');
				var showmodalNotifications = $('.modalNotifications');

				modalNotifications.on('click', function(event) {
					event.preventDefault();
					showmodalNotifications.toggleClass('modalNotifications__active');
				});
////////////////////////////////////////////////////////
				close3.on('click', function(event) {
					event.preventDefault();
					CClose3.removeClass('Chat__active');
				});
				
				Chat.on('click', function(event) {
					event.preventDefault();
					showChat.toggleClass('Chat__active');
				});

				Notes.on('click', function(event) {
					event.preventDefault();
					showNotes.toggleClass('Notes__active');
				});

				close2.on('click', function(event) {
					event.preventDefault();
					CClose2.removeClass('Notes__active');
				});

				var footerbtn = $('.btnfooter1');
				var footerbtnclass = $('.btnfooter1');
				footerbtn.on('click', function(event) {
					event.preventDefault();
					showinsDrive.toggleClass('Instinct-Drive__active');
					footerbtnclass.toggleClass('btnfooter1__active');
				});
				var footerbtn1 = $('.btnfooter2');
				footerbtn1.on('click', function(event) {
					event.preventDefault();
					showNotes.toggleClass('Notes__active');
				});
				var footerbtn2 = $('.btnfooter3');
				footerbtn2.on('click', function(event) {
					event.preventDefault();
					showCh_e_cal.toggleClass('EconomicCalendar__active');
				});
				var footerbtn3 = $('.btnfooter4');
				footerbtn3.on('click', function(event) {
					event.preventDefault();
					showChat.toggleClass('Chat__active');
				});

				var insDrive = $('.downFile');
				var showinsDrive = $('.Instinct-Drive');

				insDrive.on('click', function(event) {
					event.preventDefault();
					showinsDrive.toggleClass('Instinct-Drive__active');

				});

				close1.on('click', function(event) {
					event.preventDefault();
					CClose1.removeClass('Instinct-Drive__active');
				});
				
				close.on('click', function(event) {
					event.preventDefault();
					CClose.removeClass('EconomicCalendar__active');
				});

				e_cal.on('click', function(event) {
					event.preventDefault();
					showCh_e_cal.toggleClass('EconomicCalendar__active');
				});

				
				ch_pass.on('click', function(event) {
					event.preventDefault();
					show_Edit_your_personal_info.removeClass('modal_prof_menu_edit-your-personal-infor__active');
					showCh_pass.toggleClass('modal_prof_menu_ch-pass__active');
				});

				editYourProfile.on('click', function(event) {
					event.preventDefault();
					gorListMenu.toggleClass('modal_prof_menu_icon1_Alert1_shadow1__active');
				});
				colorTheme.on('click', function(event) {
					event.preventDefault();
					gorListMenu1.toggleClass('modal_prof_menu_icon2_Alert2_shadow2__active');
				});
				Edit_your_personal_info.on('click', function(event) {
					event.preventDefault();
					showCh_pass.removeClass('modal_prof_menu_ch-pass__active');
					show_Edit_your_personal_info.toggleClass('modal_prof_menu_edit-your-personal-infor__active');
				});
				user_profile_menu.on('click', function(event) {
					event.preventDefault();
					showProfileMenu.toggleClass('modal_prof_menu__active');
					 gorListMenu.removeClass('modal_prof_menu_icon1_Alert1_shadow1__active');
							gorListMenu1.removeClass('modal_prof_menu_icon2_Alert2_shadow2__active');
							show_Edit_your_personal_info.removeClass('modal_prof_menu_edit-your-personal-infor__active');
							showCh_pass.removeClass('modal_prof_menu_ch-pass__active');	
					
				});
				$(document).keydown(function(e){
				        if(e.keyCode == 27) {
				            showProfileMenu.toggleClass('modal_prof_menu__active');
				            gorListMenu.removeClass('modal_prof_menu_icon1_Alert1_shadow1__active');
							gorListMenu1.removeClass('modal_prof_menu_icon2_Alert2_shadow2__active');
							show_Edit_your_personal_info.removeClass('modal_prof_menu_edit-your-personal-infor__active');
							showCh_pass.removeClass('modal_prof_menu_ch-pass__active');	
				        }
				    });

				var clean = $('.clean');
				var gorListMenu = $('.modal_prof_menu_icon1_Alert1_shadow1');

				clean.on('click', function(event) {
					event.preventDefault();
					showinsDrive.removeClass('Instinct-Drive__active');
					showCh_e_cal.removeClass('EconomicCalendar__active');
					showNotes.removeClass('Notes__active');
					showChat.removeClass('Chat__active');

				});
	
$('.modal_prof_menu_icon2_Alert2_shadow2_Dark-UI').click(function () {
  if ($("link[id='styles']").attr('href') == 'css/main.css'){
    $("link[id='styles']").attr('href', 'css/main_dark.css');
  } 
});
$('.modal_prof_menu_icon2_Alert2_shadow2_Light-UI').click(function () {
  if ($("link[id='styles']").attr('href') == 'css/main_dark.css'){
    $("link[id='styles']").attr('href', 'css/main.css');
  }
});				
});