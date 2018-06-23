//welcome_screen
const translateWelcomeScreen = (data) => {
  const response = {}
  response.text = data.title
  response.quick_replies = [
    {
      content_type: 'text',
      title: data.properties.button_text,
      payload: data.properties.button_text,
    },
  ]
  return response
}

//short_text
const translateShortText = (data) => {
  return { text: data.title }
}

const translateLongText = (data) => {
  return { text: data.title }
}

//statement to quick reply
const translateStatement = (data) => {
  const response = {}
  response.text = data.title
  response.quick_replies = [
    {
      content_type: 'text',
      title: data.properties.button_text,
      payload: data.properties.button_text,
    },
  ]
  return response
}

//multiple_choice
const translateMultipleChoice = (data) => {
  //translate TF multiple choice to FB template with buttons
  const response = {}
  const choices = data.properties.choices.map(choice => {
    return {
      type: 'postback',
      title: choice.label,
      payload: choice.label,
    }
  })
  response.attachment = {
    type: 'template',
    payload: {
      template_type: 'button',
      text: data.title,
      buttons: choices,
    },
  }
  return response
}

//yes_no to quick reply
const translateYesNo = (data) => {
  const response = {}
  response.text = data.title
  response.quick_replies = [
    {
      content_type: 'text',
      title: 'yes',
      payload: 'yes',
    },
    {
      content_type: 'text',
      title: 'no',
      payload: 'no',
    },
  ]
  return response
}

//email to quick reply (fb has qr button for sending email assoc with account)
const translateEmail = (data) => {
  const response = {}
  response.text = data.title
  response.quick_replies = [
    {
      content_type: 'user_email',
      title: 'send email',
    },
  ]
  return response
}

//opinion scale to quick reply
const translateOpinionScale = (data) => {
  const response = {}
  response.text = data.title
  response.quick_replies = [
    {
      content_type: 'text',
      title: '1',
      payload: '1 out of 5',
    },
    {
      content_type: 'text',
      title: '2',
      payload: '2 out of 5',
    },
    {
      content_type: 'text',
      title: '3',
      payload: '3 out of 5',
    },
    {
      content_type: 'text',
      title: '4',
      payload: '4 out of 5',
    },
    {
      content_type: 'text',
      title: '5',
      payload: '5 out of 5',
    },
  ]
  return response
}

const translateRatings = (data) => {
  const response = {}
  let counter = 0
  response.text = data.title
  response.quick_replies = Array(data.properties.steps).fill('*').map(space => {
    return {
      content_type: 'text',
      title: ++counter,
      payload: `${counter} out of ${data.properties.steps}`,
    }
  })
  return response
}

module.exports = {
  translateWelcomeScreen,
  translateShortText,
  translateLongText,
  translateStatement,
  translateYesNo,
  translateMultipleChoice,
  translateEmail,
  translateOpinionScale,
  translateRatings,
}