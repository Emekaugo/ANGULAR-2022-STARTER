import { TestBed } from '@angular/core/testing';

import { ZResolverResolver } from './z-resolver.resolver';

describe('ZResolverResolver', () => {
  let resolver: ZResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ZResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
