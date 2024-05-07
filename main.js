//https://teachablemachine.withgoogle.com/models/fb32tjqKT/*

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});

    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/fb32tjqKT/model.json", modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}
  
function gotResults(error, results)
{
    if(error){
        console.error(error);
        return;
    }else{
        console.log('Resultado da comparaçao:', results);
    }

    
}
