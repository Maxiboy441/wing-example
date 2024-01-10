# Wing Example Project

Demonstrating the capabilities of the Infrastructure as Code (IaC) language, **Wing**.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Compile Your Infrastructure](#compile-your-infrastructure)
- [Explore the Infrastructure](#explore-the-infrastructure)
- [Testing](#testing)
- [License](#license)
- [Contact](#contact)

## Introduction

This GitHub repository serves as an example project for Wing, an IaC language designed for defining and managing cloud infrastructure seamlessly. Wing compiles infrastructure definitions into Terraform code, offering compatibility with popular cloud providers like AWS, Azure, and Google Cloud.

## Features

- **Wing Language**: Utilize the powerful IaC language for defining and managing cloud infrastructure.
- **Terraform Compatibility**: Compile infrastructure definitions into Terraform code for deployment on AWS, Azure, or Google Cloud.
- **Demonstration API**: Create a simple API showcasing Wing's capabilities with various cloud services, including a database and object storage.

## Technologies Used

- [Wing CLI](https://www.winglang.io/docs/start-here/installation)
- [Terraform](https://developer.hashicorp.com/terraform/downloads)

## Installation

Before you begin, make sure to install the required tools:

# Install Wing CLI
```bash
wing_version="latest" # or specify a version
curl -L https://www.winglang.io/install | VERSION=${wing_version} bash
```
# Install Terraform
Follow the instructions at https://developer.hashicorp.com/terraform/downloads

## Getting Started

# Clone the Repository
```bash
git clone https://github.com/Maxiboy441/wing-example.git
cd wing-example
```

# Compile Your Infrastructure
Compile your infrastructure definitions into Terraform code for your chosen cloud
provider. Example for AWS:

```bash
wing compile --target tf-aws hello.w
```

Replace --target tf-aws with --target tf-azure or --target tf-google as needed for your target cloud provider.

## Explore the Infrastructure

Wing provides a graphical user interface (UI) to visualize and interact with your
infrastructure:

```bash
wing it
```
Alternatively, use the recommended VSCode extension for a seamless development 
environment integration.


