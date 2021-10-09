<template>
    <tr>
        <td class="crypto-name">{{ this.symbol }}</td>
        <td class="lastprice">
            {{ data.info.last ? formatPrice(data.info.last) : 0 }}
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
  props: ['coin', 'symbol'], 

  data: function () {
    return { 
        data: {
            coin: '', 
            fall: false,
            info: {},
            symbol: '',
            count: 0,
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
      const now = new Date();
      const result = axios.post('https://still-headland-84996.herokuapp.com/https://api.coinext.com.br:8443/AP/GetTickerHistory', {
          "InstrumentId": self.coin,
          "OMSId": 1,
          "Interval": 3600,
          "FromDate": new Date(now.getTime() - 86400000).toLocaleDateString('en-CA'),
          "ToDate": now.toLocaleDateString('en-CA')
        })
        .then(function(response) {
          const data = response.data[response.data.length - 1];
          const info = {
            high: data[1],
            low: data[2],
            last: data[4],
          }
          self.data.info = info;
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