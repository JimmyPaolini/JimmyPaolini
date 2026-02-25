---
applyTo: "**/*.yaml,**/*.yml,**/helm/**,**/kubernetes/**,**/k8s/**"
---

# Kubernetes Deployment Best Practices

Follow these guidelines when writing or modifying Kubernetes manifests, Helm charts, or related infrastructure configuration.

## Resource Management

- Always specify `resources.requests` and `resources.limits` for every container
- Set CPU requests conservatively and limits generously to avoid throttling
- Set memory limits equal to or slightly above requests to prevent OOM kills

## Health Checks

- Define `livenessProbe` and `readinessProbe` for all long-running containers
- Use `httpGet` probes where the application exposes a health endpoint
- Set appropriate `initialDelaySeconds`, `periodSeconds`, and `failureThreshold` values

## Configuration

- Use `ConfigMap` for non-sensitive configuration values
- Use `Secret` for sensitive values; never hardcode secrets in manifests
- Reference secrets via environment variables or mounted volumes, not inline values

## Security

- Run containers as non-root users by setting `securityContext.runAsNonRoot: true`
- Set `readOnlyRootFilesystem: true` where possible
- Drop unnecessary Linux capabilities with `securityContext.capabilities.drop`

## Availability

- Set `replicas` to at least 2 for production workloads
- Use `PodDisruptionBudget` to maintain availability during node maintenance
- Prefer `RollingUpdate` deployment strategy with appropriate `maxUnavailable` and `maxSurge`

## Labeling

- Apply consistent labels: `app`, `version`, `component`, `managed-by`
- Use `app.kubernetes.io/` prefix for standard labels
