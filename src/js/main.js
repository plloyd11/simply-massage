const form = new Vue({
    el: "#contactForm",
    data: {
      errors: [],
      name: null,
      email: null,
      movie: null
    },
    methods: {
      checkForm: function(e) {
        this.errors = [];
        if (!this.name) this.errors.push("Name required.");
        if (!this.email) {
          this.errors.push("Email required.");
        } else if (!this.validEmail(this.email)) {
          this.errors.push("Valid email required.");
        }
        if (!this.errors.length) return true;
        e.preventDefault();
      },
      validEmail: function(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    }
  });