
# Enterprise DevOps Platform - Project Setup

## Step 1: Create the Project Directory

```bash
mkdir enterprise-devops-platform
cd enterprise-devops-platform
```

---

## Step 2: Create the Project Structure

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

## Step 3: Verify the Directory Structure

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

## Step 4: Initialize Git Repository

```bash
git init
```

---

## Step 5: Check Current Branch

```bash
git branch
```

Output

```text
* master
```

---

## Step 6: Check Repository Status

```bash
git status
```

---

## Step 7: Add All Files

```bash
git add .
```

---

## Step 8: Create Initial Commit

```bash
git commit -m "Initial project structure"
```

---

## Step 9: Connect Local Repository to GitHub

```bash
git remote add origin git@github.com:alfi-teachs/enterprise-devops-platform.git
```

Verify

```bash
git remote -v
```

Expected Output

```text
origin  git@github.com:alfi-teachs/enterprise-devops-platform.git (fetch)
origin  git@github.com:alfi-teachs/enterprise-devops-platform.git (push)
```

---

## Step 10: Push the Repository

If using the **master** branch:

```bash
git push -u origin master
```

If using the **main** branch:

```bash
git push -u origin main
```

---

## Final Project Structure

```text
enterprise-devops-platform/
├── ansible/
├── app/
├── docker/
├── docs/
├── github-actions/
├── images/
├── jenkins/
├── kubernetes/
├── monitoring/
├── scripts/
└── terraform/
```
