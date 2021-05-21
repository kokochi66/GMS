const assert = require('assert');
const expect  = require("chai").expect;
const request = require('request');

const url = 'http://localhost:3000/'

describe('GET /', () => {
    it('정상적인 메인화면 출력', () => {
        request(`${url}`, (err,res,body) => {
            expect(res.statusCode).to.equal(200)
        })
    })
});