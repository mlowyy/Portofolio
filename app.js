const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const rollElements = document.querySelectorAll('.roll');
rollElements.forEach((el) => observer.observe(el));

const projectData = {
  landing: [
    {
      img: "img/panderest.png",
      title: "Panderest",
      desc: "Project untuk Sekolah"
    },
    {
      img: "img/first.png",
      title: "Landing Page PMI",
      desc: "Project Sekolah"
    },
    {
      img: "img/insta.png",
      title: "Login Page Instagram",
      desc: "Project Sekolah"
    }
  ],
  design: [
    {
      img: "img/poster.jpg",
      title: "Brutalism Poster",
      desc: "Picturing The Beuty of UK"
    },
    {
      img: "img/flayer1.png",
      title: "Clean Flayer",
      desc: "Just a simple looking"
    },
    {
      img: "img/flayer2.png",
      title: "Modern Flayer",
      desc: "Another flayer"
    },
    {
      img: "img/thank you card.jpg",
      title: "Thank You Card",
      desc: "Simple, Modern Card"
    },
    {
      img: "img/black cat vector.jpg",
      title: "Silly Cat",
      desc: "Isn't it cute?"
    },
    {
      img: "img/flower pattern.jpg",
      title: "Flower Pattern",
      desc: "Aesthetic Pattern"
    },
    {
      img: "img/duck vectorr.jpg",
      title: "Duck Vector",
      desc: "Chubby Duck"
    },
    {
      img: "img/business card.jpg",
      title: "Business Card",
      desc: "Business Card For Business Purposes"
    }
  ],
  art: [
    {
      img: "img/artcon.jpg",
      title: "Art Contest",
      desc: "For Art Contest"
    },
    {
      img: "img/oc2.jpg",
      title: "Fantasy Art",
      desc: "Personal Digital Work"
    },
    {
      img: "img/who.jpg",
      title: "Illustration Art",
      desc: "Just for fun illustration"
    },
    {
      img: "img/oc1.jpg",
      title: "Fantasy Art",
      desc: "im getting bored of this"
    }
  ]
};



function showProjects(type, btn) {
  const container = document.getElementById("project-preview");
  const buttons = document.querySelectorAll(".project-category button");

  buttons.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  container.innerHTML = "";

  projectData[type].forEach((item, index) => {
    container.innerHTML += `
      <div class="preview-card" style="animation-delay:${index * 0.15}s">
        <img src="${item.img}">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </div>
    `;
  });
}


window.addEventListener("load", () => {
  document.querySelector(".project-category button").click();
});

window.onload = () => {
  document.querySelector(".project-category button").click();
};

const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop reload
  popup.classList.add("active");
  form.reset();
});

function closePopup() {
  popup.classList.remove("active");
}


document.getElementById("year").textContent = new Date().getFullYear();
