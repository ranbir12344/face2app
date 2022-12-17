Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
    });
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
    function take_snapshot()
    {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image"src="'+data_uri+'"/>';
    });
    }
    console.log('ml5 version:', ml5.version);
    classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YmRM5oa0T/model.json',modelLoaded);
    function modelLoaded(){
        console.log('Model is Loaded!');
    }
    function check()
    {
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
    }
    function gotResult(error,results)
    if (error){
        console.error(error);
    } else {
    console.log(results);
    document.getElementById("result_of_objects").innerHTML=results[0].label;
    document.getElementById("result_of_accuracy").innerHTML=results[1].label;
    prediction_1=results[0].label;
    prediction_2=results[1].label;
    }






















