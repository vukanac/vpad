$(document).ready(function() {
	$('.icontacts li.item li').click(function(){
		$('.icontacts li.item li').removeClass('active');
		$(this).addClass('active');
		$('.icontacts').css('width','50%');
		var value=$(this).find('a').html();
		$('#detail_popup').css('display','block');
		//$('#name').html(value);
		$('#detail_popup').html("<div style=\"width:20px;margin:auto;margin-top:140px;\"><img id='loading-graphic' width='16' height='16' src='images/ajax-loader-abc4ff.gif' /></div>");
		var link='views/profile.html?name='+value;
		
		$.ajax(link, {
            dataType: "html",
            cache: false,
            success: function(data, textStatus, jqXHR) {
				setTimeout(function(){
					return pageDownloadedDetail(data, value);
				},1000);
                
            },
            complete: function(jqXHR, textStatus) {
            }
        });
		
		
	});
	function pageDownloadedDetail(data, anchor){
	    //var target = "#detail_popup";
	    //div = $(data).appendTo();
	    $('#detail_popup').html(data);
	    $('#detail_popup').find('#name').html(anchor);
	    $('#detail_popup').find('#mail').html(anchor+'@company.com');
	    $('#btn_back').click(function(){
			$('.icontacts').css('width','100%');
			$('#detail_popup').css('display','none');
			$('.active a').html($('#name').html());
			$('.icontacts li.item li').removeClass('active');
		});
		$('#btn_edit').click(function(){
			$('#detail_popup').css('display','none');
			$('#edit_popup').css('display','block');
			$('#txtName').val(anchor);
			$('#txtEmail').val(anchor+'@company.com');
			$('#btn_cancel').click(function(){
				$('.icontacts').css('width','100%');
				$('#detail_popup').css('display','none');
				$('#edit_popup').css('display','none');
				$('.icontacts li.item li').removeClass('active');
			});
			
			$('#btn_save').click(function(){
				$('#name').html($('#txtName').val());
				$('#mail').html($('#txtEmail').val());
				$('#edit_popup').css('display','none');
				$('#detail_popup').css('display','block');
			});
		});
	}
});
