
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
# Phase 4 

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
go to root
```bash
pwd
```
### Expected:
/c/project/enterprise-devops-platform

### Step 4: Build Docker image
```bash
docker build -t enterprise-devops-app:v1 -f docker/Dockerfile .
```
Check image:
```
docker images
```
### You should see:

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
### Step 6 : Open browser

Go to:
```bash
http://localhost:8080
```
--------------------------------------
# Phase 5 - Docker Hub

We will:

Create Docker Hub repository.
Login from terminal.
Tag image.

```bash
docker login
```
Tag:
```bash
docker tag enterprise-devops-app:v1 YOUR_DOCKERHUB_USERNAME/enterprise-devops-app:v1
```
Push:
```bash
docker push YOUR_DOCKERHUB_USERNAME/enterprise-devops-app:v1
```
----------------------------------
# Phase 6 - Kubernetes

We will use your existing:
```bash
kubernetes/
├── deployment.yaml
├── service.yaml
├── configmap.yaml
├── secret.yaml
├── ingress.yaml
└── hpa.yaml
```
### Deploy on your Minikube cluster first.

### Kubernetes HPA (Horizontal Pod Autoscaler) Lab
### Phase 1 – Prerequisites
Start Minikube:
```bash
minikube start
```
```bash
kubectl get nodes
```
Expected:
```bash
NAME           STATUS   ROLES
minikube       Ready    control-plane
minikube-m02   Ready
minikube-m03   Ready
```
### Phase 2 – Create Namespace

namespace.yaml
Apply:
```bash
kubectl apply -f namespace.yaml
```
Verify:
```bash
kubectl get ns
```
### Phase 3 – Create ConfigMap

configmap.yaml
Apply:
```bash
kubectl apply -f configmap.yaml
```
Verify:
```bash
kubectl get configmap -n enterprise-devops
kubectl describe configmap enterprise-config -n enterprise-devops
```
## Phase 4 – Create Secret
secret.yaml
Apply:
```bash
kubectl apply -f secret.yaml
```
Verify:
```bash
kubectl get secret -n enterprise-devops
kubectl describe secret enterprise-secret -n enterprise-devops
```
### Phase 5 – Create Deployment
Your Deployment includes:
- Namespace
- Image
- ConfigMap
- Secret
- CPU requests/limits (required for HPA)

Apply:
```bash
kubectl apply -f deployment.yaml
```
Verify:
```bash
kubectl get deployment -n enterprise-devops
kubectl get pods -n enterprise-devops
```
### Phase 6 – Create Service
service.yaml
type: NodePort
Apply:
```bash
kubectl apply -f service.yaml
```
Verify:
```bash
kubectl get svc -n enterprise-devops
kubectl get endpoints -n enterprise-devops
```
Open the application:
```bash
minikube service enterprise-devops-app -n enterprise-devops
```
--------------------------------------
### phase 7
## Ingress Setup (Production Style)
### Step 1: Install Nginx Ingress Controller
Enable:
```bash
minikube addons enable ingress
```
Check:
```bash
kubectl get pods -n ingress-nginx
```
Expected:
```bash
ingress-nginx-controller   Running
```
### Step 2: Create Ingress YAML

ingress.yaml
Apply:
```bash
kubectl apply -f ingress.yaml
```
### Step 3: Check Ingress
```bash
kubectl get ingress -n enterprise-devops
```
Example:
```bash
NAME                 HOSTS
enterprise-ingress   enterprise.local
```
Detailed:
```bash
kubectl describe ingress enterprise-ingress -n enterprise-devops
```
### Step 4: Configure Local DNS

Get Minikube IP:
```bash
192.168.49.2
```
### Step 5: Open Browser

Now access:
```bash
minikube ip
```
#### step 6: Enable Metrics Server
Check:
```bash
minikube addons list
```
Enable if needed:
```bash
minikube addons enable metrics-server
```
Verify
```bash
kubectl top nodes
```
```bash
kubectl top pods -n enterprise-devops
```
If these commands return CPU and memory values, Metrics Server is working.

### step 7:  – Add CPU Requests and Limits
HPA needs this in the Deployment
Apply:
```bash
kubectl apply -f deployment.yaml
```
--------------------------------------------------------------
### Phase 9 – Create HPA
hpa.yaml
Apply:
```bash
kubectl apply -f hpa.yaml
```
Verify:
```bash
kubectl get hpa -n enterprise-devops
```
Initially:
```bash
cpu: 28%/70%
Replicas: 2
```
### Phase 10 – Watch HPA

Terminal 1
```bash
kubectl get hpa -n enterprise-devops -w
```
Terminal 2
```bash
kubectl get deployment -n enterprise-devops -w
```
Terminal 3
```bash
kubectl get pods -n enterprise-devops -w
```
### Phase 11 – Generate Load

Since you're using Git Bash, disable path conversion:
```bash
MSYS_NO_PATHCONV=1 kubectl run load-generator --image=busybox --restart=Never -it --rm -- sh
```
Inside BusyBox:
```bash
while true; do
  wget -q -O- http://enterprise-devops-app.enterprise-devops.svc.cluster.local
done
```
### Phase 12 – Observe Scaling

Example:
```bash
Replicas

2

3

4

5

```
Pods:
```bash
enterprise-devops-app-xxxxx Running
enterprise-devops-app-yyyyy Running
enterprise-devops-app-zzzzz Running
enterprise-devops-app-aaaaa Running
enterprise-devops-app-bbbbb Running
```
Deployment:
```bash
READY

5/5
```
### Phase 13 – Stop Load
Press:
```bash
Ctrl + C
```
inside BusyBox.

### Phase 14 – Watch Scale Down

After the stabilization period:
```bash

5

↓

4

↓

3

↓

2
```
It won't go below 2 because:
```bash
minReplicas: 2
```
--------------------------------------------------
# Phase 1 – Jenkins Installation
### Step 1: Verify Docker

Run these commands:
```bash
docker --version
docker ps
docker images
```

Send me the output.

### Step 2 – Pull the Jenkins image
Run:
```bash
docker pull jenkins/jenkins:lts
```
Wait until it finishes.
Then verify:
```bash
docker images
```
You should see something like:
```bash
REPOSITORY          TAG    IMAGE ID
jenkins/jenkins     lts    xxxxxxxxx
```

### Step 3 – Create a Docker Volume

A Docker volume stores Jenkins data (jobs, plugins, credentials, pipeline history). This way, if the Jenkins container is removed, your data is preserved.

Run:
```bash
docker volume create jenkins_home
```
Verify it was created:
```bash
docker volume ls
```
You should see:
```bash
DRIVER    VOLUME NAME
local     jenkins_home
```
### Step 4 – Run the Jenkins Container

We'll start with a basic Jenkins installation to make sure everything works. Later we'll enhance it so Jenkins can build Docker images and deploy to Kubernetes.

Run this command in Git Bash:
```bash
docker run -d \
  --name jenkins \
  -p 8081:8080 \
  -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  jenkins/jenkins:lts
```
Then open:
```bash
http://localhost:8081
```
If you're using Command Prompt or PowerShell, let me know and I'll give you the Windows version.

Verify the container is running
Run:
```bash
docker ps
```
You should see something like:
```bash
CONTAINER ID   IMAGE                  STATUS
xxxxxxxxxxxx   jenkins/jenkins:lts    Up xx seconds
```

get inide container
```bash
docker exec -it jenkins bash
```
Then inside the container run:
```bash
cat /var/jenkins_home/secrets/initialAdminPassword
```
Then open:
```bash
http://localhost:8081
```
Copy the password, paste it into the Administrator password field, and click Continue.

Then:
- Click Install suggested plugins.
- Wait for the plugins to finish installing.
- Create your first admin user.
- Finish the setup.
- You should arrive at the Jenkins Dashboard.

Type:

exit
to leave the container.

### Step 6 – Check Jenkins Version
On the Jenkins Dashboard:

Go to: 
```bash
Manage Jenkins
```
Go to:
```bash
Manage Jenkins → Plugins
```
(If your Jenkins version shows Manage Plugins, that's fine too.)

### Step 7 – Install Required Plugins

Go to the Available plugins tab and search for these plugins one by one.

Install only these:

✅ Docker Pipeline
✅ Docker
✅ Pipeline
✅ Git
✅ GitHub
✅ GitHub Integration
✅ Kubernetes
✅ Kubernetes CLI
✅ Maven Integration
✅ SSH Agent
✅ Credentials Binding

If a plugin is already installed, you don't need to install it again.

### Step 8 – Configure Global Tools

Jenkins needs to know where Git, Maven, and JDK are.

Go to:

Manage Jenkins
      ↓
Tools

(or Global Tool Configuration, depending on your Jenkins version).

Tell me if you see these sections:

✅ Git installations
✅ JDK installations
✅ Maven installations
```bash
docker stop jenkins
docker rm jenkins
```
### Step 9 – Create a Jenkins Workspace

Create a new folder anywhere on your machine.

For example:
```bash
cd jenkins 
```
### Step 10 – Create the Dockerfile
inside folder create dockerfile

Paste this content into the Dockerfileile
Now build the image:
```bash
docker build -t jenkins-devops:lts .
```
This will take some time because it installs:

Git
Maven
Docker CLI
kubectl

After it completes, verify:
```bash
docker images
```
You should see:
```bash
REPOSITORY          TAG
jenkins-devops      lts
```
### Step 12 – Start Jenkins with Docker Access

Before starting, make sure the old Jenkins container is removed:
```bash
docker ps -a
```
If you still see the old container:
```bash
docker rm -f jenkins
```
Now run the new Jenkins container:
```bash
docker run -d \
  --name jenkins \
  -p 8081:8080 \
  -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  -v //var/run/docker.sock:/var/run/docker.sock \
  jenkins-devops:lts
```
then check:
```bash
docker ps
```
You should see:
```bash
jenkins-devops:lts
0.0.0.0:8081->8080/tcp
```
After that open:
```bash
http://localhost:8081
```
enter username  and password

You have completed the most important setup part:

✅ Jenkins running in Docker
✅ Custom Jenkins image created
✅ Git installed
✅ Maven installed
✅ Docker CLI installed
✅ kubectl installed
✅ Jenkins data persisted using volume
✅ Docker socket connected

### Step 13 – Verify Tools Inside Jenkins Container

Open your terminal and run:

1. Enter Jenkins container
```bash
docker exec -it jenkins bash
```
You should see something like:
```bash
jenkins@container-id:/$
```
2. Check Git

Inside Jenkins:

```bash
git --version
```
Expected:
```bash
git version x.x.x
```
3. Check Maven

```bash
mvn --version
```
Expected:
```bash
Apache Maven 3.x.x

Java version ...
```
4. Check Docker
```bash
docker --version
```
Expected:
```bash
Docker version xx.x.x
```
5. Check kubectl
```bash
kubectl version --client
```
Expected:
```bash
Client Version: v1.xx.x
```
After checking, exit:

exit

### Step 14 – Configure Jenkins Tools

Now go to Jenkins UI:

Manage Jenkins
      ↓
Tools

Configure these:

1. JDK Installation

Find:

JDK installations
```bash 
Click Add JDK

Name: jdk21

Uncheck:  Install automatically

Set path:  /opt/java/openjdk
```
2. Maven Installation

Find:  Maven installations

Click Add Maven
```bash 
Name:  maven3

Uncheck:  Install automatically

Maven home:  /usr/share/maven
```
3. Git

Find:  Git installations

Click Add Git
```bash
Name: git

Path: /usr/bin/git

Click:  Apply → Save
```
### step 15

```bash
cd /c/project/enterprise-devops-platform
```
Run:
```bash
docker build -t alskill/enterprise-devops-app:v2 -f docker/Dockerfile .
```
After successful build:
```bash
docker images
```
You should see:
```bash
alskill/enterprise
-devops-app   v2
```
Then test:
```bash
docker run -d --name test-app -p 8085:80 alskill/enterprise-devops-app:v2
```
Verify:
```bash
docker ps
```
Open:
```bash
http://localhost:8085
```
### Step 17 – Create Docker Hub Credentials in Jenkins

Jenkins needs permission to push images.

Open Jenkins:
```bash
Manage Jenkins
        ↓
Credentials
        ↓
System
        ↓
Global credentials (unrestricted)
        ↓
Add Credentials
```
Choose:

Kind:
```bash
Username with password
```
Fill:
```bash
Username: your Docker Hub username
Password: Docker Hub Access Token
ID: dockerhub-creds
Description: Docker Hub credentials
```
Important:
Use a Docker Hub Access Token, not your normal password.

Create token in Docker Hub:

```bash
Docker Hub
    ↓
Account Settings
    ↓
Security
    ↓
New Access Token
```
Give it Read/Write permission.

After adding credentials, we will create your first:
```bash
Jenkinsfile
```
