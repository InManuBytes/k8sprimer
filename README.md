# Kubernetes Primer with OWASP DevSlop

Kubernetes Primer with OWASP DevSlop is a hands-on, interactive workshop and mini-CTF that was designed to give you a thorough understanding of the fundamentals of Kubernetes. 
Through a mix of lectures and mini-challenges, you’ll learn how Kubernetes works.  We will hack and break our clusters and then learn how to fix the underlying security issues.
<details><summary>What will you need?</summary><p>

- Laptop / Desktop
- Internet Connection
- **Tools**
  - Modern Terminal or PowerShell for Windows
  - Modern Web Browser
  - [kubectl](https://kubernetes.io/docs/tasks/tools/)
  - [Semgrep](https://semgrep.dev/docs/getting-started/)
  - [Docker](https://www.docker.com/products/docker-desktop)
  

</p></details>
<details><summary>Getting started</summary><p>

[Sign up](https://devslop.ctfd.io/) on the [CTF platform](https://devslop.ctfd.io/) and validate your account. Give us a few minutes to send you your cluster configuration file.
  
Download the [challenge files](challenges_files.zip) compressed in [challenges_files.zip](challenges_files.zip) . Extract its content in your working directory. 

When you receive your config file, save it in your working directory and use it for the [first setup challenge.](/challenges/k8s_setup/007.md)

</p></details>

<details><summary>K8S Pre-setup Challenges / Lectures </summary><p>

- [K8S Pre-setup: History of Virtualization](https://devslop.ctfd.io/challenges#Challenge%201-23)
- [K8S Pre-setup: Overview of Docker/Containers](https://devslop.ctfd.io/challenges#Challenge%202-24)
- [K8S PreSetup: What is container orchestration?](https://devslop.ctfd.io/challenges#Challenge%203-25)
- [K8S Pre-setup: History of Kubernetes Project](https://devslop.ctfd.io/challenges#Challenge%204-26)
- [K8S Pre-setup: Kubernetes Concepts and Architecture](https://devslop.ctfd.io/challenges#Challenge%205-27)
- [K8S PreSetup: Kubernetes Objects & Organization](https://devslop.ctfd.io/challenges#Challenge%206-28)
</p></details>
<details><summary>K8S Setup Challenges</summary><p>

- [K8S Setup: Log into Kubernetes](/challenges/k8s_setup/007.md)
- [K8S Setup: Interact with the kubectl API](/challenges/k8s_setup/008.md)
- [K8S Setup: Deploy Kubernetes Dashboard](/challenges/k8s_setup/010.md)
</p></details>

<details><summary>K8S Networking Challenges</summary><p>

- [K8S Networking: Cluster IP pinging](/challenges/k8s_networking/011.md)
- [K8S Networking: NodePort](/challenges/k8s_networking/012.md)
- [K8S Networking: Load Balancer](/challenges/k8s_networking/013.md)
</p></details>

<details><summary>K8S Deployment Challenges</summary><p>

- [K8S Deployment: Simple Deployment](/challenges/k8s_deployment/014.md)
- [K8S Deployment: Rolling Updates](/challenges/k8s_deployment/015.md)
</p></details>

<details><summary>K8S Security Challenges</summary><p>
- [K8S PreSetup: Kubernetes AuthN / AuthZ Overview](/challenges/k8s_setup/010.md)
- [K8S Security: Finding Credentials in Code](/challenges/k8s_security/016.md)
- [K8S Security: Fixing Secrets in Code](/challenges/k8s_security/017.md)
- [K8S Security: Exploiting SSRF in Kubernetes](/challenges/k8s_security/018.md)
- [K8S Security: Finding and fixing SSRF in K8S with Semgrep](/challenges/k8s_security/019.md)
- [K8S Security: Container Escape to Host](/challenges/k8s_security/020.md)
- [K8S Security: Write OPA Policy to Restrict Host](/challenges/k8s_security/022.md)
- [K8S Security: Namespace Bypass](/challenges/k8s_security/023.md)
- [K8S Security: Protection Against Cross Container Access](/challenges/k8s_security/024.md)
- [K8S Security: Consume all resources / DoS](/challenges/k8s_security/025.md)
- [K8S Security: OPA Rules to Constrain Resources](/challenges/k8s_security/026.md)
- [K8S Security: Bad Crypto Miner Image](/challenges/k8s_security/027.md)
- [K8S Security: Image Vulnerability](/challenges/k8s_security/028.md)
- [K8S PreSetup: What is Open Policy Agent (OPA)?](/challenges/k8s_setup/010.md)
- [K8S Security: OPA Rules to Restrict Image Origin](/challenges/k8s_security/029.md)
- [K8S Security: Kube Bench (EKS Bench)](/challenges/k8s_security/030.md)

</p></details>
