import { TestBed, inject } from '@angular/core/testing';

import { PanierService } from './panier.service';

describe('PanierService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanierService]
    });
  });

  it('should ...', inject([PanierService], (service: PanierService) => {
    expect(service).toBeTruthy();
  }));
});
