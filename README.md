# Guardian Recovery

#### This PoC is an implementation based on [Shamir's secret sharing](https://en.wikipedia.org/wiki/Shamir%27s_Secret_Sharing) which uses secret.js library.

## Installation
```
npm install --save guardian-recovery
```

## Import
```
const GR = require('guardian-recovery');

const guardianRecovery = new GR();
```

## Functions

#### Create Shards
```
const shards = guardianRecovery.createShards(input, m, n);
```

* input - The data to be sharded
* m - The number of shards
* n - Threshold shards to be recovered

`input should be in a string format.`

#### Recover Data
```
const data = guardianRecovery.recoverData(shards);
```

* shards - The minimum number of shards or more in an array

#### String to Hex
```
const hex = guardianRecovery.str2hex(input);
```

* input - Input in string

#### Hex to String
```
const string = guardianRecovery.hex2str(input);
```

* input - Input in hex
