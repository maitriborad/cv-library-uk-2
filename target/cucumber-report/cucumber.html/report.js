$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("JobSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search Test",
  "description": "As a User I can search jobs using filters",
  "id": "job-search-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User can search job using different filters",
  "description": "",
  "id": "job-search-test;user-can-search-job-using-different-filters",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter role in \"\u003cjobTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter minimum salary \"\u003cminSalary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter maximum salary \"\u003cmaxSalary\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary \"\u003csalType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify that \"\u003cmessage\u003e\" is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "job-search-test;user-can-search-job-using-different-filters;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "minSalary",
        "maxSalary",
        "salType",
        "jobType",
        "message"
      ],
      "line": 18,
      "id": "job-search-test;user-can-search-job-using-different-filters;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow,Greater London",
        "5 miles",
        "30000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow"
      ],
      "line": 19,
      "id": "job-search-test;user-can-search-job-using-different-filters;;2"
    },
    {
      "cells": [
        "Test manager",
        "London",
        "50 miles",
        "3000",
        "5000",
        "Per month",
        "Contract",
        "Contract Test Manager jobs in London"
      ],
      "line": 20,
      "id": "job-search-test;user-can-search-job-using-different-filters;;3"
    },
    {
      "cells": [
        "Business analyst",
        "Birmingham",
        "5 miles",
        "20",
        "50",
        "Per hour",
        "Temporary",
        "Temporary Business Analyst jobs in Birmingham"
      ],
      "line": 21,
      "id": "job-search-test;user-can-search-job-using-different-filters;;4"
    },
    {
      "cells": [
        "Quality Assurance",
        "United Kingdom",
        "75 miles",
        "2000",
        "6000",
        "Per month",
        "Permanent",
        "Permanent Quality Assurance jobs"
      ],
      "line": 22,
      "id": "job-search-test;user-can-search-job-using-different-filters;;5"
    },
    {
      "cells": [
        "Scrum Master",
        "London",
        "7 miles",
        "45000",
        "60000",
        "Per annum",
        "Permanent",
        "Permanent Scrum Master jobs in London"
      ],
      "line": 23,
      "id": "job-search-test;user-can-search-job-using-different-filters;;6"
    },
    {
      "cells": [
        "Tester",
        "Manchester",
        "25 miles",
        "2000",
        "5000",
        "Per month",
        "Contract",
        "Contract Tester jobs in Manchester"
      ],
      "line": 24,
      "id": "job-search-test;user-can-search-job-using-different-filters;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 20752972500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User can search job using different filters",
  "description": "",
  "id": "job-search-test;user-can-search-job-using-different-filters;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter role in \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job \"Harrow,Greater London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \"5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter minimum salary \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter maximum salary \"50000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify that \"Permanent Tester jobs in Harrow\" is displayed",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmHomepage()"
});
formatter.result({
  "duration": 2562354500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iEnterRoleIn(String)"
});
formatter.result({
  "duration": 157856000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow,Greater London",
      "offset": 13
    }
  ],
  "location": "JobSearchSteps.iEnterJob(String)"
});
formatter.result({
  "duration": 117081300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelect(String)"
});
formatter.result({
  "duration": 186158700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptions()"
});
formatter.result({
  "duration": 432210600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 117061600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 71486300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iSelectSalary(String)"
});
formatter.result({
  "duration": 103636400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iSelectJob(String)"
});
formatter.result({
  "duration": 93812000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 112043900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow",
      "offset": 13
    }
  ],
  "location": "JobSearchSteps.verifyThatIsDisplayed(String)"
});
formatter.result({
  "duration": 17143567200,
  "status": "passed"
});
formatter.after({
  "duration": 3527836900,
  "status": "passed"
});
formatter.before({
  "duration": 12799794500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User can search job using different filters",
  "description": "",
  "id": "job-search-test;user-can-search-job-using-different-filters;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter role in \"Test manager\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \"50 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter minimum salary \"3000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter maximum salary \"5000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify that \"Contract Test Manager jobs in London\" is displayed",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmHomepage()"
});
formatter.result({
  "duration": 1116380100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test manager",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iEnterRoleIn(String)"
});
formatter.result({
  "duration": 128267300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 13
    }
  ],
  "location": "JobSearchSteps.iEnterJob(String)"
});
formatter.result({
  "duration": 104394400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelect(String)"
});
formatter.result({
  "duration": 146945900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptions()"
});
formatter.result({
  "duration": 103786400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 74176700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 85144700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iSelectSalary(String)"
});
formatter.result({
  "duration": 223111800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iSelectJob(String)"
});
formatter.result({
  "duration": 987957400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 126310000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Test Manager jobs in London",
      "offset": 13
    }
  ],
  "location": "JobSearchSteps.verifyThatIsDisplayed(String)"
});
formatter.result({
  "duration": 18208576200,
  "status": "passed"
});
formatter.after({
  "duration": 1118248600,
  "status": "passed"
});
formatter.before({
  "duration": 9373149500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User can search job using different filters",
  "description": "",
  "id": "job-search-test;user-can-search-job-using-different-filters;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter role in \"Business analyst\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job \"Birmingham\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \"5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter minimum salary \"20\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter maximum salary \"50\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary \"Per hour\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job \"Temporary\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify that \"Temporary Business Analyst jobs in Birmingham\" is displayed",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmHomepage()"
});
formatter.result({
  "duration": 2727934400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business analyst",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iEnterRoleIn(String)"
});
formatter.result({
  "duration": 118370500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Birmingham",
      "offset": 13
    }
  ],
  "location": "JobSearchSteps.iEnterJob(String)"
});
formatter.result({
  "duration": 119453600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelect(String)"
});
formatter.result({
  "duration": 145857900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptions()"
});
formatter.result({
  "duration": 194063300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 1541140100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 125976200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per hour",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iSelectSalary(String)"
});
formatter.result({
  "duration": 92785200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temporary",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iSelectJob(String)"
});
formatter.result({
  "duration": 87221900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 198732500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temporary Business Analyst jobs in Birmingham",
      "offset": 13
    }
  ],
  "location": "JobSearchSteps.verifyThatIsDisplayed(String)"
});
formatter.result({
  "duration": 9359595700,
  "status": "passed"
});
formatter.after({
  "duration": 1639804400,
  "status": "passed"
});
formatter.before({
  "duration": 17522488900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User can search job using different filters",
  "description": "",
  "id": "job-search-test;user-can-search-job-using-different-filters;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter role in \"Quality Assurance\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job \"United Kingdom\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \"75 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter minimum salary \"2000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter maximum salary \"6000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify that \"Permanent Quality Assurance jobs\" is displayed",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmHomepage()"
});
formatter.result({
  "duration": 834626400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Quality Assurance",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iEnterRoleIn(String)"
});
formatter.result({
  "duration": 114849400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 13
    }
  ],
  "location": "JobSearchSteps.iEnterJob(String)"
});
formatter.result({
  "duration": 102600900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "75 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelect(String)"
});
formatter.result({
  "duration": 113582400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptions()"
});
formatter.result({
  "duration": 305666000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 72919100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 78390200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iSelectSalary(String)"
});
formatter.result({
  "duration": 106557000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iSelectJob(String)"
});
formatter.result({
  "duration": 99539600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 94830200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Quality Assurance jobs",
      "offset": 13
    }
  ],
  "location": "JobSearchSteps.verifyThatIsDisplayed(String)"
});
formatter.result({
  "duration": 16124497300,
  "status": "passed"
});
formatter.after({
  "duration": 2086907100,
  "status": "passed"
});
formatter.before({
  "duration": 12693647800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User can search job using different filters",
  "description": "",
  "id": "job-search-test;user-can-search-job-using-different-filters;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter role in \"Scrum Master\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \"7 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter minimum salary \"45000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter maximum salary \"60000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify that \"Permanent Scrum Master jobs in London\" is displayed",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmHomepage()"
});
formatter.result({
  "duration": 916168900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Scrum Master",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iEnterRoleIn(String)"
});
formatter.result({
  "duration": 148237600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 13
    }
  ],
  "location": "JobSearchSteps.iEnterJob(String)"
});
formatter.result({
  "duration": 80505700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelect(String)"
});
formatter.result({
  "duration": 122693300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptions()"
});
formatter.result({
  "duration": 110128800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 73917600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 75666600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iSelectSalary(String)"
});
formatter.result({
  "duration": 2413960800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iSelectJob(String)"
});
formatter.result({
  "duration": 98943100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 139602600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Scrum Master jobs in London",
      "offset": 13
    }
  ],
  "location": "JobSearchSteps.verifyThatIsDisplayed(String)"
});
formatter.result({
  "duration": 20672621600,
  "status": "passed"
});
formatter.after({
  "duration": 1964790900,
  "status": "passed"
});
formatter.before({
  "duration": 13416826800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User can search job using different filters",
  "description": "",
  "id": "job-search-test;user-can-search-job-using-different-filters;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter role in \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job \"Manchester\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select \"25 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search options",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter minimum salary \"2000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter maximum salary \"5000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify that \"Contract Tester jobs in Manchester\" is displayed",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmHomepage()"
});
formatter.result({
  "duration": 824242200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iEnterRoleIn(String)"
});
formatter.result({
  "duration": 110250500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manchester",
      "offset": 13
    }
  ],
  "location": "JobSearchSteps.iEnterJob(String)"
});
formatter.result({
  "duration": 135466500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25 miles",
      "offset": 10
    }
  ],
  "location": "JobSearchSteps.iSelect(String)"
});
formatter.result({
  "duration": 140330300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptions()"
});
formatter.result({
  "duration": 190921600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 84636700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 1400760200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 17
    }
  ],
  "location": "JobSearchSteps.iSelectSalary(String)"
});
formatter.result({
  "duration": 97445500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iSelectJob(String)"
});
formatter.result({
  "duration": 101906800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 125634900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Tester jobs in Manchester",
      "offset": 13
    }
  ],
  "location": "JobSearchSteps.verifyThatIsDisplayed(String)"
});
formatter.result({
  "duration": 11081211500,
  "status": "passed"
});
formatter.after({
  "duration": 927285000,
  "status": "passed"
});
});