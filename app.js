const quoteGeneratorBtn = document.querySelector('#quote-generator-btn');
const main = document.querySelector('main');

const implementQuote = (quote, author) => {
    quoteGeneratorBtn.disabled = true;
    quoteGeneratorBtn.innerText = 'Come back tomorrow for more!';

    const quoteContainer = document.createElement('div');
    quoteContainer.setAttribute('class', 'quote-container');

    main.append(quoteContainer);

    const quoteP = document.createElement('p');
    quoteP.setAttribute('class', 'quote');
    quoteP.innerText = quote;

    quoteContainer.append(quoteP);

    const authorP = document.createElement('p');
    authorP.setAttribute('class', 'author');
    authorP.innerText = author;

    quoteContainer.append(authorP);
}

quoteGeneratorBtn.addEventListener('click', async () => {
    const res = await fetch(`https://quotes.rest/qod`);
    const quoteData = await res.json();

    const quote = quoteData.contents.quotes[0].quote;
    const author = quoteData.contents.quotes[0].author;

    implementQuote(quote, author);
});