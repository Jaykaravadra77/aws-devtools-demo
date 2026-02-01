# AWS Developer Tools Hands-on Learning Guide

This guide will walk you through using **AWS CodeCommit**, **AWS CodeBuild**, **AWS CodeDeploy**, and **AWS CodeGuru** practically. We will build a simple Node.js CRUD API and set up a full CI/CD pipeline.

---

## 📅 Project Roadmap

### 📋 Phase 1: Local Setup (Node.js)
In this phase, we build the "heart" of our project. A simple API that stores data in a file.
- **Goal:** Create a working REST API.
- **Tasks:**
  - [x] Initialize Node.js project.
  - [x] Create `server.js` with Express.
  - [x] Implement CRUD logic (Create, Read, Update, Delete) using `tasks.json`.
  - [x] Test the API locally using `curl` or Postman.

### 📋 Phase 2: GitHub (Source Control)
Get your code into a hosted repository so AWS can pull it.
- **Tasks:**
  - [ ] Create a GitHub repository.
  - [ ] Initialize Git locally and push code.

### 📋 Phase 3: EC2 Infrastructure (Production Server)
Set up the machine where your code will actually run.
- **Tasks:**
  - [ ] Launch EC2 Instance (Amazon Linux 2023).
  - [ ] Install Node.js & PM2.
  - [ ] Open Port 3000 in Security Group.

### 📋 Phase 4: Secrets & Security (The SSH Key)
Securely store your access key so AWS can "talk" to your EC2.
- **Tasks:**
  - [ ] Store PEM key in AWS Secrets Manager.
  - [ ] Create IAM Role for CodeBuild.

### 📋 Phase 5: CodeBuild & CI (Automated Build/Deploy)
Create the brain that builds your code and sends it to EC2.
- **Tasks:**
  - [ ] Create `buildspec.yml`.
  - [ ] Set up CodeBuild Project.
  - [ ] Verify CodeBuild can successfully SSH and restart the app.

### 📋 Phase 6: CodePipeline (The Full Automation)
Tie everything together for a professional hands-off workflow.
- **Tasks:**
  - [ ] Create Pipeline (Source: GitHub -> Build: CodeBuild).
  - [ ] Test the full flow with a small code change!

---

> [!TIP]
> Each task is designed to be small. Copy these tasks one by one into Claude/AI as you work to stay focused!
