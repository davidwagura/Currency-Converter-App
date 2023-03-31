new Vue ({
  el: '#app',

  data: {
    amountToConvert: 0,
    currencyFrom: '',
    currencyTo: '',
    result: 0,
    showResults: false
  },

  computed: {},

  methods: {
    convert() {
      if(this.currencyFrom === 'USD') {
        if(this.currencyTo === 'KSH') {
              this.result = this.amountToConvert * 132.27;
        }
        if(this.currencyTo === 'UG'){
            this.result = this.amountToConvert * 3768;
        }
        if(this.currencyTo === 'TZ'){
            this.result = this.amountToConvert * 2339;
        }
      }
      else if(this.currencyFrom === 'KSH') {
          if(this.currencyTo === 'USD'){
            this.result = this.amountToConvert * 0.00076;
        }
          if(this.currencyTo === 'UG'){
            this.result = this.amountToConvert * 29;
        }
          if(this.currencyTo === 'TZ'){
            this.result = this.amountToConvert * 18;
        }
      }
      else if(this.currencyFrom === 'TZ') {
          if(currencyTo === 'KSH'){
              this.result = this.amountToConvert * 0.057;
        }
          if(currencyTo === 'UG'){
            this.result = this.amountToConvert * 2;
        }
          if(currencyTo === 'USD'){
            this.result = this.amountToConvert * 0.00043;
        }
      }
      else if(this.currencyFrom === 'UG') {
          if(currencyTo === 'KSH'){
              this.result = this.amountToConvert * 0.035;
        }
          if(currencyTo === 'TZ'){
            this.result = this.amountToConvert * 0.6;
        }
          if(currencyTo === 'USD'){
            this.result = this.amountToConvert * 0.00026;
        }
      }

      this.showResults = true;
    }
  }
})
