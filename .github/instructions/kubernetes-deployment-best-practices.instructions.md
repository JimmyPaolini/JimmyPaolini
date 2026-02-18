# Kubernetes Deployment Best Practices

## Purpose

Guidelines for creating and maintaining Kubernetes deployments, ensuring reliability, security, and operational excellence.

## Resource Configuration

### 1. Resource Limits and Requests

Always specify both CPU and memory:

```yaml
resources:
  requests:
    cpu: 100m
    memory: 128Mi
  limits:
    cpu: 500m
    memory: 512Mi
```

**Why:**

- Prevents resource starvation
- Enables proper scheduling
- Protects cluster stability

### 2. Health Checks

Implement all three probe types:

```yaml
livenessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 30
  periodSeconds: 10

readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 5

startupProbe:
  httpGet:
    path: /healthz
    port: 8080
  failureThreshold: 30
  periodSeconds: 10
```

### 3. Replica Configuration

```yaml
replicas: 3
strategy:
  type: RollingUpdate
  rollingUpdate:
    maxSurge: 1
    maxUnavailable: 0
```

**Best Practices:**

- Run at least 3 replicas for HA
- Use anti-affinity for distribution
- Configure PodDisruptionBudgets

## Security

### 1. Security Context

```yaml
securityContext:
  runAsNonRoot: true
  runAsUser: 1000
  fsGroup: 1000
  capabilities:
    drop:
      - ALL
  readOnlyRootFilesystem: true
```

### 2. Network Policies

- Implement least-privilege network access
- Use namespace isolation
- Define explicit ingress/egress rules

### 3. Secrets Management

- Never commit secrets to version control
- Use Kubernetes Secrets or external secret managers
- Rotate secrets regularly
- Mount secrets as files, not environment variables when possible

## Deployment Strategies

### Rolling Updates (Default)

- Zero-downtime deployments
- Gradual rollout
- Easy rollback

### Blue-Green

- For critical applications
- Full validation before switch
- Instant rollback capability

### Canary

- Progressive traffic shift
- Real-world testing
- Risk mitigation

## Labels and Annotations

### Required Labels

```yaml
metadata:
  labels:
    app: myapp
    version: v1.0.0
    component: backend
    managed-by: helm
```

### Useful Annotations

```yaml
metadata:
  annotations:
    prometheus.io/scrape: "true"
    prometheus.io/port: "8080"
    prometheus.io/path: "/metrics"
```

## ConfigMaps and Secrets

### ConfigMaps

- For non-sensitive configuration
- Can be mounted as files or env vars
- Support hot-reloading with tools

### Secrets

- For sensitive data
- Base64 encoded (not encrypted)
- Consider external secrets operator

## Monitoring and Logging

### Metrics

- Expose Prometheus metrics
- Include application-specific metrics
- Monitor golden signals (latency, traffic, errors, saturation)

### Logging

- Log to stdout/stderr
- Use structured logging (JSON)
- Include trace IDs for distributed tracing

### Alerts

- Define SLOs and SLIs
- Alert on symptoms, not causes
- Implement escalation policies

## Namespace Organization

### Best Practices

- One namespace per environment (dev, staging, prod)
- Use ResourceQuotas to prevent resource exhaustion
- Implement LimitRanges for default resource constraints

## Service Mesh Considerations

### When to Use Service Mesh

- Complex microservices architecture
- Need advanced traffic management
- Require strong security (mTLS)

### Tools

- Istio - Full-featured
- Linkerd - Lightweight
- Consul - Multi-cloud

## Helm Charts

### Chart Structure

```
mychart/
  Chart.yaml
  values.yaml
  templates/
    deployment.yaml
    service.yaml
    ingress.yaml
  charts/
```

### Best Practices

- Use values.yaml for configuration
- Template everything that varies
- Document all values
- Version charts semantically

## Troubleshooting Commands

```bash
# Check pod status
kubectl get pods -n namespace

# View pod logs
kubectl logs pod-name -n namespace -f

# Describe pod for events
kubectl describe pod pod-name -n namespace

# Execute into pod
kubectl exec -it pod-name -n namespace -- /bin/sh

# Port forward for local testing
kubectl port-forward service/service-name 8080:80 -n namespace
```

## Checklist Before Deployment

- [ ] Resource limits and requests defined
- [ ] Health checks configured
- [ ] Security context applied
- [ ] Multiple replicas for HA
- [ ] Labels and annotations complete
- [ ] Secrets externalized
- [ ] Monitoring configured
- [ ] Logging structured
- [ ] Documentation updated
- [ ] Rollback plan prepared
