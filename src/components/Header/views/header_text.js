const headerText = {
  fr: {
    resumeTitle: "Mon CV",
    portfolioTitle: "Portfolio",
    contactTitle: "Contact",
    languageTitle: "Langue",
    contactHeader: "Contactez moi",
    contactForm: `
    <form class="contact-form">
      <div class="contact-form--buttons">
          <!--<input type="submit" id="send-email" class="button button--base"  value="Envoyer"/>      
          <button id="close-modal-cancel" class="button button--base--inverted">Annuler</button>-->
          <a class="contact-form--link" href="mailto:jonathanbinot@gmail.com"
          >Me contacter par Mail <i class="fas fa-external-link-alt"></i
        ></a>
      </div>      
    </form>`,
  },
  en: {
    resumeTitle: "Resume",
    portfolioTitle: "Portfolio",
    contactTitle: "Contact",
    languageTitle: "Language",
    contactHeader: "Contact me",
    contactForm: `
    <form class="contact-form">
      <div class="contact-form--buttons">
          <!--<input type="submit" id="send-email" class="button button--base"  value="Envoyer"/>      
          <button id="close-modal-cancel" class="button button--base--inverted">Annuler</button>-->
          <a class="contact-form--link" href="mailto:jonathanbinot@gmail.com"
          >Send me an Email <i class="fas fa-external-link-alt"></i
        ></a>
      </div>      
    </form>`,
  },
};

export default headerText;
