describe('Tuner works', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    it('Select Offsetnote', () => {
      const selectRootNote = '[class*="tuner--rootNote"]';
      cy
        .get(selectRootNote)
        .select('E');
      const selectOffset = '[class*="tuner--offset"]';
      const offset = '3';
      cy
        .get(selectOffset)
        .type(`{selectall}{backspace}${offset}`);

    const selectOffsetNote = '[class*="display"]';
    return cy.get(selectOffsetNote).should('contain', 'G');
    });
  });