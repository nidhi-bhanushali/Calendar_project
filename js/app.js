
let today = new Date();
console.log(today);
let dayInt = today.getDate();
console.log(dayInt);
let month = today.getMonth();
console.log(month);
let year = today.getFullYear();
console.log(year);

let calendarContainer = document.querySelector('.calendar-container');
let calendarBody = document.querySelector('.date-list');
console.log(calendarBody);

let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');

let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];



// functions start from here

// Show calendar
    const showCalendar = (month , year) => {
    let firstDay = new Date(year , month).getDay();
    console.log(firstDay);

    let lastDay = new Date(year,month + 1 , 0).getDay();
    console.log(lastDay);
    extraDays = 6-lastDay;
    console.log(extraDays);

    calendarBody.innerHTML = "";

    let totalDays = daysInMonth(month , year);
    console.log(totalDays);
    console.log(totalDays-firstDay)
    
    // extra dates before firstday
    blankDates(firstDay);

    // Create the boxes with dates written
    for(let day = 1 ; day<=totalDays ; day++){
        let cell = document.createElement('li');
        cell.className = 'date';
        let cellSpan = document.createElement('span');
        cellSpan.className = 'dateEl'
		let cellText = document.createTextNode(day);
        cellSpan.appendChild(cellText);

        // if(
        //     dayInt === day && 
        //     month === today.getMonth() &&
        //     year === today.getFullYear()
        //     ){
        //         cell.classList.add('active');
        // }

        cell.setAttribute('data-day' , day);
        cell.setAttribute('data-month' , month);
        cell.setAttribute('data-year' , year);

            
        cell.appendChild(cellSpan);
        calendarBody.appendChild(cell);
    }

    let weeks = getWeeksInMonth(month , year);
    console.log(weeks); 

    // Extra days after last day
    if(weeks===5){
        extraDays+=7
    }
    extraDates(extraDays);

    // Display month and year
    document.getElementById('month').innerHTML = `${months[month]} ${year}`;

}

// Weeks in a month
const getWeeksInMonth = (month_number , year) => {
  var firstOfMonth = new Date(year, month_number, 1);
  var lastOfMonth  = new Date(year, month_number, 0);
  var used         = firstOfMonth.getDay() + lastOfMonth.getDate();
  return Math.ceil( used / 7);    
  }


// No of days in that month
const daysInMonth = (month , year) => {
    return new Date(year, month+1, 0).getDate(); 
}

// boxes for days before 1st day
const blankDates = (count)=>{
    daysInPrevMonth = daysInMonth(month - 1 , year);
    console.log(daysInPrevMonth);
    
    for(let x=0 , y = (daysInPrevMonth -count) + 1 ; x < count ; x++ , y++){
        let cell = document.createElement("li");
		let cellText = document.createTextNode(y);
        cell.appendChild(cellText);
        cell.classList.add('extra-date');
		calendarBody.appendChild(cell);
    }
}


// Boxes for days after last day
const extraDates = (count) => {
    for(let x = count , y=1 ; x>0 ; x-- , y++){
        let cell = document.createElement("li");
		let cellText = document.createTextNode(y);
        cell.appendChild(cellText);
        cell.classList.add('extra-date');
		calendarBody.appendChild(cell);
    }
}

// for next month
const next = () => {
    year = month === 11 ? year + 1 : year;
    month = (month + 1) % 12;
    showCalendar(month , year);
}


// for Prev month
const prev = () => {
    year = month === 0 ? year - 1 : year;
	month = month === 0 ? 11 : month - 1;
	showCalendar(month, year);
}

showCalendar(month, year);

let dates = document.querySelectorAll('.date');
console.log(dates);


function getLink(e) {
    // console.log(1223);
    console.log(e.target);
} 



// Event listeners
// calendarBody.addEventListener('click',getLink);
dates.forEach(date => {
    date.addEventListener('click' , getLink)
}); 
nextBtn.addEventListener('click' , next);
prevBtn.addEventListener('click' , prev)

