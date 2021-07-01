var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}

Recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;

    if(content=="take my selfie")
    {
        speak();
        console.log("taking selfie----");
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking your Selfie in 5 seconds";
    var UtterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(UtterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}

camera = document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format: "png",
    png_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML="<img id='selfie_img' src='"+data_uri+"'>";
    });
}

function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie_img").src;
    link.href=image;
    link.click();
}