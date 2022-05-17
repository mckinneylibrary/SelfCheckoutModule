$().ready(function() {

$("#selfcheck-slideshow > img:gt(0)").hide();

setInterval(function() {
  $('#selfcheck-slideshow > img:first')
    .fadeOut(10)
    .next()
    .fadeIn(10)
    .end()
    .appendTo('#selfcheck-slideshow');
}, 8000);

});

/*** Patch that creates a popup when the wrong barcode is scanned ***/
if ( $('.alert-warning p:contains("was not found in the database")').length ) {
	$('body').append(`<div id="sco_error" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
            </div>
            <div class="modal-footer">
              <button id="try_again" type="button" class="btn btn-primary">Try again</button>
            </div>
          </div>
        </div>
	</div>`);
   $('#sco_error').modal('show');
   $('#sco_error .modal-body').append( $('.alert-warning') );
   $('#try_again').click( function() {
   		window.location.href = '/cgi-bin/koha/sco/sco-main.pl?op=logout';
   });	
}

/*** Experimenting with more Error Message Popups ***/


/***Cannot Renew Item ***/
if ( $('.alert-warning p:contains("Sorry, this item cannot be checked out at this station.")').length ) {
   $('.alert-warning p:contains("Sorry, this item cannot be checked out at this station.")').hide();
   $('body').append(`<div id="sco_error" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
            </div>
            <div class="modal-footer">
              <button id="try_again" type="button" class="btn btn-primary">Try again</button>
            </div>
          </div>
        </div>
	</div>`);
   $('#sco_error').modal('show');
   $('#sco_error .modal-body').append( $('.alert-warning') );
   $('#try_again').click( function() {
   		window.location.href = '/cgi-bin/koha/sco/sco-main.pl';
   });	
}


/*** Experimenting with "Finished" Popup ***/

/*** if ( $('.alert-warning p:contains("THANK YOU FOR VISITING MCKINNEY PUBLIC LIBRARY")').length ) {
	$('body').append(`<div id="logout_form" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
            </div>
            <div class="modal-footer">
              <button id="try_again" type="button" class="btn btn-primary">Close</button>
            </div>
          </div>
        </div>
	</div>`);
   $('#sco_error').modal('show');
   $('#sco_error .modal-body').append( $('.alert-warning') );
   $('#try_again').click( function() {
   		window.location.href = '/cgi-bin/koha/sco/sco-main.pl?op=logout';
   });	
}
***/