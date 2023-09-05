# Welcome to the Wing Example Project

![Wing Logo](https://your-repo-url.com/wing-logo.png)

## Overview

This GitHub repository serves as an example project for the exciting new Infrastructure as Code (IaC) language, **Wing**. Wing is a powerful IaC language that allows you to define and manage cloud infrastructure with ease. With Wing, you can compile your infrastructure definitions to Terraform code for popular cloud providers like AWS, Azure, and Google Cloud.

In this repository, we demonstrate the capabilities of Wing by creating a simple API that utilizes various cloud services, including a database, object storage bucket, and other resources. The key highlight of Wing is its ability to compile your infrastructure definitions into Terraform code tailored to your chosen cloud provider.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following tools and dependencies installed:

- [Wing CLI](https://wing-lang.org/docs/getting-started/installation) - Install the Wing CLI on your machine.
- [Terraform](https://www.terraform.io/downloads.html) - You'll need Terraform to apply the compiled infrastructure code.
- [AWS/Azure/Google Cloud CLI](https://aws.amazon.com/cli/)/[Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)/[Google Cloud SDK](https://cloud.google.com/sdk/docs/install) - Depending on your target cloud provider, install the respective command-line tools.

### Clone the Repository

To get started with this example project, clone this repository to your local machine:

```bash
git clone https://github.com/your-username/wing-example.git
cd wing-example

### Compile Your Infrastructure

Now that you have the repository locally, you can use Wing to compile your infrastructure definitions into Terraform code for your chosen cloud provider.

Here's an example for AWS:

```bash
wing compile --target tf-aws hello.w

Replace --target tf-aws with --target tf-azure or --target tf-google as needed for your target cloud provider.

### Explore the Infrastructure

Wing offers a graphical user interface (UI) that allows you to visualize your infrastructure and interact with it. To open the UI, use the following command:

```bash
wing it

Alternatively, you can also use the recommended VSCode extension to access the UI and manage your infrastructure directly from your development environment.

