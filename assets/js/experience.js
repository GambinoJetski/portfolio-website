AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "IT Tech Support Intern",
    cardImage: "assets/images/experience-page/CWA-LOGO.png",
    place: "CWA(Central Water Authority)",
    time: "(July 2023 - September 2023)",
    desp: "<li>Worked on mail migration project of HCL to Microsoft 365.</li> <li>Gained valuable experience in IT support, hardware maintenance, networking concepts and project management.</li> <li>User training and on-site interventions.</li>",
  },
 
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "UDM IET on Campus",
    cardImage: "assets/images/experience-page/udm_iet.jpg",
    description:
      "The UDM IET club is part of the IET (Institution of Engineering and Technology). We organised several events like the Cloud Challenge in partnership with Clarity and other companies. ",
  },
  {
    title: "Microsoft Student Partner",
    cardImage: "assets/images/experience-page/microsoft_logo.png",
    description:
      "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups.",
  },
  
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "24h by Webcup Maurice",
    subtitle: "24h Webcup 2024",
    image: "assets/images/experience-page/uplift.png",
    desp: "Le 24h By Webcup est un concours de développement web d’une durée de 24 heures.Pendant ce laps de temps, les participants doivent réaliser un site internet sur un sujet imposé, dévoilé au lancement du concours.",
    href: "https://uplift.girlscript.tech/",
  },
 
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
    href: "https://nhacks-vi.devpost.com/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
