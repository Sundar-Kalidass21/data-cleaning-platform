from fastapi import APIRouter

router = APIRouter(prefix="/approval")

@router.post("/{dataset_id}")
def approve_dataset(dataset_id: str):
    return {"dataset_id": dataset_id, "status": "APPROVED"}
