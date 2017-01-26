import {expect} from 'chai'; //assertion library
import jsdom from 'jsdom'; //browser DOM simulation in memory
import fs from 'fs'; //node file system

describe('our first test', () =>
{
	it('should pass', () =>
	{
		expect(true).to.equal(true);
	});
});

describe('index.html', () =>
{
	it('should say Hello World', (done) => //must tell mocha that the test is done because of asyncronous callback function (err,window)
	{
		const index = fs.readFileSync('./src/index.html', "utf-8");
		jsdom.env(index, function(err,window) //can optionally pass array of JS files as second parameter, but if you use fetch, it has to be isomorphic
		{
			const h1 = window.document.getElementsByTagName('h1')[0];
			expect(h1.innerHTML).to.equal("Hello World!?!");
			done();
			window.close();
		});

	});
});
