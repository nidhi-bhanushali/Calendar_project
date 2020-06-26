document.addEventListener('DOMContentLoaded', function () {
    var elem = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elem, {});
});

$('select:not(.browser-default)').on('change', function (e) {
    console.log(e.target.value);
});

function warning() {
    if ($(this).val() == "") {
        var parent = $(this).parent().parent();
        var parent_classname = parent.attr('class');
        if (parent.hasClass('department') || parent.hasClass('title') || parent.hasClass('description') || parent.hasClass('event_days'))
            parent.append(`<label class="warning_message col s12 ${parent_classname} ">Please add ${parent_classname}.</label>`);
        else if (parent.hasClass('fees') || parent.hasClass('stakeholders') || parent.hasClass('venue') || parent.hasClass('speaker') || parent.hasClass('certificate')) {
            parent.parent().append(`<label class="warning_message col s12 ${parent_classname} ">Please add ${parent_classname}.</label>`);

        }
    }
}

function remove_warning() {
    if ($(this).val() != "") {
        var parent = $(this).parent();
        if ($(this).is('#fees') || $(this).is('#stakeholders') || $(this).is('#venue') || $(this).is('#Speaker') || $(this).is('#Certificate')) {
            var targetclass = parent.parent().attr('class');
            var targetelement = parent.parent().siblings(`label.${targetclass}`);
            console.log(targetelement);
            targetelement.remove();
        } else {
            var targetclass = parent.parent().attr('class');
            var targetelement = parent.siblings(`label.${targetclass}`);
            targetelement.remove();
        }

    }
}
$("input[type=text]").blur(warning);
$("input[type=text]").keydown(remove_warning);

$("textarea").blur(warning);
$("textarea").keydown(remove_warning);

$("input[type=number]").blur(warning);
$("input[type=number]").keydown(remove_warning);
$("input[type=number]").mousedown(remove_warning);

$('#yes').click(function () {
    var no_of_days = $("#no_of_days").val();
    $('.date_time').parent().remove();
    $('.btn-floating.btn-large').css("display","block");
    if (no_of_days == 1) {
        singledate();
    }
    else 
        for(var i=0;i<no_of_days;i++){
        singledate();   
        }
})
$('#no').click(function () {
  var no_of_days = $("#no_of_days").val();
    $('.date_time').parent().remove();
    $('.btn-floating.btn-large').css("display","none");
    multipledate();
})

function singledate(){
    $('.event-details').append(`<div class="row m-0">
                    <div class="date_time">
                        <div class="col mycol"></div>
                        <div class="input-field col s2">
                            <input id="start_date" type="text" class="datepicker">
                            <label class="active" for="start_date">Date</label>
                        </div>
                        <div class="col s2"></div>
                        <div class="input-field col s2">
                            <input id="start_time" type="text" class="timepicker">
                            <label class="active" for="start_time">Start Time</label>
                        </div>
                        <div class="col s1 center-align mt-20">
                            <span class="">to</span>
                        </div>
                        <div class="input-field col s2">
                            <input id="end_time" type="text" class="timepicker">
                            <label class="active"  for="end_time">End Time</label>
                        </div>
                    </div>
                </div>`);
}

$('.btn-floating.btn-large').click(function(){
   singledate(); 
});

function multipledate(){
    $('.event-details').append(`<div class="row m-0">
                    <div class="date_time">
                        <div class="input-field col s2">
                            <input id="start_date" type="text" class="datepicker">
                            <label class="active" for="start_date">Start Date</label>
                        </div>
                        <div class="col s1 center-align mt-20">
                            <span class="">to</span>
                        </div>
                        <div class="input-field col s2">
                            <input id="end_date" type="text" class="datepicker">
                            <label class="active" for="end_date">End Date</label>
                        </div>
                        <div class="col s2"></div>
                        <div class="input-field col s2">
                            <input id="start_time" type="text" class="timepicker">
                            <label class="active" for="start_time">Start Time</label>
                        </div>
                        <div class="col s1 center-align mt-20">
                            <span class="">to</span>
                        </div>
                        <div class="input-field col s2">
                            <input id="end_time" type="text" class="timepicker">
                            <label class="active" for="end_time">End Time</label>
                        </div>
                    </div>
                </div>`);
}
$('body').on('focus',".datepicker", function(){
    console.log($(this));
    $(this).datepicker();
});
$('body').on('focus',".timepicker", function(){
    $(this).timepicker();
});
