<p align="center">
  <a href="https://github.com/Kaosumaru/plastic-scm-action-action/actions"><img alt="typescript-action status" src="https://github.com/Kaosumaru/plastic-scm-action-action/workflows/build-test/badge.svg"></a>
</p>


# plastic-scm-action-action
Action that checkouts repo from Plastic SCM, suited for local runners.
WARNING: this action requires sm to be installed on the runner


# Inputs

## ``repository``
Required: **YES**.

Name of repository to checkout

## ``branch``
Required: **NO**

Branch to checkout, defaults to "/main"


# Usage Example

## Simple Workflow

```yaml
# .github/workflows/main.yml
name: Main
on: [push]

jobs:
  my_job:
    runs-on: ubuntu-latest

    steps:
      - name: Plastic checkout
        uses: Kaosumaru/plastic-scm-action-action@v1
        with:
          repository: test@test@test
          branch: /main     
```