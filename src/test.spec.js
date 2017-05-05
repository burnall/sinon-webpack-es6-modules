import * as all from './index';
import {foo, bar, aa, obj} from './index';
import {stub} from 'sinon';

describe('try sinon / ', () => {

    beforeEach(() => {
        stub(all, 'foo').returns(1000);
        stub(all, 'bar').returns(1001);
        stub(all, 'aa').returns('aab');
        stub(obj, 'f').returns(999);
    });

    afterEach(() => {
        all.foo.restore && all.foo.restore();
        all.bar.restore && all.bar.restore();
        all.aa.restore && all.aa.restore();
        obj.f.restore && obj.f.restore();
    });

    it('stub for export function', () => expect(foo()).to.equal(1000));
    it('stub for export const = func', () => expect(bar()).to.equal(1001)); // Failing
    it('stub for export {func}', () => expect(aa()).to.equal('aab')); // Failing
    it('stub for export object with function', () => expect(obj.f()).to.equal(999));
});
