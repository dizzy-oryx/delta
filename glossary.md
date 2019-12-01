# Glossary

Core domain terms for Delta

### Fragment:

_I don't really like this name all that much. Notion's name of block makes a ton of sense. This is subject to be changed_

An individual item inside of a `Note`. Could be a heading (h1-h4), a paragraph, a `Todo`, or a `View`.

### Todo:

A task that can be created inside of any `Note`. `Todo`'s can include `Tags` and due dates. They automatically inherit the name of the `Notebook` their parent `Note` resides in as a parameter to a `Filter`.

### Tag:

A label that can be applied to a `Note` or a `Todo` that can be used in `Filter`'s and searches to quickly find what users are looking for.

### Note:

A collection of `Fragments`

### Notebook:

A collection of `Note`'s. `Notebooks` can also contain other `Notebooks`. Users will use `Notebook`'s to organize ideas into projects and/or areas of their life. The name of the `Notebook` becomes something that user can `Filter`tasks on when using a `View`. Here is an example `Notebook` shown with * `Note` with -

```
* Personal
  * Finances
    - Tax Return 2019
  * Home
    - Projects
```

### Inbox:

Any `Note` created outside of a `Notebook` goes here. This serves as a quick capture spot for ideas that users have. They can later decide if they want to delete the `Note` or organize it by moving it into a `Notebook`.

### View:

_Not liking this name either. We should settle on a new one when a better one shows up. This is truly a differentiator of our application and makes use more powerful then a lot of note taking apps_

Serves as a window into `Todo`'s. With a `View` users can build smart lists and views into `Todo`'s. These could be a list of todos across several `Notebooks` or a kanban board view of tasks. `View`'s are comprised of `Filter`s to filter down todos based on a `Tag`, `Notebook`, and due dates. When building a kanban board window the user first selects a basic `Filter` to get tasks showing and then selects what they want each column of the kanban board to be based off of `Tag`'s.

### Filter:

Used when creating a `View` to specify what `Todo` items to include in the `View`. We will have to create a very lightweight DSL for users to specify this. Todoist has a really good barebones syntax that we could take a look at mimicing.

Possible things to filter on would be:
* `Notebook`
* `Tag`
* Due Dates

If we copied Todoist then a filter could look like this: `@Personal & #health` which would yield all `Todo`'s inside of the Personal `Notebook` with the `Tag` of health.
