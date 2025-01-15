import boto3
import base64

def lambda_handler(event, context):
    try:
        # Extract file details from the event
        file_name = event['file_name']
        file_content = event['file_content']  # Base64 encoded

        # Decode the file content
        decoded_content = base64.b64decode(file_content)

        # S3 bucket name
        bucket_name = 'my-documents-bucket'

        # Upload file to S3
        s3 = boto3.client('s3')
        s3.put_object(Bucket=bucket_name, Key=file_name, Body=decoded_content)

        return {
            'statusCode': 200,
            'body': f"File '{file_name}' successfully uploaded to '{bucket_name}'."
        }
    except Exception as e:
        return {
            'statusCode': 400,
            'body': str(e)
        }
