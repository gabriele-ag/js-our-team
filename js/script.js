const teamMembers = [
    {
      name: "Marco Bianchi",
      role: "Designer",
      email: "marcobianchi@team.com",
      img: "img/male1.png"
    },
    {
      name: "Laura Rossi",
      role: "Front-end Developer",
      email: "laurarossi@team.com",
      img: "img/female1.png"
    },
    {
      name: "Giorgio Verdi",
      role: "Back-end Developer",
      email: "giorgioverdi@team.com",
      img: "img/male2.png"
    },
    {
      name: "Marta Ipsum",
      role: "SEO Specialist",
      email: "martarossi@team.com",
      img: "img/female2.png"
    },
    {
      name: "Roberto Lorem",
      role: "SEO Specialist",
      email: "robertolorem@team.com",
      img: "img/male3.png"
    },
    {
      name: "Daniela Amet",
      role: "Analyst",
      email: "danielaamet@team.com",
      img: "img/female3.png"
    }
  ];

  const cardElement = document.querySelector(`#card-container`)


const getElementMember = (member) => {
    const {name, role, email, img} = member
    
    card = `<div class="card mb-3 col-4" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${img}" class="img-fluid rounded-start" alt="">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${role}</p>
                        <p class="card-text">${email}</p>
                        </div>
                    </div>
                </div>
            </div>`;

    return card;
}


// of per gli array
//  in per gli oggetti

for (let member of teamMembers) {
    cardElement.innerHTML += getElementMember(member);
}

const nameUser = document.querySelector(`#name`)
const roleUser = document.querySelector(`#role`)
const mailUser = document.querySelector(`#mail`)
const imageUser = document.querySelector(`#image`)
const btn = document.querySelector(`.btn`)

btn.addEventListener(`submit`, function (event) {
    event.preventDefault()

    const nuovoUtente = {
        name: nameUser.input,
        role: roleUser.input,
        mail: mailUser.input,
        image: imageUser.input
    }
    
}) 






