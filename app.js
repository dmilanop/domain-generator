let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io'];

function domainGenerator() {

    for (var i = 0; i < pronoun.length; i++) {
        for (var j = 0; j < adj.length; j++) {
            for (var e = 0; e < noun.length; e++) {
                for (var o = 0; o < extensions.length; o++) {
                    console.log(pronoun[i] + adj[j] + noun[e] + extensions[o])
                };
            };
        };
    };

};

console.log(domainGenerator(pronoun , adj , noun , extensions))