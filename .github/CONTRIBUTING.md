# Contributing Guidelines

*Pull requests, bug reports, and all other forms of contribution are welcomed and highly encouraged!* :octocat:

### Contents

- [Code of Conduct](#book-code-of-conduct)
- [Asking Questions](#bulb-asking-questions)
- [Opening an Issue](#inbox_tray-opening-an-issue)
- [Feature Requests](#love_letter-feature-requests)
- [Triaging Issues](#mag-triaging-issues)
- [Submitting Pull Requests](#repeat-submitting-pull-requests)
- [Writing Commit Messages](#memo-writing-commit-messages)
- [Code Review](#white_check_mark-code-review)
- [Coding Style](#nail_care-coding-style)
- [Certificate of Origin](#medal_sports-certificate-of-origin)
- [Credits](#pray-credits)

> **This guide serves to set clear expectations for everyone involved with the project so that we can improve it together while also creating a welcoming space for everyone to participate. Following these guidelines will help ensure a positive experience for contributors and maintainers.**

## :book: Code of Conduct

Please review our [Code of Conduct](https://github.com/U9-GLO297-CW/dojo-challenge-gregorio-ayvar/blob/main/.github/CODE_OF_CONDUCT.md). It is in effect at all times. We expect it to be honored by everyone who contributes to this project. Acting like an asshole will not be tolerated.

## :bulb: Asking Questions

See our [Support Guide](https://github.com/U9-GLO297-CW/dojo-challenge-gregorio-ayvar/blob/main/.github/SUPPORT.md). In short, GitHub issues are not the appropriate place to debug your specific project, but should be reserved for filing bugs and feature requests.

## :inbox_tray: Opening an Issue

Before [creating an issue](https://github.com/U9-GLO297-CW/dojo-challenge-gregorio-ayvar/issues), check if you are using the latest version of the project. If you are not up-to-date, see if updating fixes your issue first.

### :lock: Reporting Security Issues

Review our [Security Policy](https://github.com/U9-GLO297-CW/dojo-challenge-gregorio-ayvar/blob/main/.github/SECURITY.md). **Do not** file a public issue for security vulnerabilities.

### :beetle: Bug Reports and Other Issues

A great way to contribute to the project is to send a detailed issue when you encounter a problem. We always appreciate a well-written, thorough bug report. :v:

In short, since you are most likely a developer, **provide a ticket that you would like to receive**.

- **Review the documentation and [Support Guide](https://github.com/U9-GLO297-CW/dojo-challenge-gregorio-ayvar/blob/main/.github/SUPPORT.md)** before opening a new issue.

- **Do not open a duplicate issue!** Search through existing issues to see if your issue has previously been reported. If your issue exists, comment with any additional information you have. You may simply note "I have this problem too", which helps prioritize the most common problems and requests. 

- **Prefer using [reactions](https://github.blog/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/)**, not comments, if you simply want to "+1" an existing issue.

- **Fully complete the provided issue template.** The bug report template requests all the information we need to quickly and efficiently address your issue. Be clear, concise, and descriptive. Provide as much information as you can, including steps to reproduce, stack traces, compiler errors, library versions, OS versions, and screenshots (if applicable).

- **Use [GitHub-flavored Markdown](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax).** Especially put code blocks and console outputs in backticks (```). This improves readability.



## Installation

Use the package npm manager to install project.

```bash
npm
```
## Run dev env autoreload when file updated

[file=] parameter for the modified file

```bash
file=generateParenthesis.ts npm run dev
```

## Unit Test

Uses Jest to created Mocked Unit Test.

```bash
npm run test
```

## :love_letter: Feature Requests

- **Do not open a duplicate feature request.** Search for existing feature requests first. If you find your feature (or one very similar) previously requested, comment on that issue.

Feature requests are welcome! While we will consider all requests, we cannot guarantee your request will be accepted. We want to avoid [feature creep](https://en.wikipedia.org/wiki/Feature_creep). Your idea may be great, but also out-of-scope for the project. If accepted, we cannot make any commitments regarding the timeline for implementation and release. However, you are welcome to submit a pull request to help! You can follow this [Sample PR](https://github.com/U9-GLO297-CW/dojo-challenge-gregorio-ayvar/pull/45).

> 1. Create unit testing.
> 2. Reach out the test coverage.
> 3. Create your branch using the date format below:

```bash
git checkout -b fb/feb-21
```

> 4. Add your files and create the commit (do not use -m flag for the commit message): 

```bash
git add -A && git commit
```
**(Runs automatically: lint:fix, TS validation, prettier and test suites on Git Hook pre-commit using Husky)**

[Hooks](https://github.com/U9-GLO297-CW/dojo-challenge-gregorio-ayvar/blob/main/src/assets/hooks.png)

> 5. Pick the `feat` option.

[Commit options](https://github.com/U9-GLO297-CW/dojo-challenge-gregorio-ayvar/blob/main/src/assets/options.png)

> 6. Answer the required questions :information_source: it may open text editor in console, then you must save the changes.

[Questions](https://github.com/U9-GLO297-CW/dojo-challenge-gregorio-ayvar/blob/main/src/assets/questions.png)

> 7. Push setting upstream branch using this date format 

```bash
`git push --set-upstream origin fb/feb-21`
```
> 8. Create a Pull a Request.
> 9. Complete description.
> 10. Add Unit Testing, Coverage and all Test Suites screenshots.

[Pull Request](https://github.com/U9-GLO297-CW/dojo-challenge-gregorio-ayvar/blob/main/src/assets/pull.png)

> 11. Some other checks will run and have to pass before merging.

[Checks](https://github.com/U9-GLO297-CW/dojo-challenge-gregorio-ayvar/blob/main/src/assets/checks.png)

## :repeat: Submitting Pull Requests

We **love** pull requests! Before [forking the repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) and [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests) for non-trivial changes, it is usually best to first open an issue to discuss the changes, or discuss your intended approach for solving the problem in the comments for an existing issue.

For most contributions, after your first pull request is accepted and merged, you will be [invited to the project](https://help.github.com/en/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository) and given **push access**. :tada:

*Note: All contributions will be licensed under the project's license.*

- **Smaller is better.** Submit **one** pull request per bug fix or feature. A pull request should contain isolated changes pertaining to a single bug fix or feature implementation. **Do not** refactor or reformat code that is unrelated to your change. It is better to **submit many small pull requests** rather than a single large one. Enormous pull requests will take enormous amounts of time to review, or may be rejected altogether. 

- **Coordinate bigger changes.** For large and non-trivial changes, open an issue to discuss a strategy with the maintainers. Otherwise, you risk doing a lot of work for nothing!

- **Prioritize understanding over cleverness.** Write code clearly and concisely. Remember that source code usually gets written once and read often. Ensure the code is clear to the reader. The purpose and logic should be obvious to a reasonably skilled developer, otherwise you should add a comment that explains it.

- **Add documentation (Ootional).** Document your changes with code doc comments or in existing guides.

- **[Resolve any merge conflicts](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github)** that occur.

- **Promptly address any CI failures**. If your pull request fails to build or pass tests, please push another commit to fix it. 

## :white_check_mark: Code Review

- **Review the code, not the author.** Look for and suggest improvements without disparaging or insulting the author. Provide actionable feedback and explain your reasoning.

- **You are not your code.** When your code is critiqued, questioned, or constructively criticized, remember that you are not your code. Do not take code review personally.

- **Always do your best.** No one writes bugs on purpose. Do your best, and learn from your mistakes.

- Kindly note any violations to the guidelines specified in this document. 

## 🔼 Create a release


- **Use the branch.** `fb/feb-21` is the default branch.

[Release Branch](https://github.com/U9-GLO297-CW/dojo-challenge-gregorio-ayvar/blob/main/src/assets/release-branch.png)


- **Codeowners must create an automatic release** Select the release type.

```bash
npm run release
```

[Release Options](https://github.com/U9-GLO297-CW/dojo-challenge-gregorio-ayvar/blob/main/src/assets/release-options.png)

## 🔼 Owners create a PR to merge to main

## :medal_sports: Certificate of Origin

*Developer's Certificate of Origin 1.1*

By making a contribution to this project, I certify that:

> 1. The contribution was created in whole or in part by me and I have the right to submit it under the open source license indicated in the file; or
> 2. The contribution is based upon previous work that, to the best of my knowledge, is covered under an appropriate open source license and I have the right under that license to submit that work with modifications, whether created in whole or in part by me, under the same open source license (unless I am permitted to submit under a different license), as indicated in the file; or
> 3. The contribution was provided directly to me by some other person who certified (1), (2) or (3) and I have not modified it.
> 4. I understand and agree that this project and the contribution are public and that a record of the contribution (including all personal information I submit with it, including my sign-off) is maintained indefinitely and may be redistributed consistent with this project or the open source license(s) involved.

## [No Brown M&M's](https://en.wikipedia.org/wiki/Van_Halen#Contract_riders)

If you are reading this, bravo dear user and (hopefully) contributor for making it this far! You are awesome. :100: 

To confirm that you have read this guide and are following it as best as possible, **include this emoji at the top** of your issue or pull request: :black_heart: `:black_heart:`

## :pray: Credits

Written by [@jessesquires](https://github.com/U9-GLO297-CW/dojo-challenge-gregorio-ayvar/blob/main/.github/free to adopt this guide in your own projects. Fork it wholesale or remix it for your needs.**

*Many of the ideas and prose for the statements in this document were based on or inspired by work from the following communities:*

- [Alamofire](https://github.com/Alamofire/Alamofire/blob/master/CONTRIBUTING.md)
- [CocoaPods](https://github.com/CocoaPods/CocoaPods/blob/master/CONTRIBUTING.md)
- [Docker](https://github.com/moby/moby/blob/master/CONTRIBUTING.md)
- [Linux](https://elinux.org/Developer_Certificate_Of_Origin)

*We commend them for their efforts to facilitate collaboration in their projects.*

## :book: REFERENCE
Setting guidelines for repository contributors
https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors