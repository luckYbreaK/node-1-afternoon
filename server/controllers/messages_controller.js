let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body;
        let message = {
            id: id++,
            text: text,
            time: time
        };
        messages.push(message);
        res.send(messages);
    },
    read: (req, res) => {
        return res.send(messages);
    },
    update: (req, res) => {
        let index;
        messages.forEach( (message, i) => {
            if(message.id == req.params.id) {
                index = i;
            }
        });
        
        const { text } = req.body;
        messages[index] = {
            id: index,
            text: text || messages[index].text,
            time: messages[index].time
        };
        res.send(messages);
    },
    delete: (req, res) => {
        let index;
        messages.forEach( (message, i) => {
            if(message.id == req.params.id) {
                index = i;
            }
        });
        messages.splice(index, 1);
        return res.send(messages);
    }
}
