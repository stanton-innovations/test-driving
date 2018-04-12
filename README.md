## Pokemon Epic
```
Epic: Pokemon Crud Module
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
