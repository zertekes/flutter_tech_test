Feature: Bet Slip

Scenario: User can add item from the Odds boost section to the Best slip
Given as a user I am on the main page
When I click an odds from the Odds boost section
Then the odds became highlighted in the Odds boost and it was added to the Bet slip section

Scenario: User can add item from the Upcoming Football section to the Best slip
Given as a user I am on the main page 
When I click an odds from the Upcoming Football section
Then the odds became highlighted in Upcoming Football and it was added to the Bet slip section

Scenario: User can remove item from the Best slip with the close X button
Given as a user I am on the main page and I have selected items in the Best slip section
When I click on the close X button
Then the odds was removed from the list and the odds is not highlighted anymore

Scenario: User can remove item from the Best slip by deselecting the Odds
Given as a user I am on the main page and I have selected items in the Best slip section
When I click on the highlighted odds 
Then the odds is not highlighted anymore and the odds was removed from the Best slip section

Scenario:  User can change the Odds formnat from Decimal to Fractional on the Settings
Given as a user I am on the Settings page
When I click on the American odds type on the Settings page
Then the American odds radio button was selected

Scenario:  User can change the Odds formnat from American to Decimal on the Settings
Given as a user I am on the Settings page
When I click on the Decimal odds type on the Settings page
Then the Decimal odds radio button was selected

