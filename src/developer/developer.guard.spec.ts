import { DeveloperGuard } from './developer.guard';

describe('DeveloperGuard', () => {
  it('should be defined', () => {
    expect(new DeveloperGuard()).toBeDefined();
  });
});
