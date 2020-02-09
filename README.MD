```
kubectl create deployment hello-node --image=gcr.io/hello-minikube-zero-install/hello-node
```

```
kubectl expose deployment hello-node --type=LoadBalancer --port=8080
```
The --type=LoadBalancer flag indicates that you want to expose your Service outside of the cluster

