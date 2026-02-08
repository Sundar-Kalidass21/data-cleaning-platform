from fastapi import FastAPI
from app.api import health, datasets, approval

app = FastAPI(title="Control Plane")

app.include_router(health.router)
app.include_router(datasets.router)
app.include_router(approval.router)
