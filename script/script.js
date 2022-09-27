function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

function initAcordeon() {
  const accordeonList = document.querySelectorAll('.js-accord dt');
  const activ = 'ativo';
  if (accordeonList.length) {
    accordeonList[0].classList.add(activ);
    accordeonList[0].nextElementSibling.classList.add(activ);

    function activeAccorden(e) {
      this.classList.toggle(activ);
      this.nextElementSibling.classList.toggle(activ);
    }

    accordeonList.forEach((item) => {
      item.addEventListener('click', activeAccorden);
    });
  }
}
initAcordeon();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();

function initScrollAnimado() {
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {
    const windowMetada = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetada;
        if (sectionTop < 0) {
          section.classList.add('ativo');
        } else section.classList.remove('ativo');
      });
    }
  }
  animaScroll();
  window.addEventListener('scroll', animaScroll);
}

initScrollAnimado();
