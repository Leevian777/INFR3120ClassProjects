(function(){
    function Start()
    {
        console.log("App Started");
    }
    window.addEventListener("load", Start);
    window.addEventListener("click", function(e){
        this.getAttribute("href")
    })
})();

