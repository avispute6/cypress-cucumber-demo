Feature: ABN Lookup - Verify ABN Lookup Page

    As a customer I should able to open ABN Lookup page and search business details

    Scenario: Validate ABN lookup page for valid entity Automic Pty Ltd
        Given I open ABN Lookup website
        When I search for "Automic Pty Ltd" ABN
        Then I click on "Automic Pty Ltd" link to get details
        And I validate business details for "automic" ABN

    Scenario: Validate ABN lookup page for invalid entity
        Given I open ABN Lookup website
        When I search for "00000000000" ABN
        Then I goto invalid abn page
        And I should see error message for invalid ABN "00000000000"
    
    Scenario: Validate ABN lookup page for valid entity Google Australia PTY LTD
        Given I open ABN Lookup website
        When I search for "Google Australia Pty Ltd" ABN
        Then I click on "Google Australia Pty Ltd" link to get details
        And I validate business details for "google" ABN