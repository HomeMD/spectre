const request = require('request');
const fs = require('fs');

const URL = 'http://localhost:3000';
const file = "/Users/bhugo/Desktop/1_test.png";

describe('Spectre', () => {
    it('adds a new project-suite and uploads a file', async () => {

        await request.post('http://localhost:3000/runs',{form:{
                project: "test project from jest1",
                suite: "test suite in jest1"
        }},
            function(err, httpResponse, body) {
                console.log(err, body);
            }
        );

        await request.post('http://localhost:3000/tests',{form:{
            test: {
            run_id: 1,
            name: 'Homepage',
            platform: 'OSX',
            browser: 'PhantomJS',
            size: 1024,
            screenshot: fs.readFileSync(file),
            crop_area: '640x480+50+100'
            }
        }},
            function(err, httpResponse, body) {
                console.log(err, body, httpResponse);
                console.log(httpResponse);
            }
        );
    });
});