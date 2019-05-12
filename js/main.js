var person = [{
        "firstName": "Trupti",
        "lastName": "Jagtap",
        "phoneNo": "12345",
        "emailId": "trupti.jagtap@gmail.com",
        "address": "Satara"
    },
    {
        "firstName": "Rahul",
        "lastName": "Jadhav",
        "phoneNo": "787878",
        "emailId": "rahul.jadhav@gmail.com",
        "address": "Nagpur"
    },
    {
        "firstName": "Raghu",
        "lastName": "Pawar",
        "phoneNo": "6543546545",
        "emailId": "raghu.pawar@gmail.com",
        "address": "Nagar"
    }, {
        "firstName": "Dadashaheb",
        "lastName": "Kodag",
        "phoneNo": "5676548787",
        "emailId": "dadasaheb.kodag@gmail.com",
        "address": "Solapur"
    }, {
        "firstName": "Sangita",
        "lastName": "Nalwade",
        "phoneNo": "0604070001",
        "emailId": "sangita.nalwade@gmail.com",
        "address": "pune"
    }, {
        "firstName": "Sandy",
        "lastName": "Chavan",
        "phoneNo": "9876878787",
        "emailId": "sandy.chavan@gmail.com",
        "address": "Mumbai"
    }, {
        "firstName": "Arati",
        "lastName": "Bhosale",
        "phoneNo": "9096948787",
        "emailId": "arati.bhosale@gmail.com",
        "address": "Panjab"
    }, {
        "firstName": "Puja",
        "lastName": "Desai",
        "phoneNo": "7926860663",
        "emailId": "puja.desai@gmail.com",
        "address": "Kolkata"
    }, {
        "firstName": "Vaishu",
        "lastName": "Babar",
        "phoneNo": "9423765878",
        "emailId": "vaishu.babar@gmail.com",
        "address": "Kanpur"
    }, {
        "firstName": "Savi",
        "lastName": "Salukhe",
        "phoneNo": "5771853482",
        "emailId": "savi.salukhe@gmail.com",
        "address": "Raigad"
    }, {
        "firstName": "Kanchi",
        "lastName": "More",
        "phoneNo": "7867323243",
        "emailId": "kanchi.more@gmail.com",
        "address": "Panvel"
    }, {
        "firstName": "Shilpa",
        "lastName": "Kale",
        "phoneNo": "3885054441",
        "emailId": "shilpa.kale@gmail.com",
        "address": "Asam"
    }, {
        "firstName": "Mani",
        "lastName": "Kamble",
        "phoneNo": "9665056490",
        "emailId": "mani.kamble@gmail.com",
        "address": "Goa"
    }, {
        "firstName": "Kalli",
        "lastName": "Choubey",
        "phoneNo": "9850085634",
        "emailId": "kalli.choubey@gmail.com",
        "address": "Nagpur"
    }, {
        "firstName": "Puja",
        "lastName": "Mane",
        "phoneNo": "9773685698",
        "emailId": "puja.mane@gmail.com",
        "address": "Nashik"
    }, {
        "firstName": "Shubha",
        "lastName": "Patange",
        "phoneNo": "7057326598",
        "emailId": "shubha.patange@gmail.com",
        "address": "Latur"
    }, {
        "firstName": "Varshu",
        "lastName": "Gore",
        "phoneNo": "7043232198",
        "emailId": "varshu.gore@gmail.com",
        "address": "Delhi"
    }, {
        "firstName": "Chikki",
        "lastName": "Kadam",
        "phoneNo": "7425588888",
        "emailId": "chikki.kadam@gmail.com",
        "address": "Satara"
    }, {
        "firstName": "Madhu",
        "lastName": "Patil",
        "phoneNo": "9873434346",
        "emailId": "madhu.patil@gmail.com",
        "address": "Panaji"
    }, {
        "firstName": "Rucha",
        "lastName": "Kedar",
        "phoneNo": "5475877878",
        "emailId": "rucha.kedar@gmail.com",
        "address": "Kerala"
    }, {
        "firstName": "Hardik",
        "lastName": "Pandhya",
        "phoneNo": "3465768798",
        "emailId": "hardik.pandhya@gmail.com",
        "address": "Banglore"
    }, {
        "firstName": "Chikki",
        "lastName": "Kadam",
        "phoneNo": "7425588888",
        "emailId": "chikki.kadam@gmail.com",
        "address": "Satara"
    }, {
        "firstName": "Madhu",
        "lastName": "Patil",
        "phoneNo": "9873434346",
        "emailId": "madhu.patil@gmail.com",
        "address": "Panaji"
    }, {
        "firstName": "Rucha",
        "lastName": "Kedar",
        "phoneNo": "5475877878",
        "emailId": "rucha.kedar@gmail.com",
        "address": "Kerala"
    },
];

var currentPage = 1;



function loadData(key) {

    var candidateList = [];
    switch (key) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            currentPage = key;
            for (let index = (key - 1) * 5; index < key * 5; index++) {
                candidateList.push(person[index]);
            }
            break;
        case 'prev':
            let prev = currentPage - 1;
            for (let index = (prev - 1) * 5; index < prev * 5; index++) {
                candidateList.push(person[index]);
            }
            currentPage = prev;
            break;
        case 'next':
            let next = currentPage + 1;
            for (let index = (next - 1) * 5; index < next * 5; index++) {
                candidateList.push(person[index]);
            }
            currentPage = next;
            break;
		
    }
    var tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    candidateList.forEach(p => {
        var details = createStudentDetail(p);
        tbody.appendChild(details);
    });
    var pages = document.getElementsByName('page');
    pages.forEach(pg => {
        if (pg.id == "page" + currentPage) 
		{
			console.log(pg.id);
			console.log(currentPage);
            pg.className = "active";
        } else {
            pg.className = '';
        }
	
    });
}
function createStudentDetail(person) {
    var tr = document.createElement('tr');
    var firstName = document.createElement('td');
    var lastName = document.createElement('td');
    var phoneNo = document.createElement('td');
    var emailId = document.createElement('td');
    var address = document.createElement('td');

    firstName.innerHTML = person.firstName;
    lastName.innerHTML = person.lastName;
    phoneNo.innerHTML = person.phoneNo;
    emailId.innerHTML = person.emailId;
    address.innerHTML = person.address;

    tr.appendChild(firstName);
    tr.appendChild(lastName);
    tr.appendChild(phoneNo);
    tr.appendChild(emailId);
    tr.appendChild(address);
    return tr;
}


function move() {
  var elem = document.getElementById("myBar");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 50) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}