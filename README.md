# Reverse-IP Application

## Overview

This repository hosts the Reverse-IP application, built with Node.js. Included is a CI/CD pipeline for building and deploying the application to a Kubernetes cluster using ArgoCD.

## Features

- **Reverse-IP Lookup**: A Node.js application for IP address reversal operations.
- **Automated CI/CD Pipeline**: Continuous Integration and Continuous Deployment setup with GitHub Actions.
- **Docker Integration**: Containerization support for consistent deployment.

## GitHub Workflows

Contained within the `.github/workflows` directory are two key workflows:

- `build_push_image.yaml`: For building the Docker image and pushing it to AWS Elastic Container Registry (ECR).
- `deploy_argocd.yaml`: For deploying the application to Kubernetes via ArgoCD.

## Getting Started

Follow these steps to set up the Reverse-IP application:

1. Clone the repository:

   ```bash
   git clone <repository-url>


2. Install dependencies:

   ```bash
      yarn install

2. Run application:

   ```bash
      yarn run start