import { TestBed } from '@angular/core/testing';

import { AyudaOnlineMessageService } from './ayuda-online-message.service';

describe('AyudaOnlineMessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AyudaOnlineMessageService = TestBed.get(AyudaOnlineMessageService);
    expect(service).toBeTruthy();
  });
});
