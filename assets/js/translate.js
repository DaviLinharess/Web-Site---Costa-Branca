// Objeto com as traduções
const translations = {
  pt: {
    nav_home: 'Home',
    nav_about: 'Sobre nós',
    nav_menu: 'Cardápio',
    nav_dishes: 'Pratos',
    nav_contact: 'Contato',
    hero_button: 'Reserve já',
    about_title: 'Um pouco da nossa história...',
    about_text: 'Fundado com a paixão de celebrar a cultura e os sabores do litoral potiguar, o Restaurante Costa Branca nasceu do sonho de oferecer uma experiência gastronômica sofisticada e acolhedora. Inspirado nas belezas do Rio Grande do Norte, homenageia as areias brancas e as águas cristalinas em cada detalhe do ambiente e cardápio. Unindo culinária regional e toques contemporâneos, transforma ingredientes frescos e locais em pratos que resgatam memórias afetivas, como a moqueca potiguar e frutos do mar recém-pescados. Com uma decoração moderna que remete às paisagens da região e um atendimento caloroso, o Costa Branca é um espaço de encontro e celebração, onde cada refeição se torna uma viagem pelos sabores, histórias e tradições do Nordeste.',
    menu_title: 'Conheça nosso cardápio',
    menu_starters_title: 'Entradas',
    menu_starters_text: 'Comece sua experiência com sabores irresistíveis. Nossas entradas são preparadas com ingredientes frescos e combinações delicadas para despertar o paladar. Explore todas as opções e escolha a sua favorita!',
    menu_main_title: 'Pratos principais',
    menu_main_text: 'Tradição e sofisticação servidas à mesa. Nossos pratos principais trazem o melhor da culinária potiguar, com ingredientes frescos e combinações irresistíveis. Conheça cada detalhe e encontre o seu preferido!',
    menu_desserts_title: 'Sobremesas',
    menu_desserts_text: 'O toque final perfeito para sua refeição. Nossas sobremesas equilibram tradição e criatividade, trazendo doces que encantam os sentidos. Explore nossas delícias e escolha a sua!',
    menu_learn_more: 'Saiba mais!',
    dishes_title: 'Pratos',
    dish1_caption: 'Sabores irresistíveis que despertam memórias e felicidade pura. Bife batata',
    dish2_caption: 'Sabores irresistíveis que despertam memórias e felicidade pura. Salada',
    contact_title: 'Contato',
    contact_text: 'Fale com a gente e descubra o melhor da nossa gastronomia! Entre em contato para reservas, eventos ou mais informações. Estamos prontos para te atender.',
    form_name_label: 'Nome:',
    form_name_placeholder: 'Digite seu nome:',
    form_email_label: 'Email:',
    form_email_placeholder: 'Digite seu email:',
    form_phone_label: 'Telefone:',
    form_phone_placeholder: 'Digite seu Telefone:',
    form_message_label: 'Mensagem:',
    form_message_placeholder: 'Deixe uma mensagem:',
    form_button: 'Enviar',
    devs_title: 'Desenvolvedores',
    footer_credits: '© 2025 Restaurante Costa Branca. Todos os direitos reservados. Desenvolvido por Gabriel e Davi.'
  },
  en: {
    nav_home: 'Home',
    nav_about: 'About Us',
    nav_menu: 'Menu',
    nav_dishes: 'Dishes',
    nav_contact: 'Contact',
    hero_button: 'Book now',
    about_title: 'A little about our history...',
    about_text: 'Founded with a passion for celebrating the culture and flavors of the Potiguar coast, Costa Branca Restaurant was born from the dream of offering a sophisticated and welcoming dining experience. Inspired by the beauty of Rio Grande do Norte, it honors the white sands and crystal-clear waters in every detail of its ambiance and menu. Combining regional cuisine with contemporary touches, it transforms fresh, local ingredients into dishes that evoke fond memories, such as the Potiguar moqueca and freshly caught seafood. With a modern decor that recalls the region\'s landscapes and warm service, Costa Branca is a place for gathering and celebration, where every meal becomes a journey through the flavors, stories, and traditions of the Northeast.',
    menu_title: 'Discover our menu',
    menu_starters_title: 'Starters',
    menu_starters_text: 'Start your experience with irresistible flavors. Our starters are prepared with fresh ingredients and delicate combinations to awaken the palate. Explore all the options and choose your favorite!',
    menu_main_title: 'Main Courses',
    menu_main_text: 'Tradition and sophistication served at the table. Our main courses feature the best of Potiguar cuisine, with fresh ingredients and irresistible combinations. Discover every detail and find your favorite!',
    menu_desserts_title: 'Desserts',
    menu_desserts_text: 'The perfect finishing touch for your meal. Our desserts balance tradition and creativity, offering sweets that delight the senses. Explore our delights and choose yours!',
    menu_learn_more: 'Learn more!',
    dishes_title: 'Dishes',
    dish1_caption: 'Irresistible flavors that awaken memories and pure happiness. Steak and potatoes',
    dish2_caption: 'Irresistible flavors that awaken memories and pure happiness. Salad',
    contact_title: 'Contact',
    contact_text: 'Talk to us and discover the best of our cuisine! Get in touch for reservations, events, or more information. We are ready to assist you.',
    form_name_label: 'Name:',
    form_name_placeholder: 'Enter your name:',
    form_email_label: 'Email:',
    form_email_placeholder: 'Enter your email:',
    form_phone_label: 'Phone:',
    form_phone_placeholder: 'Enter your phone:',
    form_message_label: 'Message:',
    form_message_placeholder: 'Leave a message:',
    form_button: 'Submit',
    devs_title: 'Developers',
    footer_credits: '© 2025 Costa Branca Restaurant. All rights reserved. Developed by Gabriel and Davi.'
  }
};

// função que troca o idioma
function changeLanguage(lang) {
  const elements = document.querySelectorAll('[data-translate-key]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate-key');
    const translation = translations[lang] && translations[lang][key];

    if (translation) {
      // verificar se é pra um placeholder
      if (key.includes('_placeholder')) {
        element.placeholder = translation;
      } else {
        // se nn, atualiza o conteudo
        // pro link saiba mais, mantem o icone
        if (element.classList.contains('read-more')) {
          const icon = element.querySelector('svg');
          element.textContent = translation + ' '; // espaço antes do icone
          if (icon) {
            element.appendChild(icon);
          }
        } else {
          element.textContent = translation;
        }
      }
    }
  });

  // att o lang da tag <html>
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

// define o idioma inicial com base no navegador
document.addEventListener('DOMContentLoaded', () => {
  const userLang = navigator.language || navigator.userLanguage;
  const lang = userLang.startsWith('pt') ? 'pt' : 'en';
  changeLanguage(lang);
});