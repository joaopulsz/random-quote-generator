const quoteGeneratorBtn = document.querySelector('#quote-generator-btn');
const main = document.querySelector('main');

const implementQuote = (quote, author) => {
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

quoteGeneratorBtn.addEventListener('click', () => {
    // const res = await fetch();
    // const quoteData = await res.json();

    const quote = 'Lorem yadayada yada yadayada yada yadayadayada yada yada yadayada'; //quoteData.quote;
    const author = 'Mr Gao'; //quoteData.author;

    implementQuote(quote, author);
});