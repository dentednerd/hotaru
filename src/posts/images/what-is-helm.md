---
title: "What's Helm?"
date: "2020-12-02"
featuredImage: "./images/automating-browserstack.jpeg"
category: "programming"
tags: ["learning resources", "Helm"]
---

Helm is a package manager for Kubernetes

Packages created by Helm are called **charts**

Helm can:

- install software
- automatically install software dependencies
- upgrade software
- configure software deployments
- fetch software packages from repositories

**Helm docs: [https://helm.sh/docs/](https://helm.sh/docs/)**

## Why is Helm useful?

- writing YAML manifests for Kubernetes deployments is really time-consuming
- deployments require at least 3 YAML manifests, often with a lot of duplication and hardcoding
- Helm simplifies all this by combining manifests into a single package, called a *chart*
- to install a chart to a cluster, run a single `helm install` command

## How it works

- the `helm` CLI provides all functionality
- to install on Mac: `brew install kubernetes-helm`

<!-- - We were writing k8s deployments in pure YAML in the beginning, but now we use `helm` for deployments
- Used to be that `helm` was client-side and `tiller` was server-side, but `tiller` has recently been deprecated


```sh
helm upgrade <deploymentName> gs://<repoName> <deploymentName>/app
``` -->

## Chart Repositories

- a Helm chart repo is a simple HTTP site that serves an `index.yaml` file and `.tar.gz` packaged charts.
- `helm`  has subcommands available to help package charts and create the required `index.yaml` file
- these files can be served by any web server, object storage service, or a static site host such as GitHub Pages

File structure of a Helm chart:

```sh
my-chart/
  |
  |- .helmignore // a list of files to ignore when packaging, similar to .gitignore
  |
  |- Chart.yaml // your chart metadata goes here, such as chart name and version, maintainer information, a relevant website, and search keywords
  |
  |- values.yaml // values to inject into your manifests, similar to .env or variable.tf
  |
  |- charts/ // contains the chart’s dependencies, similar to node_modules - preferable to use requirements.yaml though
  |
  |- requirements.yaml // lists the chart’s dependencies
  |
  |- templates/ // the template files in here combine with the values from values.yaml to be rendered into Kubernetes manifests
  |
  |- LICENSE // a plaintext license for the chart
  |
  |- README.md // just like any other README
```

Basic structure of a chart:

- `charts/`: Manually managed chart dependencies can be placed in this directory, though it is typically better to use `requirements.yaml` to dynamically link dependencies.
- `templates/`: This directory contains template files that are combined with configuration values (from `values.yaml` and the command line) and rendered into Kubernetes manifests. The templates use the Go programming language’s template format.
- `Chart.yaml`: A YAML file with metadata about the chart, such as chart name and version, maintainer information, a relevant website, and search keywords.
- `LICENSE`: A plaintext license for the chart.
- `README.md`: A readme file with information for users of the chart.
- `requirements.yaml`: A YAML file that lists the chart’s dependencies.
- `values.yaml`: A YAML file of default configuration values for the chart.

## Hierarchy

- Pod: a group of one or more containers that makes up a single application
- Deployment: manages one or more pods
- Service: provides an IP address for communication in and out of the deployment
- Ingress: a load balancer that allows for multiple target groups with a single entry point - a static IP

## Services

3 types of service:

- NodePort
- LoadBalancer (has cluster IP and external IP, available on port 80 (HTTP) or 443 (HTTPS))
- ClusterIP

You can see LoadBalancer external IPs for each of our feature branches in Cloud Console

## Deployments vs Services

- Service creates a persistent IP address in your cluster, allowing connections to the cluster
- Deployment creates a ReplicaSet, which creates a pod - the backend for the related service
- Multiple pods are possible, in which case the service load balances
- Pods can change over time, change IPs, but the service remains constant
- Can have multiple services backed by a single pod, or multiple pods backing a single service

## Ingress

- Ingress routes have a static IP, as opposed to an ephemeral IP
- Ingress uses rules to forward ports correctly

## Namespaces

- Our staging namespaces vary because of our feature branches, but all namespaces on prod are "default"
- Can't have multiple apps with the same name in a cluster

## Tags

- We apply tags to images so that we can refer to them more easily
- Without a tag, Kubernetes would just pull the latest image
