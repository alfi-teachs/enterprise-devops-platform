
# Enterprise DevOps Platform - Project Setup
# Git Setup and Push to GitHub

## 1. Create the Project

```bash
mkdir enterprise-devops-platform
cd enterprise-devops-platform
```

---

## 2. Create the Project Directories

```bash
mkdir ansible
mkdir app
mkdir docker
mkdir docs
mkdir github-actions
mkdir images
mkdir jenkins
mkdir kubernetes
mkdir monitoring
mkdir scripts
mkdir terraform
```

---

## 3. Verify the Directory Structure

```bash
cmd //c tree
```

Expected Output

```text
enterprise-devops-platform
├── ansible
├── app
├── docker
├── docs
├── github-actions
├── images
├── jenkins
├── kubernetes
├── monitoring
├── scripts
└── terraform
```

---

## 4. Initialize Git

```bash
git init
```

---

## 5. Check Git Status

```bash
git status
```

Output

```text
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

Git does not track empty folders. It only tracks files.

---

## 6. Create Placeholder Files

```bash
touch ansible/.gitkeep
touch app/.gitkeep
touch docker/.gitkeep
touch docs/.gitkeep
touch github-actions/.gitkeep
touch images/.gitkeep
touch jenkins/.gitkeep
touch kubernetes/.gitkeep
touch monitoring/.gitkeep
touch scripts/.gitkeep
touch terraform/.gitkeep
touch .gitignore
```

---

## 7. Check Git Status Again

```bash
git status
```

---

## 8. Add Files to Git

```bash
git add .
```

---

## 9. Commit the Changes

```bash
git commit -m "Initial project structure"
```

---

## 10. Check Commit History

```bash
git log --oneline
```

---

## 11. Add GitHub Remote

```bash
git remote add origin git@github.com:alfi-teachs/enterprise-devops-platform.git
```

Verify:

```bash
git remote -v
```

Expected Output

```text
origin  git@github.com:alfi-teachs/enterprise-devops-platform.git (fetch)
origin  git@github.com:alfi-teachs/enterprise-devops-platform.git (push)
```

---

## 12. Rename Local Branch to Main

```bash
git branch -M main
```

Verify

```bash
git branch
```

Output

```text
* main
```

---

## 13. Push the Repository

```bash
git push -u origin main
```

---

## 14. Future Pushes

```bash
git add .
git commit -m "Describe your changes"
git push
```

---

# Useful Git Commands

## Check Repository Status

```bash
git status
```

## View Commit History

```bash
git log --oneline
```

## View Branches

```bash
git branch
```

## View Remote Repository

```bash
git remote -v
```

## Check Git Username

```bash
git config --global user.name
```

## Check Git Email

```bash
git config --global user.email
```

## Change Git Username

```bash
git config --global user.name "YOUR_USERNAME"
```

## Change Git Email

```bash
git config --global user.email "YOUR_EMAIL@example.com"
```

## Test GitHub SSH Authentication

```bash
ssh -T git@github.com
```

Expected Output

```text
Hi YOUR_USERNAME! You've successfully authenticated, but GitHub does not provide shell access.
```
```
