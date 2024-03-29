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
   $('#sco_error .modal-body').append( $('.alert-warning'));
   $('#try_again').click( function() {
   		window.location.href = '/cgi-bin/koha/sco/sco-main.pl';
   });	
}

/*** Timeout Final Popup ***/

$("#logout_form").click(function(){
    $("#bootstrap-confirm-box-modal").modal('show');
    setTimeout(function() {$("#bootstrap-confirm-box-modal").modal('hide');}, 10000);
});


/* Error Modal - Editing out "Please See a member of the staff" on certain messages */
// Scanned item more than once - cannot renew
$('#ce_no_more_renewals').closest('.alert').find('#ce_see_staff').hide();


//Overdue Items 
/*if ( $('#ce_unknown_barcode, #ce_max_loans_allowed, #ce_issued_to_another, #ce_no_more_renewals, #ce_not_for_loan, #ce_too_much_debt, #ce_wthdrawn, #ce_restricted, #ce_reserved, #ce_itemnotsamebranch, #ce_expired, #ce_debarred, #ce_card_lost, #ce_gna, #ce_invalid_date, #ce_addtional_materials').length === 0 ) {
    $('#ce_see_staff').text('There is an overdue item on your account. Please see a member of the staff.');
}*/
