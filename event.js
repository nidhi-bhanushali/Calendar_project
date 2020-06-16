let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();
let monthEl = document.getElementById('month');
console.log(monthEl);

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


let prevBtn = document.getElementById('prev');
console.log(prevBtn);
let nextBtn = document.getElementById('next');
console.log(nextBtn);

// Previous year
const prev = () => {
    year = month === 0 ? year - 1 : year;
    month = month === 0 ? 11 : month - 1;
    monthName(month,year);
}

const next = () => {
    year = month === 11 ? year + 1 : year;
    month = (month + 1) % 12;
    monthName(month , year);
}
const monthName = (month , year) => {
    monthEl.innerHTML = `${months[month]} ${year}`
}

monthName(month , year);


// Event listeners
prevBtn.addEventListener('click', prev);

nextBtn.addEventListener('click' , next);



