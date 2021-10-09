<template>
    <tr>
        <td class="crypto-name">{{ this.coin }}</td>
        <td class="lastprice">
            {{ data.info.lastPrice ? formatPrice(data.info.lastPrice) : 0 }}
        </td>
        <td>
            {{ data.info.high24h ? formatPrice(data.info.high24h) : 0 }}
        </td>
        <td>
            {{ data.info.low24h ? formatPrice(data.info.low24h) : 0 }}
        </td>
    </tr>
</template>

<script>
import axios from 'axios'

export default {
  props: ['coin'], 

  data: function () {
    return { 
        data: {
          coin: '', 
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
      const result = axios.get('https://still-headland-84996.herokuapp.com/https://api.novadax.com/v1/market/ticker?symbol='+this.coin+'_BRL', {
        headers: {
          'X-Requested-With': null,
        }})
        .then(function(response) {
          self.data.info = response.data.data;
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

