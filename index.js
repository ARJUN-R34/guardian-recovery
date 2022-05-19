const secrets = require('secrets.js');

class GuardianRecovery {
    
    createShards(input, m, n) {
        if (typeof input !== 'string') {
            throw 'Please pass the input as string';
        }

        var hex = secrets.str2hex(input);

        // split into m shares with a threshold of n
        const shares = secrets.share(hex, m, n);
        
        return shares;
    }

    recoverData(shards) {
        const data = secrets.combine(shards);
        
        return data;
    }

    str2hex(input) {
        const hex = secrets.str2hex(input);
        
        return hex;
    }

    hex2str(input) {
        const str = secrets.hex2str(input);
        
        return str;
    }

}

module.exports = GuardianRecovery;