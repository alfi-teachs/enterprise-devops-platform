
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
```bash
 cmd //c tree
```

------------------------------------------------

# Phase 2 - Create the Project Files

## Step 1 - Remove Placeholder Files

```bash
rm app/.gitkeep
rm docker/.gitkeep
rm terraform/.gitkeep
rm ansible/.gitkeep
rm kubernetes/.gitkeep
rm jenkins/.gitkeep
rm monitoring/.gitkeep
rm scripts/.gitkeep
rm docs/.gitkeep
rm images/.gitkeep
rm github-actions/.gitkeep
```

---

## Step 2 - Remove GitHub Actions Directory

```bash
rm -rf github-actions
```

---

## Step 3 - Create Application Files

```bash
touch app/index.html
touch app/style.css
touch app/app.js
touch app/nginx.conf
```

---

## Step 4 - Create Docker Files

```bash
touch docker/Dockerfile
touch docker/docker-compose.yml
```

---

## Step 5 - Create Terraform Files

```bash
touch terraform/providers.tf
touch terraform/variables.tf
touch terraform/main.tf
touch terraform/outputs.tf
touch terraform/terraform.tfvars
```

---

## Step 6 - Create Ansible Files

```bash
touch ansible/inventory
touch ansible/install-docker.yml
touch ansible/install-kubernetes.yml
touch ansible/deploy-app.yml
```

---

## Step 7 - Create Kubernetes Files

```bash
touch kubernetes/namespace.yaml
touch kubernetes/deployment.yaml
touch kubernetes/service.yaml
touch kubernetes/configmap.yaml
touch kubernetes/secret.yaml
touch kubernetes/ingress.yaml
touch kubernetes/hpa.yaml
```

---

## Step 8 - Create Jenkins Pipeline

```bash
touch jenkins/Jenkinsfile
```

---

## Step 9 - Create Monitoring Files

```bash
touch monitoring/prometheus.yaml
touch monitoring/grafana.yaml
touch monitoring/alertmanager.yaml
```

---

## Step 10 - Create Shell Scripts

```bash
touch scripts/build.sh
touch scripts/deploy.sh
touch scripts/cleanup.sh
touch scripts/backup.sh
```

---

## Step 11 - Create Documentation Files

```bash
touch docs/architecture.md
touch docs/setup.md
touch docs/troubleshooting.md
```

---

## Step 12 - Verify the Files

```bash
git ls-files
```

---

## Step 13 - Check the Project Structure

```bash
find .
```

---

## Step 14 - Stage the Changes

```bash
git add .
```

---

## Step 15 - Commit the Changes

```bash
git commit -m "Add initial project files"
```
---------------------------------------------------------------

## After updating index.html and style.css, use these commands to save
```bash
# Check the current status
git status
```

```bash
# Stage all changes
git add .
```

```bash
# Create a commit
git commit -m "Add HTML structure and CSS styling for web application"
```

```bash
# Push the changes to GitHub
git push
```

```bash
# Verify the repository is clean
git status
```
## Step 16 - Push to GitHub

```bash
git push
```
------------------------------------
## Phase 3 Completed

### Files created in the app directory and added content and pushed to github

### step 1

app/
├── app.js
├── index.html
├── nginx.conf
└── style.css

The web application is now ready to be served by Nginx and containerized with Docker in the next phase.

### Step 2 - Open the Application

If using VS Code with the Live Server extension:

Right-click index.html
Select Open with Live Server

The application will open in your browser.

Example URL:

http://127.0.0.1:5500

---------------------------
# phase 4 
## Step 1: Go to docker folder

From project root:
```bash
cd docker
```
### Step 2: Create Dockerfile

Open:
```bash
touch Dockerfile
```
### Step 3: Dockerfile content
### Step 4: Build Docker image
```bash
docker build -t enterprise-devops-app:v1 .
```
Check image:
```
docker images
```
You should see:
enterprise-devops-app   v1
nginx                   latest

### Step 5: Run container
```bash
docker run -d -p 8080:80 --name devops-app enterprise-devops-app:v1
```
Check:
```bash
docker ps
```
Step 7: Open browser

Go to:
```bash
http://localhost:8080
```
