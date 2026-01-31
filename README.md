#  Movie Collection Web App

A responsive movie collection app built with **HTML, CSS, and Vanilla JS**. Features a grid of movie cards with filtering and search functionality.



## Features
- Responsive movie card grid (CSS Grid)
-  Filter movies by genre dropdown
-  Search movies by title/description
- Hover effects and modern glassmorphism design
-  Mobile-first responsive layout
-  Error handling for missing images/data

## Tech Stack
Frontend: HTML5, CSS3, Vanilla JavaScript
Data: JSON file (js/data/movies.json)
Styling: CSS Grid, Flexbox, Custom Properties
Deployment: Static hosting (GitHub Pages ready)


## Project Structure
movie-collection/
├── index.html # Main app structure
├── css/
│ └── style.css # Responsive styling
├── js/
│ ├── app.js # App logic + rendering
│ └── data/
│ └── movies.json # Movie data

## Team Contributions

### Student 1 (Repo Owner)
- Project setup and initial folder structure
- Complete responsive HTML/CSS design
- Movie data JSON population (5 sample movies)
- Data loading and app initialization
- Glassmorphism styling + hover effects

### Student 2 (Collaborator)
- Movie card rendering implementation
- Genre filter dropdown functionality
- Search by title/description feature
- Code review of Student 1's work
- This comprehensive README documentation



## Challenges & Solutions

| Problem                          | Solution                                      |
| -------------------------------- | --------------------------------------------- |
| movies.json empty → 0 movies     | Populated with 5 real movies + Unsplash images |
| Git: "local changes overwritten" | `git stash push/pop` before branch switching  |
| First push: "no upstream branch" | `git push -u origin feature/branch-name`      |
| CSS duplicate styles             | Cleaned + organized with CSS comments/sections |

## How to Run Locally
1. Clone the repository
2. Open `index.html` in browser
3. Or use **Live Server** extension in VS Code

## Live Demo
View the deployed app on [GitHub Pages](https://nyakiochristine.github.io/movie-collection/)
