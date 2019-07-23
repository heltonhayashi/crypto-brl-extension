<template>
    <tr>
        <td class="crypto-name">BTC</td>
        <td class="lastprice">
            {{ data.info.buy ? formatPrice(data.info.buy) : 0 }}
        </td>
        <td>
            {{ data.info.high ? formatPrice(data.info.high) : 0 }}
        </td>
        <td>
            {{ data.info.low ? formatPrice(data.info.low) : 0 }}
        </td>
    </tr>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return { 
        data: {
          fall: false, 
          info: {},
        } 
    } 
  },

  created: function () {
    this.fetchData()
  },

  beforeDestroy: function () {
      this.data = {}
  }, 

  methods: {
    fetchData: function() {
      const self = this;
      const result = axios.get('https://cors-anywhere.herokuapp.com/https://api.pitaiatrade.com/v1/ticker')
        .then(function(response) {
          self.data.info = response.data.ticker;
        })
        .catch(function(error) {
          console.log(error)
        });
    },

    formatPrice(value) {
      let val = (value/1).toFixed(2).replace('.', ',')
      return 'R$'+ val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  }
} 
</script>

