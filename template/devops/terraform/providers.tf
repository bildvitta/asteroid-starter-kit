terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }

    github = {
      source = "integrations/github"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

provider "github" {
  owner = "bildvitta"
}
