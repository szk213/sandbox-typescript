import { Sample } from '../src/Sample';
import * as assert from 'power-assert';

describe('SampleTest', () => {
    it('コンストラクタのテスト', () => {
        const sample:Sample = new Sample(10, 'test');
        assert.equal(sample.Id, 15);
        assert.equal(sample.Name, 'test');
    });
});
