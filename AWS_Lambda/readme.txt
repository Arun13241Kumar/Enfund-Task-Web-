AWS Lambda Functions - Add Two Numbers & Store File in S3
This repository contains two AWS Lambda functions written in Python:

A Lambda function that adds two numbers and returns the result.
A Lambda function that stores a document (e.g., PDF) in an S3 bucket.
Table of Contents
1. Add Two Numbers Lambda Function
2. Store File in S3 Lambda Function
3. Deployment Instructions
4. Permissions Setup
5. Testing the Lambda Functions

test case for add two numbers
{
  "number1": 5,
  "number2": 7
}

with followinmg output
{
  "result": 12
}


test case for tore File in S3 
{
  "file_content": "base64encodedcontentofyourpdforfilehere",
  "file_name": "document.pdf",
  "bucket_name": "your-s3-bucket-name"
}
with followinmg output
{
  "statusCode": 200,
  "body": "File 'document.pdf' uploaded successfully to bucket 'your-s3-bucket-name'."
}
