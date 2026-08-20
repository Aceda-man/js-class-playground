# JS Class Playground

A shared practice repo for our JS class to learn Git — branching, commits, and pull requests.

## Getting Started

1. Clone the repo:

git clone https://github.com/Aceda-man/js-class-playground.git

2. Move into the folder:

cd js-class-playground

3. Create your own branch:

git checkout -b your-name-exercises

4. Create a folder with your name under `exercises/` (e.g. `exercises/ada/`) and start solving challenges from `CHALLENGES.md` inside it.

## Authentication (Important!)

GitHub no longer allows pushing with just your username and password. Before you push for the first time, set up a Personal Access Token:

1. Go to GitHub → your profile picture (top right) → Settings
2. Scroll to Developer settings (bottom of the left sidebar)
3. Personal access tokens → Tokens (classic) → Generate new token (classic)
4. Give it a name, set an expiration, check the "repo" box
5. Click Generate token and copy it immediately (you won't see it again)

When you run `git push` and it asks for:

- Username → your GitHub username
- Password → paste the token (not your actual password)

Alternative: install GitHub CLI and run `gh auth login` — it handles this for you with a browser login, no token copying needed.

## How it works

1. Clone this repo
2. Create your own branch: `git checkout -b your-name-exercises`
3. Create a folder under `/exercises` with your name (if it doesn't exist yet)
4. Solve the exercises in CHALLENGES.md inside your folder
5. Commit and push your branch
6. Open a Pull Request into `main`
7. Get it reviewed and merged

## Git Cheat Sheet

- `git status` — see what's changed
- `git add .` — stage your changes
- `git commit -m "message"` — save your changes
- `git push origin your-branch-name` — upload your branch
- `git pull origin main` — get the latest updates from main

## Opening a Pull Request

1. Go to the repo on GitHub
2. Click "Pull requests" → "New pull request"
3. Set base: `main`, compare: `your-branch-name`
4. Add a short title (e.g. "Ada - calculator exercise")
5. Click "Create pull request"

## Rules

- Don't edit anyone else's folder
- One function per file
- Add a comment at the top of each file saying what it practices

## Contributors

1.  Adegboyega Adeyemi

2.  Damilola Olusegun
    chris-damilola

Add your name and GitHub handle here when you join:

-

## Stuck?

If you get a merge conflict or an error you don't understand, open an Issue or ask in the group chat before force-pushing anything.
