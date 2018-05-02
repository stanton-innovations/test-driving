Add stryker

1. test for the service first
2. fix the service
3. show json on page
4. e2e
style page
show 1 item from the list
show all item in the list
```
### Pokemon Listing Feature
```
Feature: View List of Pokemon

  Scenario: MonChoCho opens the Pokemon app to see some Pokemon and details
    Given MonChoCho views a list of Pokemon
    When MonChoCho selects a Pokemon from the list
    Then MonChoCho should see the details of the selected Pokemon
```

#### Acceptance Criteria
```
Module(s) 
  Pokemon Module
Containers - containers are components (compose multiple components into a module)
  Pokemon app Container
Components
  Pokemon list
  Pokemon details
Services
  Pokemon get from api
```
#### API
```
list of characters
/api/characters

character details
/api/characters/1
```
