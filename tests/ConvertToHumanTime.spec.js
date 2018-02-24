import { expect } from 'chai';
import convertToHumanTime from '../src/ConvertToHumanTime';

describe('Convert to Human time', () => {


  it('should receive 0ms and convert to 0:00', () => {
    expect(convertToHumanTime(0)).to.be.equal('0:00');
  });

  it('should receive 1000ms and convert to 0:01', () => {
    expect(convertToHumanTime(1000)).to.be.equal('0:01');
  });

  it('should receive 2000ms and convert to 0:02', () => {
    expect(convertToHumanTime(2000)).to.be.equal('0:02');
  });

  it('should receive 25000ms and convert to 0:25', () => {
    expect(convertToHumanTime(25000)).to.be.equal('0:25');
  });

  it('should receive 270000ms and convert to 0:25', () => {
    expect(convertToHumanTime(270000)).to.be.equal('4:30');
  });

  it('should receive 10000ms and convert to 0:10', () => {
    expect(convertToHumanTime(10000)).to.be.equal('0:10');
  });
  it('should receive 9000ms and convert to 0:09', () => {
    expect(convertToHumanTime(9000)).to.be.equal('0:09');
  });

  it('should receive 191533 and convert to 3:12', () => {
    expect(convertToHumanTime(191533)).to.be.equal('3:12');
  });

});
