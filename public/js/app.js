

  var firebaseConfig = {
    apiKey: "AIzaSyCGhOsGgT0_5wrIclCjLQsN3tKV2Dz8sVM",
    authDomain: "mywallpaperapp-95265.firebaseapp.com",
    databaseURL: "https://mywallpaperapp-95265.firebaseio.com",
    projectId: "mywallpaperapp-95265",
    storageBucket: "mywallpaperapp-95265.appspot.com",
    messagingSenderId: "50537480947",
    appId: "1:50537480947:web:c4fade000cfa2ce0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth.Auth.Persistence.LOCAL;

 $("#btn-login").click(function(){
    
    var email = $("#email").val();
    var password = $("#password").val();

    var result= firebase.auth().signInWithEmailAndPassword(email,password);
    result.catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    });
});

$("#btn-logout").click(function(){
  firebase.auth().signOut();

});

function switchView(view){

  $.get({
    url: view,
    cache: false,

  }).then(function database(data){
    $("#container").html(data);
     
  });

}