from fastapi import APIRouter, UploadFile, File

router = APIRouter(prefix="/datasets")

@router.post("/upload")
def upload_dataset(file: UploadFile = File(...)):
    return {"message": "Dataset registered"}
