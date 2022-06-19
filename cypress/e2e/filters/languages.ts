import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('I filter by a language', () => {
  cy.findByText('Filters').click()
  cy.findAllByText('Fake language 1').should('have.length', 2)
  cy.findAllByText('Fake language 2').should('have.length', 2)
  cy.findAllByText('Fake language 3').should('have.length', 2)

  cy.findAllByText('Fake language 2').eq(0).click()
})

Then('I only see the repo written in the language', () => {
  cy.findByText('Fake name 1').should('not.exist')
  cy.findByText('Fake name 2').should('exist')
  cy.findByText('Fake name 3').should('not.exist')
})

When('I filter by 2 languages', () => {
  cy.findByText('Filters').click()
  cy.findAllByText('Fake language 2').eq(0).click()
  cy.findAllByText('Fake language 3').eq(0).click()
})

When('I filter by favourites and a language', () => {
  cy.findByText('Filters').click()
  cy.findByText('Favourites').click()
  cy.findAllByText('Fake language 2').eq(0).click()
})

Then('I only see the repos written in the languages', () => {
  cy.findByText('Fake name 1').should('not.exist')
  cy.findByText('Fake name 2').should('exist')
  cy.findByText('Fake name 3').should('exist')
})

Then('I only see the favourited repos and the repo written in the language', () => {
  cy.findByText('Fake name 1').should('exist')
  cy.findByText('Fake name 2').should('exist')
  cy.findByText('Fake name 3').should('not.exist')
})
