<template>
    <tr>
        <td class="crypto-name">{{ this.coin }}</td>
        <td class="lastprice">
            {{ data.info.last ? formatPrice(data.info.last) : 0 }}
        </td>
        <td>
            {{ data.info.high ? formatPrice(data.info.high) : 0 }}
        </td>
        <td>
            {{ data.info.high ? formatPrice(data.info.low) : 0 }}
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
      const result = axios.get('https://api.bitcointrade.com.br/v2/public/BRL'+ this.coin+'/ticker')
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

