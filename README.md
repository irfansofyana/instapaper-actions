# instapaper-actions
Github action to add web contents into your instapaper account.

## Inputs

- `username`: your instapaper username
- `password`: your instapaper password
- `url`: URL to the web content that you want to save
- `title`: Title of the content that you want to save
- `selection`: The description under the content in the interface

For more details, please check the Simple API documentation from Instapaper [here](https://www.instapaper.com/api/simple).

## Example Usage

```yaml
on: [push]

jobs:
  example_job:
    runs-on: ubuntu-latest
    name: A job to add a medium Article to instapaper account
    steps:
      - name: Add example article
        uses: irfansofyana/instapaper-actions@v1.0.0
        with:
          username: ${{ secrets.INSTAPAPER_USERNAME }}
          password: ${{ secrets.INSTAPAPER_PASSWORD }}
          url: https://medium.com/@gibinfrancis/software-architect-journey-ca9398546608
          title: Software Architect — Journey
          selection: This article is added by Github Action
```