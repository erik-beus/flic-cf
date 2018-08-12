import * as PubSub from '@google-cloud/pubsub'

export const sendPlayMessage = async (message: PubSub.Publisher.Attributes) => {
  // Creates a client
  let configuration: PubSub.GCloudConfiguration = {}
  if (!process.env.hasOwnProperty('LIVE')) {
    configuration = {
      keyFilename: 'publish-auth.json',
    }
  }
  const pubsub = PubSub(configuration)

  try {
    const messageId = await pubsub
      .topic('sonos')
      .publisher()
      .publish(Buffer.from('play'), message)
    console.log(`Succesfully published message with id: ${messageId}`)
    return true
  } catch (error) {
    console.error(error.message)
    return false
  }
}
