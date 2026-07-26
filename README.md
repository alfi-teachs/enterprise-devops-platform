# Phase 1 - Git & GitHub Setup

## Objective

Create the project structure, initialize Git, create a GitHub repository, and push the project to GitHub.
---
# Step 1 - Create the Project Directory

```bash
mkdir enterprise-devops-platform
cd enterprise-devops-platform
```
Verify

```bash
pwd
```
---
# Step 2 - Create the Project Structure

```bash
mkdir ansible
mkdir app
mkdir docker
mkdir docs
mkdir images
mkdir jenkins
mkdir kubernetes
mkdir monitoring
mkdir scripts
mkdir terraform
```
Verify

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
├── images
├── jenkins
├── kubernetes
├── monitoring
├── scripts
└── terraform
```

---
# Step 3 - Initialize Git Repository

```bash
git init
```
Verify

```bash
git status
```
Expected Output

```text
On branch master

No commits yet
nothing to commit
```
# Step 4 - Create Placeholder Files

Git does not track empty directories, so create placeholder files.

```bash
touch ansible/.gitkeep
touch app/.gitkeep
touch docker/.gitkeep
touch docs/.gitkeep
touch images/.gitkeep
touch jenkins/.gitkeep
touch kubernetes/.gitkeep
touch monitoring/.gitkeep
touch scripts/.gitkeep
touch terraform/.gitkeep
touch .gitignore
```
Verify
```bash
git status
```
---
# Step 5 - Stage the Files

```bash
git add .
```

Verify

```bash
git status
```
---
# Step 6 - Create the First Commit

```bash
git commit -m "Initial project structure"
```
Verify
```bash
git log --oneline
```
---
# Step 7 - Create a GitHub Repository

Create a new repository named:

```text
enterprise-devops-platform
```

Do not initialize it with:

* README
* .gitignore
* License

---

# Step 8 - Add the Remote Repository

Using SSH

```bash
git remote add origin git@github.com:YOUR_GITHUB_USERNAME/enterprise-devops-platform.git
```

Verify

```bash
git remote -v
```

Expected Output

```text
origin  git@github.com:YOUR_GITHUB_USERNAME/enterprise-devops-platform.git (fetch)
origin  git@github.com:YOUR_GITHUB_USERNAME/enterprise-devops-platform.git (push)
```

---
# Step 9 - Rename the Branch

```bash
git branch -M main
```
Verify
```bash
git branch
```

Expected Output

```text
* main
```

---
# Step 10 - Push the Repository

```bash
git push -u origin main
```
Verify
Open your GitHub repository and confirm the project structure has been uploaded.

---
# Step 11 - Create Project Files

Remove the placeholder files.

```bash
rm ansible/.gitkeep
rm app/.gitkeep
rm docker/.gitkeep
rm docs/.gitkeep
rm images/.gitkeep
rm jenkins/.gitkeep
rm kubernetes/.gitkeep
rm monitoring/.gitkeep
rm scripts/.gitkeep
rm terraform/.gitkeep
```

---

Create the application files.

```bash
touch app/index.html
touch app/style.css
touch app/app.js
touch app/nginx.conf
```

Create the Docker files.

```bash
touch docker/Dockerfile
```

Create the Kubernetes files.

```bash
touch kubernetes/namespace.yaml
touch kubernetes/deployment.yaml
touch kubernetes/service.yaml
touch kubernetes/configmap.yaml
touch kubernetes/secret.yaml
touch kubernetes/ingress.yaml
touch kubernetes/hpa.yaml
```

Create the Jenkins pipeline.

```bash
touch jenkins/Jenkinsfile
```

Create the Terraform files.

```bash
touch terraform/providers.tf
touch terraform/variables.tf
touch terraform/main.tf
touch terraform/outputs.tf
touch terraform/terraform.tfvars
```

Create the Ansible files.

```bash
touch ansible/inventory
touch ansible/install-docker.yml
touch ansible/install-kubernetes.yml
touch ansible/deploy-app.yml
```

Create the Monitoring files.

```bash
touch monitoring/prometheus.yaml
touch monitoring/grafana.yaml
touch monitoring/alertmanager.yaml
```

Create the Shell Scripts.

```bash
touch scripts/build.sh
touch scripts/deploy.sh
touch scripts/cleanup.sh
touch scripts/backup.sh
```

Create the Documentation files.

```bash
touch docs/architecture.md
touch docs/setup.md
touch docs/troubleshooting.md
```

---

# Step 12 - Verify the Files

```bash
find .
```

or

```bash
git ls-files
```

---

# Step 13 - Commit the Changes

```bash
git add .
git commit -m "Add initial project files"
git push
```

---

# Useful Git Commands

Check repository status.

```bash
git status
```

View commit history.

```bash
git log --oneline
```

View branches.

```bash
git branch
```

View remote repository.

```bash
git remote -v
```

Check Git username.

```bash
git config --global user.name
```

Check Git email.

```bash
git config --global user.email
```

Test GitHub SSH authentication.

```bash
ssh -T git@github.com
```

-----------------------------------------------------------
# Phase 2 - Create the Project Files
### Step 1 - Remove Placeholder Files
```bash
rm ansible/.gitkeep
rm app/.gitkeep
rm docker/.gitkeep
rm docs/.gitkeep
rm images/.gitkeep
rm jenkins/.gitkeep
rm kubernetes/.gitkeep
rm monitoring/.gitkeep
rm scripts/.gitkeep
rm terraform/.gitkeep
```bash
### Step 2 - Create Application Files
```bash
touch app/index.html
touch app/style.css
touch app/app.js
touch app/nginx.conf
touch app/package.json
```
### Step 3 - Create Docker Files
```bash
touch docker/Dockerfile
touch docker/.dockerignore
```
### Step 4 - Create Terraform Files
```bash
touch terraform/providers.tf
touch terraform/variables.tf
touch terraform/main.tf
touch terraform/outputs.tf
touch terraform/terraform.tfvars
```
### Step 5 - Create Ansible Files
```bash
touch ansible/inventory
touch ansible/install-docker.yml
touch ansible/install-kubernetes.yml
touch ansible/deploy-app.yml
```
### Step 6 - Create Kubernetes Files
```bash
touch kubernetes/namespace.yaml
touch kubernetes/deployment.yaml
touch kubernetes/service.yaml
touch kubernetes/configmap.yaml
touch kubernetes/secret.yaml
touch kubernetes/ingress.yaml
touch kubernetes/hpa.yaml
```
### Step 7 - Create Jenkins Pipeline
```bash
touch jenkins/Jenkinsfile
```
### Step 8 - Create Monitoring Files
```bash
touch monitoring/prometheus.yaml
touch monitoring/grafana.yaml
touch monitoring/alertmanager.yaml
```
### Step 9 - Create Shell Scripts
```bash
touch scripts/build.sh
touch scripts/deploy.sh
touch scripts/cleanup.sh
touch scripts/backup.sh
```
### Step 10 - Create Documentation Files
```bash
touch docs/architecture.md
touch docs/setup.md
touch docs/troubleshooting.md
touch README.md
```
### Step 11 - Verify the Project Structure
```bash
find .
#### Step 12 - Check Tracked Files
git ls-files
### Step 13 - Check Git Status
git status
### Step 14 - Stage All Files
git add .
### Step 15 - Commit the Changes
git commit -m "Add initial project files"
###b Step 16 - Push to GitHub
git push
```
-----------------------------------------------------------------------------
# Phase 3 - Docker
### Step 1 - Navigate to the Project
cd enterprise-devops-platform
pwd
### Step 2 - Verify the Application Files
ls app

Expected Output

app.js
index.html
style.css
nginx.conf
package.json
### Step 3 - Create the Dockerfile
```bash
nano docker/Dockerfile
```
Paste:
```bash
FROM nginx:alpine
COPY app/index.html /usr/share/nginx/html/
COPY app/style.css /usr/share/nginx/html/
COPY app/app.js /usr/share/nginx/html/
COPY app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
```
Save and exit.

### Step 4 - Create the .dockerignore File
```bash
nano docker/.dockerignore
```
Paste:

- .git
- .gitignore
- README.md
- docs
- terraform
- ansible
- jenkins
- kubernetes
- monitoring
- scripts
- images
Save and exit.

#### Step 5 - Build the Docker Image
```bash
docker build -t enterprise-devops-app:v1 -f docker/Dockerfile .
```
### Step 6 - Verify the Image
```bash
docker images
```
Expected Output

REPOSITORY               TAG
enterprise-devops-app    v1
### Step 7 - Run the Container
```bash
docker run -d \
--name enterprise-devops-container \
-p 8080:80 \
enterprise-devops-app:v1
```
### Step 8 - Verify the Container
```bash
docker ps
```
### Step 9 - Test the Application
Open
```bash
http://localhost:8080
```
-------------------------------------
### Step 10 - Check Container Logs
```bash
docker logs enterprise-devops-container
```
### Step 11 - Stop the Container
```bash
docker stop enterprise-devops-container
```
### Step 12 - Start the Container
```bash
docker start enterprise-devops-container
```
### Step 13 - Remove the Container
```bash
docker stop enterprise-devops-container
```
```bash
docker rm enterprise-devops-container
```
# Docker Hub
### Step 14 - Login to Docker Hub
```bash
docker login
````
### Step 15 - Tag the Image

Replace YOUR_DOCKERHUB_USERNAME with your Docker Hub username.
```bash
docker tag enterprise-devops-app:v1 YOUR_DOCKERHUB_USERNAME/enterprise-devops-app:v1
```
Example:
```bash
docker tag enterprise-devops-app:v1 alskill/enterprise-devops-app:v1
```
### Step 16 - Push the Image
```bash
docker push YOUR_DOCKERHUB_USERNAME/enterprise-devops-app:v1
```
Example:
```bash
docker push alskill/enterprise-devops-app:v1
```
### Step 17 - Verify the Image

Visit your Docker Hub repository and confirm that the image is available.

### Step 18 - Save Your Changes
```bash
git add .

git commit -m "Add Docker configuration"
```
```bash
git pull
```
```bash
git push
```
----------------------------------------
# Phase 5 – Kubernetes (Minikube)

## Step 1 – Verify Minikube Cluster

Check that Minikube is running.

```bash
minikube status
```

Verify the Kubernetes nodes.

```bash
kubectl get nodes
```

---

## Step 2 – Create the Namespace

Edit the namespace manifest.

```bash
nano kubernetes/namespace.yaml
```

Apply the namespace.

```bash
kubectl apply -f kubernetes/namespace.yaml
```

Verify.

```bash
kubectl get namespaces
```

---

## Step 3 – Create the ConfigMap

Edit the ConfigMap.

```bash
nano kubernetes/configmap.yaml
```

Apply it.

```bash
kubectl apply -f kubernetes/configmap.yaml
```

Verify.

```bash
kubectl get configmap -n enterprise-devops

kubectl describe configmap enterprise-config -n enterprise-devops
```

---

## Step 4 – Create the Secret

Edit the Secret.

```bash
nano kubernetes/secret.yaml
```

Apply it.

```bash
kubectl apply -f kubernetes/secret.yaml
```

Verify.

```bash
kubectl get secret -n enterprise-devops

kubectl describe secret enterprise-secret -n enterprise-devops
```

---

## Step 5 – Deploy the Application

Edit the Deployment.

```bash
nano kubernetes/deployment.yaml
```

The Deployment should include:

* Namespace
* Docker image
* ConfigMap
* Secret
* Replicas
* CPU requests
* CPU limits

Apply the Deployment.

```bash
kubectl apply -f kubernetes/deployment.yaml
```

Verify.

```bash
kubectl get deployment -n enterprise-devops

kubectl get pods -n enterprise-devops

kubectl describe deployment enterprise-devops-app -n enterprise-devops
```

---

## Step 6 – Create the Service

Edit the Service.

```bash
nano kubernetes/service.yaml
```

Apply it.

```bash
kubectl apply -f kubernetes/service.yaml
```

Verify.

```bash
kubectl get svc -n enterprise-devops

kubectl get endpoints -n enterprise-devops
```

---

## Step 7 – Verify the Application in the Browser

Open the application using the Kubernetes Service.

```bash
minikube service enterprise-devops-app -n enterprise-devops
```

Or display only the URL.

```bash
minikube service enterprise-devops-app -n enterprise-devops --url
```

Expected:

* Application opens successfully.
* HTML, CSS and JavaScript are loaded.
* Kubernetes Service is working correctly.

---

## Step 8 – Configure Ingress

Enable the NGINX Ingress Controller.

```bash
minikube addons enable ingress
```

Verify.

```bash
kubectl get pods -n ingress-nginx
```

Expected:

```text
ingress-nginx-controller Running
```

Edit the Ingress manifest.

```bash
nano kubernetes/ingress.yaml
```

Apply it.

```bash
kubectl apply -f kubernetes/ingress.yaml
```

Verify.

```bash
kubectl get ingress -n enterprise-devops

kubectl describe ingress enterprise-ingress -n enterprise-devops
```

Get the Minikube IP.

```bash
minikube ip
```

Update your hosts file to map the hostname (for example, `enterprise.local`) to the Minikube IP.

Verify the application in the browser.

```
http://enterprise.local
```

---

## Step 9 – Enable Metrics Server

Check the Minikube addons.

```bash
minikube addons list
```

Enable Metrics Server if it is not enabled.

```bash
minikube addons enable metrics-server
```

Verify.

```bash
kubectl top nodes

kubectl top pods -n enterprise-devops
```

---

## Step 10 – Create the Horizontal Pod Autoscaler (HPA)

Edit the HPA manifest.

```bash
nano kubernetes/hpa.yaml
```

Apply it.

```bash
kubectl apply -f kubernetes/hpa.yaml
```

Verify.

```bash
kubectl get hpa -n enterprise-devops
```

---

## Step 11 – Watch the Autoscaler

Open three terminals.

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

---

## Step 12 – Generate Load

Run a BusyBox container.

```bash
MSYS_NO_PATHCONV=1 kubectl run load-generator \
--image=busybox \
--restart=Never \
-it \
--rm \
-- sh
```

Inside BusyBox, generate continuous traffic.

```bash
while true; do
  wget -q -O- http://enterprise-devops-app.enterprise-devops.svc.cluster.local
done
```

---

## Step 13 – Observe Autoscaling

Watch the HPA increase the number of replicas.

Expected:

```text
Replicas

2
3
4
5
```

Verify.

```bash
kubectl get hpa -n enterprise-devops

kubectl get deployment -n enterprise-devops

kubectl get pods -n enterprise-devops
```

---

## Step 14 – Stop the Load Test

Inside BusyBox, press:

```text
Ctrl + C
```

---

## Step 15 – Observe Scale Down

Continue watching the HPA.

```bash
kubectl get hpa -n enterprise-devops -w
```

Expected:

```text
5
↓

4
↓

3
↓

2
```

The deployment will not scale below:

```text
minReplicas: 2
```








------------------------------------------------------------


----------------------------------





--------------------------------------------------
# Phase 1 – Jenkins Installation
### Step 1: Verify the current environment

Check what is running.

Docker containers
```bash
docker ps -a
```
Kubernetes pods
```bash
kubectl get pods -A
```

Reason:

Check the current state.
Identify temporary containers or pods that are no longer needed.
### Step 2: Remove temporary Docker test container

Our application is already running in Kubernetes.

The Docker container test-app was created only to verify that the Docker image worked.

It is not part of the final architecture.

Stop it:
```bash
docker stop test-app
```
Remove it:
```bash
docker rm test-app
```
Verify:
```bash
docker ps -a
```
Reason:

Avoid duplicate application instances.
Keep Docker clean.
Prevent confusion during CI/CD.
### Step 3: Remove HPA load-generator pod

Check:
```bash
kubectl get pods
```
If you still see:  load-generator

Delete it:
```bash
kubectl delete pod load-generator
```
Verify:
```bash
kubectl get pods
```
Reason:

- The load-generator was only used to test HPA.
- It is not part of the production deployment.
- We don't want unnecessary pods consuming resources.
### Step 4: Verify Kubernetes application
```bash
kubectl get pods
```
Expected:
```bash
enterprise-devops-app
```
Running

Check the service:
```bash
kubectl get svc
```
Check HPA:
```bash
kubectl get hpa
```
Reason:

Confirm the application is healthy before introducing Jenkins.

### Step 5: Verify Docker

Run these commands:
```bash
docker --version
docker ps
docker images
```
### Step 6 – Pull the Jenkins image
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

### Step 7– Create a Docker Volume

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
### Step 8 – Run the Jenkins Container

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

Type:  exit
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

### Step 7– Install Required Plugins

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

### Step 8 – Create the Dockerfile
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
### Step 9 – Start Jenkins with Docker Access

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

### Step 10 – Verify Tools Inside Jenkins Container

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

### Step 11– Configure Jenkins Tools

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
### step 12

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
personal Access Token
      ↓
generate token
```
Give it a name, for example:
```bash
jenkins-cicd
```
Select permission:   Read & Write
Generate token

Copy the token immediately (Docker Hub shows it only once).

Give it Read/Write permission.

After adding credentials, we will create your first:
```bash
Jenkinsfile
```
Save the file.

### Step 18: Push to GitHub

Run:
```bash
git add Jenkinsfile
git commit -m "Add Jenkins CI pipeline"
git push
```
### Phase 7 – Create the Jenkins Pipeline
#### Step 15 – Create the Jenkinsfile

Create:

enterprise-devops-platform/
└── jenkins/
    └── Jenkinsfile

Commit and push:

git add .
git commit -m "Add Jenkins pipeline"
git push
### Step 16 – Create the Pipeline job

Create a new Pipeline job.

Configure:

Definition: Pipeline script from SCM
SCM: Git
Repository URL: https://github.com/alfi-teachs/enterprise-devops-platform.git
Credentials: None (public repository)
Branch: */main
Script Path: jenkins/Jenkinsfile

Important: Uncheck Lightweight checkout.

Save.

#### Step 17 – Run the Pipeline

Click:   Build Now

Expected stages:

✅ Checkout Code
✅ Docker Build
✅ Docker Login
✅ Docker Push

----------------------------------
# for kubernetes we have delete jenkins and recreate jenkins wih kube config mounted

### Step 1 – Stop the Jenkins container

```bash
docker stop jenkins
docker rm jenkins
```
### Step 2 – Start Jenkins with kubeconfig mounted
Because you're using Git Bash on Windows, run:
```bash
docker run -d ^
  --name jenkins ^
  -p 8081:8080 ^
  -p 50000:50000 ^
  -v jenkins_home:/var/jenkins_home ^
  -v //var/run/docker.sock:/var/run/docker.sock ^
  -v "C:\Users\almal\.kube:/var/jenkins_home/.kube" ^
  -v "C:\Users\almal\.minikube:/var/jenkins_home/.minikube" ^
  -e KUBECONFIG=/var/jenkins_home/.kube/config ^
  jenkins-devops:lts
```
This mounts:
- Your kubeconfig
- Your Minikube certificates
- Docker socket
- Jenkins home
### Step 3 – Verify access
Enter the container:
```bash
docker exec -it jenkins bash
```
Run:
```bash
kubectl config current-context
```
Expected:   minikube

Then run:
```bash
kubectl get nodes
```
If everything is mounted correctly, you should see your three Minikube nodes.

### step 4 
now we add it in jenkinsfile

```bash
stage('Deploy to Kubernetes') {
    steps {
        sh '''
        kubectl set image deployment/enterprise-devops-app \
        enterprise-devops-app=$IMAGE_NAME:$IMAGE_TAG
        '''
    }
}
```
# step 5 
```bash
cd ..
```
```bash
pwd
```
/c/project/enterprise-devops-platform
```bash
git add jenkins/Jenkinsfile
git commit -m "Add Kubernetes deployment stage"
```
```bash
git pull
```
```bash
git push
```
###step 6

ping command
```bash
apt-get update
apt-get install -y iputils-ping
```
then test
```bash
ping host.docker.internal
```
