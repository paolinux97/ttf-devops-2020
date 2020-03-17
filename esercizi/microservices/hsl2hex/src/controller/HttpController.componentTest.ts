import chai from 'chai';
import chaiHttp from 'chai-http';
import * as config from '../../server-config.json'
import {hsl2hexTestData} from '../../../commons/src/test-data/colors'

chai.config.includeStack = true;
const should = chai.should();
chai.use(chaiHttp);

describe('REST API test suite description', () => {
    const url = process.env.npm_config_rgb2hex_test_url || `http://localhost:${config.port}`;
    console.log('Test URL: ' + url);

    hsl2hexTestData.forEach((test) => {
        it(`test case description`, (done) => {
            chai.request(url)
                .get('/')
                .query(`color=${JSON.stringify(test.hslValue)}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.deep.equal(test.hexValue);
                    done();
                });
        });
    });
});
