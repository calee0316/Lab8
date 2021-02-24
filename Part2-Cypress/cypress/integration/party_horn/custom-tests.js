describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume changes', () => {
    cy.get('#volume-number').clear().type('75')
    cy.get('#volume-slider').then($el => {
      expect($el).to.have.value(75)
    })
  })

  it('Number changes when slider volume changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input')
    cy.get('#volume-number').then($el => {
      expect($el).to.have.value(33)
    })
  })

  it('audio volume changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input')
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.prop('volume', 0.33)
    })
  })

  it('Image & Sound changes when party horn clicked', () => {
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });

  //volume image changes when increasing volume, for number input
  it('volume image change for mute to level 1, number input', () => {
    cy.get('#volume-number').clear().type('0')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
    cy.get('#volume-number').clear().type('1')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  })
  

  it('volume image change for level 1 to 2, number input', () => {
    cy.get('#volume-number').clear().type('1')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
    cy.get('#volume-number').clear().type('34')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  })
  
  it('volume image change for level 2 to level 3, number input', () => {
    cy.get('#volume-number').clear().type('34')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
    cy.get('#volume-number').clear().type('75')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  })

  //volume image changes when increasing volume, for slider
  it('volume image change for mute to level 1, slider input', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
    cy.get('#volume-slider')
      .invoke('val', 1)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  })
  

  it('volume image change for level 1 to 2, slider input', () => {
    cy.get('#volume-slider').invoke('val', 1).trigger('input')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
    cy.get('#volume-slider')
      .invoke('val', 34)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  })
  
  it('volume image change for level 2 to level 3, slider input', () => {
    cy.get('#volume-slider').invoke('val', 34).trigger('input')
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
    cy.get('#volume-slider')
      .invoke('val', 67)
      .trigger('input');
    cy.get('#volume-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  })

  it('honk button disabled when volume input is a zero', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input')
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled')
    })
  })

  it('honk button disabled when volume input is non-number', ()=>{
    cy.get('#volume-number').invoke('val', 'e').trigger('input')
    cy.get('#honk-btn').then($el => {
      expect($el).to.have.attr('disabled')
    })
  })

  it('check for error when clicking honk when value not in range', ()=>{
    cy.get('#volume-number').invoke('val', 150).trigger('input')
    cy.get('#honk-btn').click()
    cy.get('input:invalid').should('have.length', 1)

  })
});