import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('should display weak if strength is 5', () => {
    const strengthPipe = new StrengthPipe();
    expect(strengthPipe.transform(5)).toEqual('5 (weak)');
  });

  it('should display strong if strength is 10', () => {
    const strengthPipe = new StrengthPipe();
    expect(strengthPipe.transform(10)).toEqual('10 (strong)');
  });

  it('should display unbelievable if strength is 25', () => {
    const strengthPipe = new StrengthPipe();
    expect(strengthPipe.transform(25)).toEqual('25 (unbelievable)');
  });
});
