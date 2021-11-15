# Bookmark Frontend

This is the frontend for the Bookmark'd App, utilizing API from the [MongoDB-Heroku backend.](https://github.com/gadgetgeek/keb_bmproject_backend)

## Contributors
- [Brian Anderson](https://github.com/gadgetgeek) (team lead and repo owner)
- [Kerlin Lopes](https://github.com/kerlinlopes)
- [Elikya Bokanga](https://github.com/elikyaB)
- [Wensy DeSousa](https://github.com/wensyd)

## Technologies Used
- HTML5
- CSS
- React JS
- Netlify

## Router Route Table

| Route | URL | Description |
| ----- | --- | ----------- |
| Test | `/` | Test |
| Index | `/bookmark` | GET request, returns all bookmarks as json |
| Create | `/bookmark` | POST request, uses request body to make a new bookmark |
| Update | `/bookmark/:id` | PUT request, updates the bookmark specified |
| Destroy | `/bookmark/:id` | DELETE request, deletes the bookmark specified |
| Show | `/bookmark/:id` | GET request, shows the bookmark specified |

## Components
- Header - hosts the title banner
- Main - holds CRUD functions and routes

## Pages
- Index - displays form for new and list of existing bookmarks
- Show - shows pre-filled form of specified bookmark for editing

## Tree
```
App
 |_____ Header
 |_____ Main
          |______ Index / Show
```

## User Stories
- As a user, I can see a list of all my bookmarks when I visit the page.
- As a user, I can click on one of my bookmarks and have it take me to the linked website.
- As a user, I can create a new bookmark and see that it immediately loads on the page so that I know I successfully added a bookmark, and the form becomes clear for a new entry.
- As a user, I can update a bookmark in case I made a typo or the URL changed.
- As a user, I can delete a bookmark so I can keep my list relevant.
- As a user, I can delete all bookmarks so I can make a new list entirely.
- As a user, I can click to go to the site of a random bookmark.

## Development Notes
- ClickUp vs Trello
- Git repositories and adding collaborators
- Troubleshooting npm i, .env, and start scripts