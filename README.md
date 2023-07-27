# @tradezon/cex

Curated list of CEX addresses

# Usage

```ts
import { cex } from '@tradezon/cex';
let cexName = cex('0x75e89d5979E4f6Fba9F97c104c2F0AFB3F1dcB88');
console.log(cexName);
// will print mexc
cexName = cex('0x75e89d5979E4f6Fba9F97c104c2F0AFB3F1dcB11');
console.log(cexName);
// will print null
```

**NOTE: address argument is case sensitive**

# Supported CEX

- mexc
- bybit
- poloniex
- okx
- kucoin
- kraken
- korbit
- huobi
- gemini
- gate.io
- ftx
- crypto.com
- coinbit
- coinone
- coinbase
- bittrex
- bitstamp
- bitmex
- bithumb
- bitfinex
- binance

