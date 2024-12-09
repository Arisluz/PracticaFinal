const { JSDOM } = require('jsdom');
const fs = require('fs');

test('la página debe contener un título "Hola, mundo!"', () => {
    const html = fs.readFileSync('./index.html', 'utf8');
    const { document } = new JSDOM(html).window;
    const h1 = document.querySelector('h1');
    expect(h1.textContent).toBe('Hola, mundo!');
});
