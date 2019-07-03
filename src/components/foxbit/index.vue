<template>
  <div>
    <h2>FoxBit</h2>
    <table cellspacing="10" cellpadding="10">
        <thead>
            <tr>
                <th>Moeda</th>
                <th>Ultimo</th>
                <th>Maior</th>
                <th>Menor</th>
            </tr>
        </thead>
        <tbody>
            <Ticker symbol="BTC" coin='1'></Ticker>
            <Ticker symbol="ETH" coin='4'></Ticker>
            <Ticker symbol="LTC" coin='2'></Ticker>
        </tbody>
    </table>
  </div>
</template>

<script>

import Ticker from './ticker.vue'

export default {
  components: {
    Ticker,
  }
}
</script>
