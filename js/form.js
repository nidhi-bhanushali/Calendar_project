var department = $("#department");
var title = $("#title");
var description = $("#description");
var fees = $("#fees")
var speaker = $("#speaker");

document.addEventListener('DOMContentLoaded', function () {
    $('select').formSelect();
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

var venue;
var time;

$('#yes_venue').click(function () {
    venue = true;
    $('.single_venue').children().remove();
    $('.date-time').parent().remove();
    if(time == true)
        yes_time();
    else if(time == false)
        no_time();

})

$('#no_venue').click(function (e) {
    venue = false;
    console.log('clicked');
     $('.date-time').parent().remove();
    if(time == true)
        yes_time();
    else if(time == false)
        no_time();
    $('.single_venue').append(`<div class="venue">
                        <div class="input-field col s12 m12 l12">
                            <select multiple>
                                <option value="" disabled>Select</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                            <label>Venue</label>
                        </div>
                    </div>`);

    $('select').formSelect();
})

$('#yes_time').click(yes_time);

function yes_time() {
    time = true;
    var no_of_days = $("#no_of_days").val();
    $('.date_time').parent().remove();
    $('.btn-floating.btn-large').css("display", "block");
    if (venue == true)
        for (var i = 0; i < no_of_days; i++) {
            singledate_venue();
        }
    else if (venue == false)
        for (var i = 0; i < no_of_days; i++) {
            singledate();
        }
}


$('#no_time').click(no_time);

function no_time() {
    time = false;
    var no_of_days = $("#no_of_days").val();
    $('.date_time').parent().remove();
    $('.btn-floating.btn-large').css("display", "none");
    if (venue == true)
        for (var i = 0; i < no_of_days; i++) {
            singledate_venue();
        }
    else if (venue == false)
        multipledate();
}


function singledate() {
    console.log("CLicked!");
    $('.event-details').append(`<div class="row m-0">
                    <div class="date_time">
                        <div class="col mycol"></div>
                        <div class="input-field col s12 l2">
                            <input id="start_date" type="text" class="datepicker">
                            <label class="active" for="start_date">Date</label>
                        </div>
                        <div class="col mycol2"></div>
                        <div class="input-field col s5 l2">
                            <input id="start_time" type="text" class="timepicker">
                            <label class="active" for="start_time">Start Time</label>
                        </div>
                        <div class="col s2 m1 l1 center-align mt-20">
                            <span class="">to</span>
                        </div>
                        <div class="input-field col s5 l2">
                            <input id="end_time" type="text" class="timepicker">
                            <label class="active"  for="end_time">End Time</label>
                        </div>
                    </div>
                </div>`);
}

function singledate_venue() {
    $('.event-details').append(`<div class="row m-0">
                    <div class="date_time">
                        <div class="input-field col s12 l2">
                            <input id="start_date" type="text" class="datepicker">
                            <label class="active" for="start_date">Date</label>
                        </div>
                        <div class="col mycol"></div>
                        <div class="input-field col s5 l2">
                            <input id="start_time" type="text" class="timepicker">
                            <label class="active" for="start_time">Start Time</label>
                        </div>
                        <div class="col s2 m1 l1 center-align mt-20">
                            <span class="">to</span>
                        </div>
                        <div class="input-field col s5 l2">
                            <input id="end_time" type="text" class="timepicker">
                            <label class="active"  for="end_time">End Time</label>
                        </div>
                        <div class="col mycol"></div>
                        <div class="venue">
                        <div class="input-field col s12 m2 l2">
                            <select multiple>
                                <option value="" disabled>Select</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                            <label>Venue</label>
                        </div>
                    </div>
                    </div>
                </div>`);
    $('select').formSelect();
    $('.venue .input-field input[type=text]').css("width", "78%");
}
$('.btn-floating.btn-large').click(function () {
    singledate();
});

function multipledate() {
    console.log("CLicked!");
    $('.event-details').append(`<div class="row m-0">
                    <div class="date_time">
                        <div class="input-field col s5 l2">
                            <input id="start_date" type="text" class="datepicker">
                            <label class="active" for="start_date">Start Date</label>
                        </div>
                        <div class="col s2 m1 l1 center-align mt-20">
                            <span class="">to</span>
                        </div>
                        <div class="input-field col s5 l2">
                            <input id="end_date" type="text" class="datepicker">
                            <label class="active" for="end_date">End Date</label>
                        </div>
                        <div class="col mycol2"></div>
                        <div class="input-field col s5 l2">
                            <input id="start_time" type="text" class="timepicker">
                            <label class="active" for="start_time">Start Time</label>
                        </div>
                        <div class="col s2 m1 l1 center-align mt-20">
                            <span class="">to</span>
                        </div>
                        <div class="input-field col s5 l2">
                            <input id="end_time" type="text" class="timepicker">
                            <label class="active" for="end_time">End Time</label>
                        </div>
                    </div>
                </div>`);
}
$('body').on('focus', ".datepicker", function () {
    console.log($(this));
    $(this).datepicker();
});
$('body').on('focus', ".timepicker", function () {
    $(this).timepicker();
});

$(document).ready(function () {
    $('#slide-out').sidenav({
        edge: 'right'
    });
});
$(document).ready(function () {
    $('#mobile-demo.sidenav').sidenav({
        edge: 'left'
    });
});
$('body').on('click', ".submit", function (e) {
    var start_date = $('#start_date').val();
    var end_date = $("#end_date").val();
    var start_time = $("#start_time").val();
    var end_time = $("#end_time").val();
    let current_date = new Date();

    if (end_date < start_date || new Date(start_date) < current_date || new Date(end_date) < current_date) {
        console.log('Please put different date');
        e.preventDefault();
    }
    if (start_time >= end_time) {
        console.log('Please put different time');
        e.preventDefault();
    }

    if (department.val() == "" || title.val() == "" || description.val() == "" || fees.val() == "" || speaker.val() == "") {
        console.log("Please enter all details");
        e.preventDefault();
    }

});
