import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from 'aws-lambda'

const { stringify } = JSON

export const hello: Handler<APIGatewayProxyEvent, APIGatewayProxyResult> =
  async function hello(event, context, callback) {
    return {
      body: stringify({ hello: 'ts-node' }),
      statusCode: 200,
    }
  }
