let contactManager = (function() {
  return {
    loadAllContacts: function() {
      this.makeGETRequest("http://localhost:3000/api/contacts", "json", (event) => {
        let contacts = event.currentTarget.response;
        contacts.forEach(contact => {

          if (contact.tags !== null) {
            contact.tags.split(",").forEach(tag => {
              if (!this.tags.includes(tag)) {
                this.tags.push(tag);
              }
            });
          }

          let digits = contact.phone_number.split("");
          digits.splice(1, 0, "-");
          digits.splice(5, 0, "-");
          digits.splice(9, 0, "-");
          contact.phone_number = digits.join("");
        });

        let tagsContext = [];
        this.tags.forEach(tag => {
          tagsContext.push({ tag: tag });
        });
        console.log({ all_tags: tagsContext });
        console.log(this.tagsScript);
        let tagsHTML = this.tagsScript({ all_tags: tagsContext });
        console.log('hi');
        if (this.tags.length > 0) {
          this.tagsElement.innerHTML = tagsHTML;
        } else {
          this.tagsElement.innerHTML = null;
        }

        console.log({ contacts: contacts });
        let contactsHTML = this.contactsScript({ contacts: contacts });
        if (contacts.length > 0) {
          this.contactsList.innerHTML = contactsHTML;
        } else {
          this.contactsList.innerHTML = this.addContactButton.innerHTML;
        }
      });
    },

    createEventListeners: function() {
      this.mainElement.addEventListener('click', (function(event) {
        if (!event.target.classList.contains('add_contact')) {
          return;
        }
        this.contactForm.classList.remove("slider_down");
        this.contactForm.classList.add("slider_up");
        this.coverMe.classList.add("covered");
        this.newContact = true;
      }).bind(this));

      this.contactForm.addEventListener('submit', (function(event) {
        event.preventDefault();
        let inputsEntered = true;;
        this.contactFormInputs.forEach(input => {
          if (input.value === "") {
            input.parentNode.parentNode.nextElementSibling.style.visibility = "visible";
            inputsEntered = false;
          } else {
            input.parentNode.parentNode.nextElementSibling.style.visibility = "hidden";
          }
        });
        if (inputsEntered) {
          let data = {};
          data.full_name = this.contactFormInputs[0].value; 
          data.email = this.contactFormInputs[1].value;
          data.phone_number = this.contactFormInputs[2].value;
          if (this.newContact) {
            //this.postNewContact();
          }
        } 
      }).bind(this));
    },

    postNewContact: function() {},
    

    makeGETRequest: function(url, respType, callback) {
      let req = new XMLHttpRequest();
      req.open('GET', url);
      req.responseType = respType;
      req.addEventListener('load', (e) => { callback(e); });
      req.send();
    },

    init: function() {
      this.contactForm = document.querySelector("form.create_edit_contact");
      this.contactFormInputs = Array.from(this.contactForm.querySelectorAll("input"));
      this.coverMe = document.querySelector("div.wipe_under");
      this.cancelButton = document.querySelector("button.cancel");
      this.addContactButton = document.querySelector("section#contacts_list button.add_contact");
      this.contactsList = document.querySelector("section#contacts_list");
      this.mainElement = document.querySelector("main");
      this.tagsElement = document.querySelector("select#tags");
      this.tags = [null];

      let contactTmpl = document.querySelector("#contact").innerHTML;
      this.contactScript = Handlebars.compile(contactTmpl);
      Handlebars.registerPartial("contact", contactTmpl);
      let contactsTmpl = document.querySelector("#contacts").innerHTML;
      this.contactsScript = Handlebars.compile(contactsTmpl);

      let tagTmpl = document.querySelector("#one_tag").innerHTML;
      this.tagScript = Handlebars.compile(tagTmpl);
      Handlebars.registerPartial("one_tag", tagTmpl);
      let tagsTmpl = document.querySelector("#all_tags").innerHTML;
      this.tagsScript = Handlebars.compile(tagsTmpl);

      this.loadAllContacts();
      this.createEventListeners();
    },
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  contactManager.init();
});