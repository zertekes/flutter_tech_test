/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

// Scenario: User can add item from the Odds boost section to the Best slip

Given("as a user I am on the main page", () => {
    cy.visit('https://www.pokerstarssports.uk/')
    cy.get('#onetrust-accept-btn-handler').click()
});

When("I click an odds from the Odds boost section",() => {
   cy.get(':nth-child(2) > [data-testid="market-template-list"] > :nth-child(1)  [data-testid="selection"]').click()
 });
Then("the odds became highlighted in the Odds boost and it was added to the Bet slip section", () => {
    cy.get(':nth-child(2) > [data-testid="market-template-list"] > :nth-child(1) [data-testid="selection"]').should('have.attr', 'aria-pressed', 'true')
    cy.get('[data-testid="bet-slip-opportunity"]').should('be.visible')
});

// Scenario: User can add item from the Upcoming Football section to the Best slip 
// NOTE: It needs to be set up the testing data for testing.

When("I click an odds from the Upcoming Football section", () => {
    cy.get('[data-testid="sports-upcoming-events-widget"]').scrollIntoView()
    cy.get('[data-testid="sports-upcoming-events-widget"] [data-testid="event"] [data-testid="selection"]').first().click()
    
});

Then("the odds became highlighted in Upcoming Football and it was added to the Bet slip section", () => {
    cy.get('[data-testid="sports-upcoming-events-widget"] [data-testid="event"] [data-testid="selection"]').first().should('have.attr', 'aria-pressed', 'true')
    cy.get('[data-testid="bet-slip-opportunity"]').should('be.visible')
})

// Scenario: User can remove item from the Best slip with the close X button

Given("as a user I am on the main page and I have selected items in the Best slip section", () => {
    cy.visit('https://www.pokerstarssports.uk/')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.get(':nth-child(2) > [data-testid="market-template-list"] > :nth-child(1)  [data-testid="selection"]').click()

});

When("I click on the close X button", () => {
    cy.get('[title="Remove"]').click()
});

Then("the odds was removed from the list and the odds is not highlighted anymore", () => {
    cy.get('[data-testid="bet-slip-opportunity"]').should('not.exist')
    cy.get(':nth-child(2) > [data-testid="market-template-list"] > :nth-child(1) [data-testid="selection"]').should('have.attr', 'aria-pressed', 'false')
});

// Scenario: User can remove item from the Best slip by deselecting the Odds

When("I click on the highlighted odds", () => {
    cy.get(':nth-child(2) > [data-testid="market-template-list"] > :nth-child(1)  [data-testid="selection"]').click()
});

Then("the odds is not highlighted anymore and the odds was removed from the Best slip section", () => {
    cy.get('[data-testid="bet-slip-opportunity"]').should('not.exist')
    cy.get(':nth-child(2) > [data-testid="market-template-list"] > :nth-child(1) [data-testid="selection"]').should('have.attr', 'aria-pressed', 'false')
});

// Scenario:  User can change the Odds formnat from Decimal to Fractional on the Settings

Given("as a user I am on the Settings page", () => {
    cy.visit('https://www.pokerstarssports.uk/')
    cy.get('#onetrust-accept-btn-handler').click()
    cy.contains("Settings").click()
});

When("I click on the American odds type on the Settings page", () => {
    cy.get('[aria-label="Odds Type"] :nth-child(3)').click()

    // Unfortunately I could not get over the --Failed to execute 'postMessage' on 'Window': Invalid target origin '' -- error
});

Then("the American odds radio button was selected", () => {
    cy.get('[aria-label="Odds Type"] :nth-child(3)').should('have.attr', 'tabindex', '0')
});

// TODO check that the right odds format was displayed on the Home page

// Scenario:  User can change the Odds formnat from American to Decimal on the Settings

Given("as a user I am on the Settings page", () => {
    cy.visit('https://www.pokerstars.uk/sports/settings/')

});

When("I click on the Decimal odds type on the Settings page", () => {
    cy.get('[aria-label="Odds Type"] :nth-child(2)').click()

    // Unfortunately I could not get over the --Failed to execute 'postMessage' on 'Window': Invalid target origin '' -- error
});

Then("the Decimal odds radio button was selected", () => {
    cy.get('[aria-label="Odds Type"] :nth-child(2)').should('have.attr', 'tabindex', '0')
});

