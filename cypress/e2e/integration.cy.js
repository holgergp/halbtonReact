const selectEWith3Offset = () => {
  const selectRootNote = '[class*="tuner--rootNote"]';
  cy.get(selectRootNote).select('E');
  const selectOffset = '[class*="tuner--offset"]';
  const offset = '3';
  cy.get(selectOffset).type(`{selectall}{backspace}${offset}`);
};

describe('Tuner works', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Select Offsetnote', () => {
    selectEWith3Offset();

    const selectOffsetNote = '[class*="display"]';
    return cy.get(selectOffsetNote).should('contain', 'G');
  });
});

describe('Fretboard works', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Select Rootnote and Offsetnote', () => {
    selectEWith3Offset();
    cy.get('[class*="fret_note__root"]').should('have.length', 14);
    cy.get('[class*="fret_note__offset"]').should('have.length', 13);
  });
});
