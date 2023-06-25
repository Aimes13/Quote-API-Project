const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement, getQuoteIndex } = require('./utils');
const { createElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
app.listen(PORT, () => {
    console.log(`Listening at server port ${4001}.`);
});

app.get('/api/quotes/random', (req,res,next) => {
    const randomElement = getRandomElement(quotes);
    const randomQuote = { quote: randomElement}
    res.send(randomQuote);
});

app.get('/api/quotes', (req,res,next) => {
    const person = req.query.person;
    const quoteIndex = quotes.filter(quotes => quotes.person === req.query.person);
    if (person) {
        if(quoteIndex !== undefined) {
            res.send({quotes: quoteIndex});
        } else {
            res.send({quotes: []});
        } 
    } else {
        res.send({quotes: quotes});
    }
});

app.post('/api/quotes', (req,res,next) => {
    const newQuote = {
        quote: req.query.quote,
        person: req.query.person
    };
    if(newQuote.quote && newQuote.person) {
        quotes.push(newQuote);
        res.send({ quote: newQuote });
    } else {
        res.status(400).send();
    }
});