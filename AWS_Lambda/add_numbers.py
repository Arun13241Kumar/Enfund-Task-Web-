def lambda_handler(event, context):
    try:
        # Extract numbers from the event
        num1 = event.get('num1', 0)
        num2 = event.get('num2', 0)

        # Ensure numbers are integers
        num1 = int(num1)
        num2 = int(num2)

        # Return the result
        return {
            'statusCode': 200,
            'body': {
                'num1': num1,
                'num2': num2,
                'result': num1 + num2
            }
        }
    except Exception as e:
        return {
            'statusCode': 400,
            'body': str(e)
        }
