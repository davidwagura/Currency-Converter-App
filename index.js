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
              this.result =  Math.ceil(this.amountToConvert * 132.27);
        }
        if(this.currencyTo === 'UG'){
            this.result =  Math.ceil(this.amountToConvert * 3768);
        }
        if(this.currencyTo === 'TZ'){
            this.result =  Math.ceil(this.amountToConvert * 2339);
        }
      }
      else if(this.currencyFrom === 'KSH') {
          if(this.currencyTo === 'USD'){
            this.result =  Math.ceil(this.amountToConvert * 0.0075);
        }
          if(this.currencyTo === 'UG'){
            this.result =  Math.ceil(this.amountToConvert * 29);
        }
          if(this.currencyTo === 'TZ'){
            this.result =  Math.ceil(this.amountToConvert * 18);
        }
      }
      else if(this.currencyFrom === 'TZ') {
          if(this.currencyTo === 'KSH'){
              this.result =  Math.ceil(this.amountToConvert * 0.057);
        }
          if(this.currencyTo === 'UG'){
            this.result = Math.ceil(this.amountToConvert * 2);
        }
          if(this.currencyTo === 'USD'){
            this.result = Math.ceil(this.amountToConvert * 0.00043);
        }
      }
      else if(this.currencyFrom === 'UG') {
          if(this.currencyTo === 'KSH'){
              this.result = Math.ceil(this.amountToConvert * 0.035);
        }
          if(this.currencyTo === 'TZ'){
            this.result = Math.ceil(this.amountToConvert * 0.6);
        }
          if(this.currencyTo === 'USD'){
            this.result = Math.ceil(this.amountToConvert * 0.00026);
        }
      }

      this.showResults = true;
    }
  }
})
