// Form page
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems, {
        format: 'dd-mmmm-yyyy'
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.timepicker');
    M.Timepicker.init(elems, {});
});

var add_button = document.querySelector('.add_button');
add_button.addEventListener('click', function () {
    var start_date = document.getElementById("start_date").value;
    console.log(start_date);

    var end_date = document.getElementById("end_date").value;
    console.log(end_date);

    var start_time = document.getElementById("start_time").value;
    console.log(start_time);

    var end_time = document.getElementById("end_time").value;
    console.log(end_time);
    var date_time = document.querySelector(".date_time");
    if (start_date == end_date) {
        date_time.insertAdjacentHTML('afterend', `
                                         <div class="row mb-15" id="warning_message">
                    <div class="message_info">
                        <label>
                                <p>Please set different dates to add a new time slot.</p>
                        </label>
                    </div>
                </div>`);
    } else {
        var warning_message = document.getElementById("warning_message");
        if (warning_message != null)
            warning_message.remove();
        var new_start_date = new Date(start_date);
        var new_end_date = new Date(end_date);
        var today = new Date(start_date);
        for (var i = new_start_date.getDate(); i < new_end_date.getDate(); i++) {
            var tomorrow = new Date(today);
            console.log(tomorrow);
            tomorrow.setDate(tomorrow.getDate() + 1);
            today = tomorrow;
            date_time.insertAdjacentHTML('beforeend', `<div class="row m-0">
                        <div class="input-field col s2">
                            <input id="start_date" type="text" class="datepicker" value="">
                            <label for="start_date">Start Date</label>
                        </div>
                        <div class="col s1 center-align mt-20">
                            <span class="">to</span>
                        </div>
                        <div class="input-field col s2">
                            <input id="end_date" type="text" class="datepicker">
                            <label for="end_date">End Date</label>
                        </div>
                        <div class="col s2"></div>
                        <div class="input-field col s2">
                            <input id="start_time" type="text" class="timepicker">
                            <label for="start_time">Start Time</label>
                        </div>
                        <div class="col s1 center-align mt-20">
                            <span class="">to</span>
                        </div>
                        <div class="input-field col s2">
                            <input id="end_time" type="text" class="timepicker">
                            <label for="end_time">End Time</label>
                        </div>
                    </div>`);
        }
    }
});
