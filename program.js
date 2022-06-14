var fullName = document.querySelector(".name");
var idNr = document.querySelector(".id");
var addBtn = document.querySelector(".query");

addBtn.addEventListener("click", addEntries);



function addEntries() {
    var idNumber = Number(idNr.value);
// alert("Hl")



    // SA ID Number have to be 13 digits, so check the length
    if (idNumber.length != 13 || !isNumber(idNumber)) {
        error = 'ID number does not appear to be authentic - input not a valid number';
        correct = false;
    }

    // get first 6 digits as a valid date
    const yr = idNr.value.substring(0, 2);
    var tempDate = new Date(yr, idNumber.toString().substring(2, 4) - 1, idNumber.toString().substring(4, 6));
    console.log({ yr }, '-----', Number(yr) + 2000, { tempDate }) // 01 - 2001 = 1901
    // yr 00 and 30 + 100

    var id_date = Number(tempDate.getDate());
    var id_month = Number(tempDate.getMonth());
    var id_year = Number(tempDate.getFullYear()) > 1940 ? Number(tempDate.getFullYear()) : Number(yr) + 2000;
    // var fullDate = id_date + "-" + (id_month + 1) + "-" + id_year;
    var fullDate = id_year + "-" + (id_month + 1) + "-" + id_date;

    console.log({ id_year }, 'ii');
    // var fullDate=Number(fullDate1)

    if (!((tempDate.getYear() == idNumber.toString().substring(0, 2)) && (id_month == idNumber.toString().substring(2, 4) - 1) && (id_date == idNumber.toString().substring(4, 6)))) {
        error = 'ID number does not appear to be authentic - date part not valid';
        correct = false;
    }

    // get the gender
    var genderCode = idNumber.toString().substring(6, 10);
    var gender = parseInt(genderCode) < 5000 ? "Female" : "Male";

    //get country ID for citzenship
    var citzenship = parseInt(idNumber.toString().substring(10, 11)) == 0 ? "Yes" : "No";

    console.log(citzenship, correct)

    // if no error found, hide the error message
    // if (correct) {

    // clear the result div
    // and put together a result message
    console.log('South African ID Number:   ' + idNumber + '\nBirth Date:   ' + fullDate + '\nGender:  ' + gender + ' \tSA Citizen:  ' + citzenship);
    // }



 
  

}




    
   



// first create main user/client
// need to approve
// once client is approved, you can now add new member

// const user = {
//     fullName: '',
//     id: '999999999',
//     dob: '',
//     age: 23,
//     approved: true,
//     limit: 3,
//     canAdd(){
//         return this.approved && this.limit < this.members.length
//     },
//     members: [
//         {
//             fullName: '',
//             id: '999999999',
//             dob: '',
//             age: 23,
//             relate: 'child',
//             since: 2009,
//             approved: false
//         }
//     ]
// }

