let filterInput = document.getElementById('filterInput');

filterInput.addEventListener('keyup', filterNames);

function filterNames(e) {
    let filterValue = filterInput.value.toUpperCase();
    let ul = document.getElementById('names');
    let li = ul.querySelectorAll('li a');
    for (let i = 0; i < li.length; i++) {
        let a = li[i].innerHTML;
        if (a.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.dispaly = ''
        } else {
            li[i].style.display = 'none'
        }
    }

}

//THIS IS ANOTHER WAY BUT THE BEST


// function filterNames(e) {

//     let filterValue = e.target.value.toLowerCase();
//     let ul = document.getElementById('names');
//     let li = ul.querySelectorAll('li a');
//     Array.from(li).forEach(
//         function(item) {
//             let a = item.textContent;
//             if (a.toLowerCase().indexOf(filterValue) != -1) {
//                 item.style.display = 'block';
//             } else {
//                 item.style.display = 'none';
//             }
//         })
// }