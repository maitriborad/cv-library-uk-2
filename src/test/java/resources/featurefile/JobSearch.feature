Feature: Job Search Test
  As a User I can search jobs using filters

  @smoke @regression
  Scenario Outline: User can search job using different filters
    Given I am homepage
    When I enter role in "<jobTitle>"
    And I enter job "<location>"
    And I select "<distance>"
    And I click on more search options
    And I enter minimum salary "<minSalary>"
    And I enter maximum salary "<maxSalary>"
    And I select salary "<salType>"
    And I select job "<jobType>"
    And I click on find jobs button
    Then Verify that "<message>" is displayed
    Examples:
    |     jobTitle    |    location         |distance|minSalary|maxSalary| salType | jobType |     message                                 |
    |      Tester     |Harrow,Greater London|5 miles |  30000  |  50000  |Per annum|Permanent|Permanent Tester jobs in Harrow              |
    |   Test manager  |      London         |50 miles|   3000  |  5000   |Per month|Contract |Contract Test Manager jobs in London         |
    |Business analyst |     Birmingham      |5 miles |    20   |   50    |Per hour |Temporary|Temporary Business Analyst jobs in Birmingham|
    |Quality Assurance|    United Kingdom   |75 miles|  2000   |  6000   |Per month|Permanent|Permanent Quality Assurance jobs             |
    |  Scrum Master   |      London         |7 miles |  45000  |  60000  |Per annum|Permanent|Permanent Scrum Master jobs in London        |
    |     Tester      |     Manchester      |25 miles|  2000   |  5000   |Per month|Contract |Contract Tester jobs in Manchester           |