<template>
    <div>
        <div id="exchanges">
            <NovaDAX />
            <Mercadobitcoin />
            <Foxbit />
            <BitPreco />
            <CoinNext />
            <BitcoinTrade />
        </div>
    </div>
</template>
<script>

import NovaDAX from './novadax/index.vue'
import Mercadobitcoin from './mercadobitcoin/index.vue'
import Foxbit from './foxbit/index.vue'
import BitPreco from './bitpreco/index.vue'
import CoinNext from './nextcoin/index.vue'
import BitcoinTrade from './bitcointrade/index.vue'

export default { 
    components: {
        NovaDAX,
        Mercadobitcoin, 
        Foxbit, 
        BitPreco,
        CoinNext,
        BitcoinTrade,
    }
}
</script>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
    font-family: Courier
}

body {
    background: black
}
.header {
    width: 100%;
    height: 20px;
    background: black;
    margin-bottom: 10px;
    color: #fff;
    padding: 5px;
}
#exchanges {
    min-width: 300px;
    padding: 10px;

    h2 {
        color: #ff9900;
        font-size: small;
    }
}    

table {
    th {
        color: yellow;
    }

    tbody {
        color: #fff
    }

    tr {
        text-align: left;
    } 

    .crypto-name {
        font-weight: bold
    }

    .fall,
    .percent {
        color: red !important;
    }

    .lastprice { color: #02f902 }
    .positive { color: #02f902 }

    .buy { color: #02f902 }
}

.t-center {
    text-align: center
}

</style>
