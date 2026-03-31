import json
import os
import aiohttp
from typing import Literal
import uuid
from fastapi import HTTPException
from pathvalidate import sanitize_filename

from models.pptx_models import PptxPresentationModel
from models.presentation_and_path import PresentationAndPath
from services.pptx_presentation_creator import PptxPresentationCreator
from services.temp_file_service import TEMP_FILE_SERVICE
from utils.asset_directory_utils import get_exports_directory
import uuid


async def export_presentation(
    presentation_id: uuid.UUID, title: str, export_as: Literal["pptx", "pdf"]
) -> PresentationAndPath:
    print("Starting export")
    if export_as == "pptx":
        import boto3
        from io import BytesIO

        S3_BUCKET = os.environ.get("S3_BUCKET", "your-s3-bucket-name")
        S3_PREFIX = os.environ.get("S3_PREFIX", "exports/")

        print(f"Exporting presentation {presentation_id} as PPTX with title '{title}'")
        print(f"S3_BUCKET: {S3_BUCKET}, S3_PREFIX: {S3_PREFIX}")

        # Get the converted PPTX model from the Next.js service
        async with aiohttp.ClientSession() as session:
            async with session.get(
                f"http://localhost/api/presentation_to_pptx_model?id={presentation_id}"
            ) as response:
                if response.status != 200:
                    error_text = await response.text()
                    print(f"Failed to get PPTX model: {error_text}")
                    raise HTTPException(
                        status_code=500,
                        detail="Failed to convert presentation to PPTX model",
                    )
                pptx_model_data = await response.json()


        # Create PPTX file using the converted model
        pptx_model = PptxPresentationModel(**pptx_model_data)
        print("Got PPTX model, creating presentation...")
        temp_dir = TEMP_FILE_SERVICE.create_temp_dir()
        print(f"Created temporary directory at {temp_dir}")
        pptx_creator = PptxPresentationCreator(pptx_model, temp_dir)
        print("Initialized PPTX creator, creating PPT...")
        await pptx_creator.create_ppt()
        print("PPTX presentation created successfully")

        # Save to BytesIO buffer
        pptx_buffer = BytesIO()
        print("Saving PPTX to buffer...")
        pptx_creator._ppt.save(pptx_buffer)
        print("PPTX saved to buffer, size")
        pptx_buffer.seek(0)
        print("Buffer seeked to start, uploading to S3...")

        # Upload to S3
        s3 = boto3.client("s3")
        s3_key = f"{S3_PREFIX}{presentation_id}.pptx"
        print(f"Uploading PPTX to S3 at key: {s3_key}...")
        s3.upload_fileobj(pptx_buffer, S3_BUCKET, s3_key)
        print("PPTX uploaded to S3 successfully")


        s3_url = f"s3://{S3_BUCKET}/{s3_key}"
        print(f"PPTX uploaded to S3 successfully, URL: {s3_url}")

        return PresentationAndPath(
            presentation_id=presentation_id,
            path=s3_url,
        )
    else:
        async with aiohttp.ClientSession() as session:
            async with session.post(
                "http://localhost/api/export-as-pdf",
                json={
                    "id": str(presentation_id),
                    "title": sanitize_filename(title or str(uuid.uuid4())),
                },
            ) as response:
                response_json = await response.json()

        return PresentationAndPath(
            presentation_id=presentation_id,
            path=response_json["path"],
        )
