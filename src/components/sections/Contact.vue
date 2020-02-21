<template>
  <section class="block block--contact contact" id="contact">
    <div class="contact__content-wrapper content-wrapper">
      <h2 class="contact__headline headline headline--2">Kontakt</h2>

      <div class="contact__intro">
        Du hast eine Frage, oder möchtest gemeinsam etwas neues schaffen?<br />
        Dann melde dich bei mir. Ich freue mich!
      </div>

      <form 
        class="contact__form form" 
        @submit.prevent="submit()"
        name="contact" 
        method="POST" 
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >

        <input type="hidden" name="form-name" value="contact" />

        <div class="form__form-group form__form-group--hidden">
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </div>
        
        <div class="form__form-group">
          <input 
            class="form__input form__input--text" 
            :class="{
              'form__input--has-value': $v.form.name.$model,
              'form__input--has-error': errors && $v.form.name.$error && !$v.form.name.required
            }" 
            type="text" 
            v-model.trim="$v.form.name.$model">
          <label class="form__label">Name *</label>
        </div>
        
        <div class="form__form-group">
          <input 
            class="form__input form__input--text" 
            :class="{
              'form__input--has-value': $v.form.email.$model,
              'form__input--has-error': errors && $v.form.email.$error && (!$v.form.email.required || !$v.form.email.email)
            }" 
            type="text" 
            v-model.trim.lazy="$v.form.email.$model">
          <label class="form__label">Email *</label>
        </div>

        <div class="form__form-group form__form-group--last">
          <textarea 
            class="form__input form__input--textarea" 
            :class="{'form__input--has-value': $v.form.message.$model}" 
            rows="10"
            :maxlength="messageMaxChars"
            v-model.trim="$v.form.message.$model"
          ></textarea>
          <label class="form__label form__label--textarea">Nachricht</label>
          
          <div class="form__message-counter" :class="{'form__message-counter--warn': form.message.length > (messageMaxChars - 15)}">
            {{ form.message.length }} / {{ messageMaxChars }}
          </div>
        </div>

        <template v-if="errors">
          <div class="form__input-error" v-if="$v.form.email.$error && !$v.form.email.required">
            Bitte gib deine Email Adresse ein.
          </div>
          <div class="form__input-error" v-if="$v.form.email.$error && !$v.form.email.email">
            Bitte gib eine valide Email Adresse ein.
          </div>
          <div class="form__input-error" v-if="$v.form.name.$error && !$v.form.name.required">
            Bitte gib einen Namen ein.
          </div>
        </template>

        <button class="form__button" type="submit" :disabled="submitStatus === 'PENDING'">Absenden</button>
      </form>

      <div class="contact__form-status contact__form-status--error" v-if="submitStatus === 'ERROR'">
        Leider gab es einen Fehler. Bitte fülle, das Formular richtig aus und versuche es erneut. <br />
        Wenn der Fehler, danach immer noch auftritt versuche es bitte in ein paar Minuten wieder oder schreibe mir eine <a href="mailto:daniel.murth@chello.at">Email</a>. Entschuldigung für die Unannehmlichkeiten.
      </div>
      
      <div class="contact__form-status contact__form-status--pending" v-if="submitStatus === 'PENDING'">
        Deine Anfrage wird verarbeitet.
      </div>

      <div class="contact__form-status contact__form-status--ok" v-if="submitStatus === 'OK'">
        Vielen Dank für deine Nachricht. Ich werde mich so schnell wie möglich bei dir melden!
      </div>

    </div>
  </section>
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'

  export default {
    name: 'md-contact',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
        },
        messageMaxChars: 500,
        submitStatus: null,
        errors: false,
        fetchErrorMsg: ''
      }
    },
    validations: {
      form: {
        name: {
          required
        },
        email: {
          required,
          email
        },
        message: {}
      }
    },
    methods: {
      resetForm() {
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
        this.errors = false;
      },
      encode(data) {
        return Object.keys(data)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
          .join('&');
      },
      submit() {
        this.$v.$touch();
        this.errors = this.$v.$anyError;

        if (this.errors) {
          this.submitStatus = 'ERROR';

        } else {
          this.submitStatus = 'PENDING';

          fetch('/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: this.encode({
              'form-name': 'contact',
              ...this.form
            })
          })
          .then(() => {
            this.submitStatus = 'OK';
            this.resetForm();
          })
          .catch(err => {
            this.submitStatus = 'ERROR';
            this.fetchErrorMsg = err; // only for debugging
          });
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .block--contact {
    color: $color-clean;
    background-color: $color-stormy;
    padding-top: 125px;
    @media (min-width: $breakpoint-tablet) {
      padding: 150px 0 125px;
    }
  }

  .contact__content-wrapper {
    max-width: 700px;
  }

  .contact__headline {
    color: inherit;
    &::after {
      background-color: $color-clean;
    }
  }

  .contact__intro {
    color: $color-coral;
    text-align: center;
    margin-top: 35px;
  }

  .contact__form {
    width: 375px;
    padding: 0 15px;
    margin: 25px auto 0;
    @media(min-width: $breakpoint-tablet) {
      width: 500px;
      padding: 0;
    }
  }

  .form__form-group {
    position: relative;
    width: 100%;
    margin: 20px 0;
  }
  .form__form-group--last {
    margin-bottom: 0;
  }
  .form__form-group--hidden {
    display: none;
  }

  .form__input {
    width: 100%;
    padding: 10px;
    border: 2px solid $color-clean;
    border-radius: 5px;
    font-family: $font-work-sans-regular;
    font-size: inherit;
    color: inherit;
    background-color: lighten($color-stormy, 20%);
    transition: border .25s ease-in-out;

    &:focus {
      outline: none;
      border: 2px solid darken($color-clean, 35%);
    }
  }
  .form__input--has-error,
  .form__input--has-error:focus {
    border-color: darken($color-coral, 10%);
  }

  .form__input--textarea {
    resize: none;
  }

  .form__message-counter {
    font-size: 12px;
    color: inherit;
    text-align: center;
    transform: translateY(-7px);
    transition: color .25s ease-in-out;
    @media(min-width: $breakpoint-tablet) {
      text-align: right;
    }
  }

  .form__message-counter--warn {
    color: $color-coral;
  }

  .form__label {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    font-size: inherit;
    pointer-events: none;
    background-color: transparent;
    color: inherit;
    transition: all .25s ease-in-out;
  }

  .form__label--textarea {
    transform: translateY(-100%);
  }
  
  .form__input--has-value ~.form__label,
  .form__input:focus ~.form__label {
    top: 0;
    font-size: 13px;
    padding: 0 5px 0 10px;
    text-shadow: 1px 1px 4px $color-black;
    background: linear-gradient(
                  180deg,
                  transparent 50%, 
                  lighten($color-stormy, 20%) 50%
                );
    color: $color-white;
  }
  
  .form__input--has-error ~.form__label,
  .form__input--has-error:focus ~.form__label,
  .form__input-error {
    color: darken($color-coral, 10%);
  }

  .form__input--has-value ~.form__label--textarea,
  .form__input:focus ~.form__label--textarea {
    padding: 0 10px;
    transform: translateY(-50%);
  }


  .form__button {
    display: block;
    margin: 0 auto;
    padding: 12px 30px;
    border: 2px solid $color-clean;
    background-color: transparent;
    color: inherit;
    font-size: inherit;
    cursor: pointer;
    transition: background-color .25s ease-in-out,
                border .25s ease-in-out;
    
    @media(min-width: $breakpoint-tablet) {
      margin: 0 0 0 auto;
    }

    &:hover {
      background-color: $color-coral;
      border-color: $color-coral;
    }
  }

  .contact__form-status {
    margin-top: 25px;
    text-align: center;
  }
</style>