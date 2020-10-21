import tmi from 'tmi.js';

const options = {
    identity: {
        username: 'hazzalia',
        password: 'oauth:ngxuzm8s1nx80vavah42gun70vhr07'
    },
    channels: [
        'hazzalia'
    ]
}

const client = new tmi.client(options);

client.on('connected', (address, port)=>{
    client.say(options.channels[0], `Holi`);
    console.log(`Bot listening at: ${address}:${port}`);
});

client.on('message', (target, context, msg, self)=>{
    if(msg === 'ping'){
        client.say(target, 'pong');
    }
});

client.connect();