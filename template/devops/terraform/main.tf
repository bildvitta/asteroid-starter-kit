module "spa-on-aws" {
  source              = "github.com/bildvitta/spa-on-aws"

  area                = "Inovacao"

  name                = "{{ name }}"
  domain              = "nave.dev"

  environments        = ["production", "release", "develop", "feature"]

  aws_region          = "us-east-1"
  aws_route53_zone_id = "Z04421273BIW6F3RFN0QI" # nave.dev

  github_owner        = "bildvitta"
  github_repository   = "hub-client"
}
