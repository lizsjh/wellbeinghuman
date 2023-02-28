var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:3000,
    loading: true,
    content: 'Hello. This is Alex, and I am a well-being expert from DailyNote. I will be assisting you with your jounraling.'
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        content:'Throughout our conversation, I will ask you some open-ended questions. You can respond to them as you want.'
    });
}).then(function(){
    return botui.message.add({
        delay:5000,
        loading: true,
        content:'Because I want you to have a journaling experience, I will not respond to your thoughts, but just ask you questions and keep the flow going.'
    });
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'Everything you share will be strictly confidential between us.'
    });
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'Now let`s start! How was your day?'
    });
}).then(function(){
    return botui.action.button({
        action: [
          { text: 'Great',
            value: 'Great' 
          },
          { text: 'Fine',
            value: 'Fine' 
          },
          { text: 'Bad',
            value: 'Bad' 
          },
          { text: 'Horrible',
            value: 'Horrible' 
          }
        ]
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:2000,
        loading: true,
        content:'What kind of emotion did you feel the most today?'
    });
}).then (function () {
     if (response[0]=="Great" || response[0]=="Fine") {
            return botui.action.button({
                action: [
                { text: 'Joy',
                  value: 'Joy' 
                },
                { text: 'Anticipation',
                  value: 'Anticipation' 
                },
                { text: 'Trust',
                  value: 'Trust'
                },
                { text: 'Surprise',
                  value: 'Surprise' 
                }
                ]
            });
      } else {
            return botui.action.button({
                action: [
                { text: 'Fear',
                  value: 'Fear' 
                },
                { text: 'Anger',
                  value: 'Anger' 
                },
                { text: 'Sadness',
                  value: 'Sadness' 
                },
                { text: 'Disgust',
                  value: 'Disgust' 
                },
                { text: 'Surprise',
                  value: 'Surprise' 
                }
                ]
            });
}}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then (function () {
     if (response[0]=="Great" || response[0]=="Fine") {
            return botui.message.add({
            delay:2000,
            loading: true,
            content:'I am glad you felt that way. What made you feel that?'
            });
      } else {
            return botui.message.add({
            delay:2000,
            loading: true,
            content:'I am sorry you felt that way. What made you feel that?'
            });
}}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then (function () {
     if (response[0]=="Great" || response[0]=="Fine") {
            return botui.message.add({
            delay:3000,
            loading: true,
            content:'Thank you for sharing. I know you have been doing great, but can you share with me one thing that has been bothering you today?'
            });
      } else {
            return botui.message.add({
            delay:3000,
            loading: true,
            content:'Thank you for sharing. I know you have not been doing great, but can you share with me one positive thing that happened to you today?'
            });
}}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
        });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:3500,
        loading: true,
        content:'I applaud you for taking the first step in sharing your feelings with me. I appreciate your faith in me.'
    });
}).then(function(){
    return botui.message.add({
        delay:2000,
        loading: true,
        content:'Let`s end today`s journaling here, and I will talk to you another day.'
    });
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:2000,
        loading: true,
        content:'Thank you and have a great rest of your day. Bye!'
    });
});

function sendcomplete(){
    window.parent.postMessage({"message": "completed","text1":response[0],"text2":response[1],"text3":response[2], "text4":response[3]}, "*");
};
