<template>
    <tr>
        <td class="crypto-name">{{ this.symbol ? this.symbol : '' }}</td>
        <td class="lastprice">
            {{ data.info.LastTradedPx ? formatPrice(data.info.LastTradedPx) : 0 }}
        </td>
        <td>
            {{ data.info.SessionHigh ? formatPrice(data.info.SessionHigh) : 0 }}
        </td>
        <td>
            {{ data.info.SessionHigh ? formatPrice(data.info.SessionLow) : 0 }}
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
            symbol: '', 
            fall: false,
            info: {},
        } 
    } 
  },

  created: function () {
      this.fetchData()
  },

  methods: {
    fetchData: function() {
      const self = this;
      const socket = new WebSocket('wss://api.foxbit.com.br/WSGateway/');

      const coin = {
        "OMSId": 1,
        "InstrumentId": this.coin
      } 
      var messageFrame = {
        "m":0,		//MessageType ( 0_Request / 1_Reply / 2_Subscribe / 3_Event / 4_Unsubscribe / Error )
        "i":0,		//Sequence Number
        "n":"SubscribeLevel1",		//Function Name
        "o": JSON.stringify(coin)		//Payload
      };
      socket.addEventListener('open', function (event) {
        socket.send(JSON.stringify(messageFrame));      
      });
      socket.addEventListener('message', function (event) {
        const response = JSON.parse(event.data);
        const info = JSON.parse(response.o)
        self.data.info = info
      });
    },

    formatPrice(value) {
      let val = (value/1).toFixed(2).replace('.', ',')
      return 'R$'+ val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  }
} 
</script>

