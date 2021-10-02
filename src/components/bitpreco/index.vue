<template>
  <div>
    <h2>BitPreço</h2>
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
            <Ticker coin='BTC'></Ticker>
            <Ticker coin='ETH'></Ticker>
            <Ticker coin='SOL'></Ticker>
            <Ticker coin='BNB'></Ticker>
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
