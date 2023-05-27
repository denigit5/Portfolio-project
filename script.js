document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.add('navbar-links-active');
    document.querySelector('.navbar-links').classList.remove('navbar-links-inactive');
  });
  document.querySelector('.close-button').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.remove('navbar-links-active');
    document.querySelector('.navbar-links').classList.add('navbar-links-inactive');
  });
  document.querySelector('.nav-link1').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.remove('navbar-links-active');
    document.querySelector('.navbar-links').classList.add('navbar-links-inactive');
  });
  document.querySelector('.nav-link2').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.remove('navbar-links-active');
    document.querySelector('.navbar-links').classList.add('navbar-links-inactive');
  });
  document.querySelector('.nav-link3').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.remove('navbar-links-active');
    document.querySelector('.navbar-links').classList.add('navbar-links-inactive');
  });
  const projects = [
    {
      name: 'Tonic',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      detaileddescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      featuredimage: 'images/files/Frame 2.png',
      featuredimagemobile: 'images/files/Snapshoot.png',
      featuredimagedesktop: 'images/Snapshoot-Desktop1.png',
      featuredimagepopup: 'images/files/Snapshoot popuo desktop 1.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'bootstrap'],
      linklive: '#',
      linksource: '#',
    },
    {
      name: 'Multi Post Stories',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      detaileddescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      featuredimage: 'images/files/Frame 2.png',
      featuredimagemobile: 'images/files/Snapshoot2.png',
      featuredimagedesktop: 'images/files/Snapshoot2.png',
      featuredimagepopup: 'images/files/Snapshoot popuo desktop 1.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'bootstrap'],
      linklive: '#',
      linksource: '#',
    },
    {
      name: 'Tonic',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      ddescription1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      description2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> <br> Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
      featuredimage: 'images/files/Frame 2.png',
      featuredimagemobile: 'images/files/Snapshoot3.png',
      featuredimagedesktop: './images/Snapshoot-Desktop1.png',
      featuredimagepopup: 'images/files/Snapshoot popuo desktop 1.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'bootstrap'],
      linklive: '#',
      linksource: '#',
    },
    {
      name: 'Multi Post Stories',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      description1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      description2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> <br> Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
      featuredimage: 'images/files/Frame 2.png',
      featuredimagemobile: 'images/files/Snapshoot4.png',
      featuredimagedesktop: 'images/Snapshoot-Desktop1.png',
      featuredimagepopup: 'images/files/Snapshoot popuo desktop 1.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'bootstrap'],
      linklive: '#',
      linksource: '#',
    },
  ];
  const body = document.querySelector('body');
  projects.forEach().add('container');
  const gridsWork = document.createElement('grids-works');
  body.appendChild(gridsWork);
  gridsWork.innerHTML = `<ul id="works-container"><li><ul class="container"><li><div class="card-works1"><img src="images/files/Snapshoot.png" alt="Loading"></div><div class="card-works2-1"><img src="images/files/Snapshoot-Desktop1.png" alt=""></div></li><li class ="firstphas"><h2 class="card1-heading">Tonic</h2><div class="canopy"><img src="images/files/Frame 2.png" alt="Loading"></div><p class="card1-section">A daily selection of privately personalised reads; no account or sign-up required.</p><div class="technologies"><ul class="button-list"><li><button class="lang">HTML</button></li><li><button  class="lang">CSS</button></li><li><button  class="lang">Javascript</button></li></ul></div><a href="#"><button class="see-project1 see-project">See project</button></a></li></ul><a href="" class="popup popup-inactive"><div class="popup one-content"><span class="close close1">&times</span><div class="object-details"><h2 class="card1-heading">Tonic</h2><div class="canopy"><img src="images/files/Frame 2.png" alt="Loading"></div><div class="card-works1 popupimg1"><img src="images/files/Snapshoot.png" alt="Loading"></div><div class="deskpop one"><img src="images/files/Snapshoot popuo desktop 1.png" alt=""></div><p class="card1-section poparagraph1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p><p class="poparagraph2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</p><div class="technologies">
        <ul class="poplist desklist"><li><button class="lang">HTML</button></li><li><button  class="lang">CSS</button></li><li><button  class="lang">Javascript</button></li><li><button  class="lang lang1">Ruby</button></li><li><button  class="lang lang1">Bootstrap</button></li></ul></div><div class="live-links"><ul class="live-links"><li><button class="see-project live-link1">See live</button></li><li><button class="see-project live-link2" type="button">See source</button></li>  </ul></div></div></div><div class="overlay"></div></a></li><li><ul class="container2"><li><div class="card-works1"><img src="images/files/Snapshoot2.png" alt="Loading"></div> <div class="card-works2-1"><img src="images/files/Snapshoot desktop2.jpg" alt=""></div></li>
                <li class ="firstphas">
                      <h2 class="card2-heading">Multi-post stories</h2>
                      <div class="canopy canopyA"><img src="images/files/Frame 2.png" alt="Loading"></div>
                      <div class=" canopy2"><img src="images/files/Frame facebook.jpg" alt=""></div><p class="card2-section">A daily selection of privately personalised reads; no account or sign-up required.</p><p class="card2-section card2-sectionB">Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.</p>
                      <div class="technologies"><ul class="button-list"><li><button class="lang">HTML</button></li><li><button class="lang ruby">Ruby on rails</button></li><li><button  class="lang css">CSS</button></li><li><button  class="lang">Javascript</button></li></ul></div><a href="#"><button class="see-project see-project2">See project</button></a></li></ul></li>
           <a href="" class="popupTwo popup popup-inactive"><div class="popup one-content"><span class="close close1">&times</span><div class="object-details"><h2 class="card1-heading">Tonic</h2><div class="canopy"><img src="images/files/Frame 2.png" alt="Loading"></div><div class="card-works1 popupimg1"><img src="images/files/Snapshoot2.png" alt="Loading"></div><div class="deskpop one picture"><img src="images/files/Snapshoot popuo desktop 1.png" alt=""></div><p class="card1-section poparagraph1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p><p class="poparagraph2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</p><div class="technologies"><ul class="poplist desklist"><li><button class="lang">HTML</button></li><li><button class="lang">CSS</button></li><li><button class="lang">Javascript</button></li><li><button class="lang lang1">Ruby</button></li><li><button class="lang lang1">Bootstrap</button></li></ul></div>
           <div class="live-links">
               <ul class="live-links">
                   <li><button class="see-project live-link1">See live</button></li>
                   <li><button  class="see-project live-link2">See source</button></li>  
               </ul></div></div></div><div class="overlay"></div></a><li><ul class="container"><li><div class="card-works1"><img src="images/files/Snapshoot3.png" alt="Loading"></div><div class="card-works2-1"><img src="images/files/Snapshoot desktop Portfolio3.jpg" alt=""></div>
          </li>
          <li class ="firstphas">
              <h2 class="card1-heading">Facebook 360</h2>
              <div class="canopy canopyA"><img src="images/files/Frame 2.png" alt="Loading"></div>
              <div class="canopy3"><img src="images/files/Frame facebook.jpg" alt=""></div>
              <p class="card1-section card1-section1">A daily selection of privately personalised reads; no account or sign-up required.</p>
              <p class="card2-section card2-sectionB">Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.</p>
              <div class="technologies">
                  <ul class="button-list">
                      <li><button class="lang">HTML</button></li><li><button class="lang ruby">Ruby on rails</button></li><li><button  class="lang css">CSS</button></li><li><button  class="lang">Javascript</button></li></ul></div>
                  <a href="#">
                  <button class="see-project see-project3">See project</button>
              </a>
          </li>
      </ul></li><a href="" class="popup-dd popup popup-inactive"><div class="popup one-content"><span class="close close1">&times</span><div class="object-details"><h2 class="card1-heading">Tonic</h2><div class="canopy"><img src="images/files/Frame 2.png" alt="Loading"></div><div class="card-works1 popupimg1"><img src="images/files/Snapshoot3.png" alt="Loading"></div><div class="deskpop one picture"><img src="images/files/Snapshoot popuo desktop 1.png" alt=""></div><p class="card1-section poparagraph1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p><p class="poparagraph2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</p><div class="technologies">
           <ul class="poplist desklist">
               <li><button class="lang">HTML</button></li>
               <li><button  class="lang">CSS</button></li><li><button  class="lang">Javascript</button></li><li><button  class="lang lang1">Ruby</button></li><li><button  class="lang lang1">Bootstrap</button></li></ul></div><div class="live-links"><ul class="live-links"><li><button class="see-project live-link1">See live</button></li><li><button  class="see-project live-link2">See source</button></li>  </ul></div></div></div><div class="overlay"></div></a><li><ul class="container2"><li><div class="card-works1"><img src="images/files/Snapshoot4.png" alt="Loading"></div><div class="card-works2-1"><img src="images/files/Snapshoot desktop4.jpg" alt=""></div></li><li class ="firstphas"><h2 class="card2-heading">Multi-post stories</h2><div class="canopy canopyA"><img src="images/files/Frame 2.png" alt="Loading"></div><div class="canopy4"><img src="images/files/Frame uber.jpg" alt=""></div><p class="card2-section">A daily selection of privately personalised reads; no account or sign-up required.</p><p class="card2-section card2-sectionB">A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.</p><div class="technologies">
 <ul class="button-list"><li><button class="lang">HTML</button></li><li><button class="lang ruby" width="105px" height="24px">Ruby on rails</button></li><li><button  class="lang css">CSS</button></li><li><button  class="lang">Javascript</button></li></ul></div><a href="#"><button class="see-project see-project4">See project</button></a></li></ul></li></ul><a href="" class="popup popup-cc popup-inactive"><div class="popup one-content"><span class="close close1">&times</span><div class="object-details"><h2 class="card1-heading">Tonic</h2><div class="canopy"><img src="images/files/Frame 2.png" alt="Loading"></div> <div class="card-works1 popupimg1"><img src="images/files/Snapshoot4.png" alt="Loading"></div><div class="deskpop one picture"><img src="images/files/Snapshoot popuo desktop 1.png" alt=""></div><p class="card1-section poparagraph1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p><p class="poparagraph2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</p><div class="technologies"><ul class="poplist desklist"><li><button class="lang">HTML</button></li><li><button  class="lang">CSS</button></li><li><button  class="lang">Javascript</button></li><li><button  class="lang lang1">Ruby</button></li><li><button  class="lang lang1">Bootstrap</button></li></ul></div><div class="live-links"><ul class="live-links"><li><button class="see-project live-link1">See live</button></li><li><button  class="see-project live-link2">See source</button></li></ul></div></div></div><div class="overlay"></div></a>`;
  document.querySelector('.see-project1').addEventListener('click', () => {
    document.querySelector('.popup').classList.remove('popup-inactive');
    document.querySelector('.popup').classList.add('popup');
  });
  document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.popup').classList.remove('popup');
    document.querySelector('.popup').classList.add('popup-inactive');
  });
  document.querySelector('.see-project2').addEventListener('click', () => {
    document.querySelector('.popupTwo').classList.remove('popup-inactive');
    document.querySelector('.popupTwo').classList.add('popupTwo');
  });

  document.querySelector('.see-project3').addEventListener('click', () => {
    document.querySelector('.popup-dd').classList.remove('popup-inactive');
    document.querySelector('.popup-dd').classList.add('popup-dd');
  });
  document.querySelector('.see-project4').addEventListener('click', () => {
    document.querySelector('.popup-cc').classList.remove('popup-inactive');
    document.querySelector('.popup-cc').classList.add('popup-cc');
  });
});
