# Test Case 7: Verify Test Cases Page

## Application Overview

Verify a fresh browser session can load the Automation Exercise homepage and reach the Test Cases page through its header navigation.

## Test Scenarios

### 1. Test Cases page navigation

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify Test Cases page

**File:** `tests/TC007_VerifyTestCasesPage.spec.ts`

**Steps:**
  1. Launch a fresh browser page using the configured Chromium project.
    - expect: The test starts with a new page and no existing user session.
  2. Navigate to the configured base URL, https://automationexercise.com/.
    - expect: The browser loads the Automation Exercise homepage.
  3. Verify the homepage title is Automation Exercise and a visible AutomationExercise heading is present.
    - expect: The homepage title matches exactly.
    - expect: A homepage heading is visible.
  4. Click the Test Cases link in the page header.
    - expect: The link navigation completes without strict-locator ambiguity.
  5. Verify the URL ends in /test_cases and the Test Cases heading is visible.
    - expect: The browser is on the Test Cases route.
    - expect: A heading named Test Cases is visible.
