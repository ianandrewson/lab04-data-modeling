const Synth = require('./SynthModel');

describe('SynthModel test', () => {
  it('should have an amplifier', () => {
    const synth = new Synth({
    });
    const { errors } = synth.validateSync();
    expect(errors.amp.message).toEqual('Path `amp` is required.');
  });
  it('should have at least one amplifier', () =>{
    const synth = new Synth({
      amp: 0
    });
    const { errors } = synth.validateSync();
    expect(errors.amp.message).toEqual('Path `amp` (0) is less than minimum required value (1).');
  });
  it('should have at least one oscillator', () => {
    const synth = new Synth({
      amp: 1,
      oscillators: 0
    });
    const { errors } = synth.validateSync();
    expect(errors.oscillators.message).toEqual('Path `oscillators` (0) is less than required value (1).');
  });
  it('should have power', () => {
    const synth = new Synth({
      amp: 2,
      oscillators: 4,
      power: false
    });
    const { errors } = synth.validateSync();
    expect(errors.power.message).toEqual('`false` is not a valid enum value for path `power`.')
  });
});
