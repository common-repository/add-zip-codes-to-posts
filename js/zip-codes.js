jQuery(document).ready(function($) {
	$('#savesZip').addClass('clearfix');

	var ajaxurl = window.location.origin + '/wp-admin/admin-ajax.php';
	var selectState = $('#field-state');
	var selectCity = $('#field-city');
	var selectZip = $('#field-zip');

	selectCity.attr('disabled', true);
	selectZip.attr('disabled', true);

	/* Ajax handler for input State */
    selectState.on('change', function(){
    	var $this = $(this);

		selectZip.attr('disabled', true);
    	$("#btnAddZip").remove();

    	// selectZip[0].options.length = 0;

	    var data = {
	    	'action': 'addCities',
	        'state' : $this.val()
	    };

	    $.ajax({
			type: 'POST',
			url: ajaxurl,
			data: data,
			beforeSend: function() {
				selectCity.parents('.select-item').find('.wait').show();
				selectZip.append($("<option></option>").text('-- Select Zip --'));
			},
			success: function (data) {
				$citySelect = $this.parents('.inside').find('#field-city');
		    	$citySelect.html(data);
				selectCity.removeAttr('disabled');
				selectCity.parents('.select-item').find('.wait').hide();
			}
		});
    });


    /* Ajax handler for input City */
    selectCity.on('change', function(){
    	$("#btnAddZip").remove();
    	var $this = $(this);
	    var data = {
	    	'action': 'addZip',
	        'city' : $this.val()
	    };

	    $.ajax({
			type: 'POST',
			url: ajaxurl,
			data: data,
			beforeSend: function() {
				selectCity.parents('.select-item').find('.wait').show();
			},
			success: function (data) {
				selectZip.html(data);
				selectZip.removeAttr('disabled');
	    	    selectZip.on('change', function(){
			    	if ($("#btnAddZip").length == 0) {
			    		$('.wrap-selects').append( '<button type="button" id="btnAddZip" class="add-zip-code button button-primary button-large">Add & save</button>');
		    		}
			    });
				selectCity.parents('.select-item').find('.wait').hide();
			}
		});
    });


	/* Handler for button +Add Zip */
    $('#btnAddZip').live('click', function(){
    	var i = event.timeStamp;
	   	var stateValue = selectState.val();
    	var cityValue = selectCity.val();
    	var zipValue = selectZip.val();

    	var stateBlock = '<div class="row"><label class="name-tag">State</label><input type="text" name="state" value="' + stateValue + '" class="value-tag" readonly><input type="hidden" name="data[' + zipValue + '][state]" value="' + stateValue + '"></div>';
    	var cityBlock = '<div class="row"><label class="name-tag">City</label><input type="text" name="city" value="' + cityValue + '" class="value-tag" readonly><input type="hidden" name="data[' + zipValue + '][city]" value="' + cityValue + '"></div>';
    	var zipBlock = '<div class="row"><label class="name-tag">Zip</label><input type="text" name="zip-code" value="' + zipValue + '" class="value-tag" readonly><input type="hidden" name="data[' + zipValue + '][zip]" value="' + zipValue + '"></div>';

    	$('#savesZip').append( '<div id=wrapZips></div>');
    	$('#wrapZips').append( '<div id="key_' + i + '" class="zipRow clearfix">' + stateBlock + cityBlock + zipBlock +'</div>');
    	$('#key_' + i).append('<button type="button" id="btn_' + i + '" class="del-zip-code button button-primary button-large">Delete</button>');
    	$('#key_' + i).css('box-shadow', '0 0 30px rgba(136, 236, 43, 0.4) inset');
    	$('#key_' + i).slideDown();

    	selectCity.attr('disabled', true);
		selectZip.attr('disabled', true);
    	selectCity.find('option').text('-- Select City --');
	   	selectZip.find('option').text('-- Select Zip --');
	   	$("#btnAddZip").remove();
	   	selectState.val(0);

		/* Handler for button Delete */
		$('#btn_' + i).live('click', function(){
			$('#key_' + i).remove();
		});

		$('#publish').trigger('click');
    });

    /* Delete row zip-code */
    $('#delSavedRow').live('click', function() {
    	var $this = $(this).parent();
        $this.slideUp();
        setTimeout(function () {
			$this.remove();
		}, 1000);
    });

    // /* Save select post type in settings plugin */
    // $('#postTypes').on('change', function() {
    //     var $this = $(this).val();
    //     $('#hiddenPostypes').val($this);
    // });
});
